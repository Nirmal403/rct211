const reducer = (oldState, action)=>{
    // console.log("Action is", action)
    switch(action.type){
        case "INCREMENT":
    return {...oldState, counter: oldState.counter + action.payload}
        case "DECREMENT":
    return {...oldState, counter: oldState.counter - action.payload}
        default:
            return oldState;
    };
}
export {reducer};