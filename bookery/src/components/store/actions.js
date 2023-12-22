//export default
function changeLanguage(newLang) {
    return {
        type: 'SET_LANGUAGE',
        payload: newLang,

    };
}

export default function changeLoader(loaderData) {
    return {
        type: 'SET_LOADER',
        payload: loaderData
    }
}
