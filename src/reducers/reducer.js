export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_CHARACTERS':
            return {...state, list: action.payload}
        case 'ADD_FAV': 
            return { ...state, favs: [...state.favs, action.payload] };
        case 'CHANGE_THEME':
            return { ...state, theme: action.payload };
        case 'GET_CHARACTER':
            return { ...state, character: action.payload };
        case 'DELETE_FAV': 
            return { ...state, favs: state.favs.filter(item => item.id !== action.payload.id) };
        default:
            return state;
}
};