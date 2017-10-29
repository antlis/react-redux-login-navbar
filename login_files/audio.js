function findAudio() {
    return {
        a: document.getElementById('audioIdA'),
        b: document.getElementById('audioIdB')
    };
}

function initHandlers() {
    findAudio().a.addEventListener('timeupdate', function (event) {
        if (findAudio().a.paused) {
            return;
        }

        if (findAudio().a.seeking) {
            if (!findAudio().b.paused) {
                if ((findAudio().a.currentTime - findAudio().b.currentTime) >= 1) {
                    findAudio().b.currentTime = findAudio().a.currentTime;
                }
            }
            return;
        }

        if (!findAudio().b.paused) {
            if ((findAudio().a.currentTime - findAudio().b.currentTime) >= 1) {
                findAudio().a.currentTime = findAudio().b.currentTime;
            }
        }
    });

    findAudio().b.addEventListener('timeupdate', function (event) {
        if (findAudio().b.paused) {
            return;
        }

        if (findAudio().b.seeking) {
            if (!findAudio().a.paused) {
                if ((findAudio().b.currentTime - findAudio().a.currentTime) >= 1) {
                    findAudio().a.currentTime = findAudio().b.currentTime;
                }
            }
            return;
        }

        if (!findAudio().a.paused) {
            if ((findAudio().b.currentTime - findAudio().a.currentTime) >= 1) {
                findAudio().b.currentTime = findAudio().a.currentTime;
            }
        }
    });
}

