

export default function accounts(state={},action){
    switch(action.type){
        case 'GET_ACCOUNTS':
            return action.payload;
        case 'ADD_ACCOUNT':
            return [...state,action.payload];
        default:
            return state;
    }

}
