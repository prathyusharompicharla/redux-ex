const { add_One, minus_One } = require("./Counter")



const initial_Stage={
    number:1
}


function reducer(state=initial_Stage,action){
    switch(action.type){
        case add_One:
            return {
     number:this.state.number+1
            }
            case minus_One:
                return{
number:this.state.number-1
                }
                default:
                    return state

            }

    }
    
export default reducer
