import { GETUSERS } from "./ActionsTypes"

const initialState = {
    users:[],
    msg:"",
    loading: true,

    

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GETUSERS:
    return { ...state, users:payload.getuser, msg:payload.msg, loading:false }

  default:
    return state
  }
}
