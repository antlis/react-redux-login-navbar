// array in local storage for registered users
import {journalConstants} from "../../constants/journalContstants";

let users = JSON.parse(localStorage.getItem('users')) || [];

const objTypes = [journalConstants.AUTH, journalConstants.NODE, journalConstants.DATABASE, journalConstants.OBJECT];

function createJournals() {
    let journals = [];
    for (let i = 0; i < journalConstants.PAGE_SIZE; i++) {
        journals[i] = {
            id: Math.ceil(Math.random() * 1000000000),
            time: Date.now() / 1000,
            type: objTypes[i % 4],
            source: "Пользователь " + i,
            result: 'ok'
        }
    }
    return journals;
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    let uuid = s.join("");
    return {id: uuid};
}

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    // let params = JSON.parse(opts.body);

                    // if login details are valid return user details and fake jwt token
                    let responseJson = {
                        name: " superadmin superadmin superadmin (#1)",
                        login: "superadmin",
                        group: {
                            groupId: 1,
                            name: "superadmins",
                            parentId: null,
                            objState: 10,
                            usersList: null,
                            role: "SUPER_ADMIN",
                            sanctionTypes: []
                        }
                    };

                    resolve({ok: true, json: () => responseJson});
                }

                // get journals
                if (url.match('/getJobResult?') && opts.method === 'POST' || opts.method === 'OPTIONS') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    resolve({ok: true, json: () => createJournals()});
                    return;
                }
                if (url.match('/createJob?') && opts.method === 'POST' || opts.method === 'OPTIONS') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    resolve({ok: true, json: () => createUUID()});
                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => {
                            return user.id === id;
                        });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ok: true, json: () => user});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => {
                        return user.username === newUser.username;
                    }).length;
                    if (duplicateUser) {
                        reject('Username "' + newUser.username + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ok: true, json: () => ({})});

                    return;
                }

                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ok: true, json: () => ({})});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}