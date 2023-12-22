let Intial_State = {
    language: 'en-US',
    favorites: [],
    loader: false
}
export default function reducer(state = Intial_State, action) {
    //htkhud value bt3t state 3shn tghyr feha
    // wy b3dha tkhud actions wy t7ut value gdeda bdl adema
    switch (action.type) {

        case 'SET_LANGUAGE':
            return { ...state, language: action.payload }
        //hnshel value adema wy hn7ut value ely gya mn payload

        case 'SET_LOADER':
            return { ...state, loader: action.payload }


        default:
            return state
    }

}
//use dispatch btskhdmha lw 3yza a3ml fire
;