
export default function clients(state={},action){
    switch(action.type){
        case "ADD_CLIENT":
            return [...state, action.payload];
        default:
            return state;
    }
}
