import content from '../lang/Lang';

const getContent = (lang = 'en') => {
    return content.filter(obj => obj.lang === lang)[0];
};

const initialState = {
    content: getContent() // Loads default language content (en) as an initial state
};

export function translate(state = initialState, action) {
    switch (action.type) {
        case 'SWITCH_LANGUAGES':
            return {
                content: getContent(action.lang)
            };
            break;
        default:
            return state;
    }
}
