const initState ={
      email_id:"",
      password:"",
      user_logged_in:false,
      isError:true,
      user_data:[],
      project_data:[]
}

const logg = (state=initState ,action) =>{
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        user_logged_in:true
      }
    case "LOG_OUT":
      return {
        ...state,
        user_logged_in:false
      }
    case "EMAIL_CHANGE":
      return {
        ...state,
        email_id:action.data
      };
    case "PASSWORD_CHANGE":
      return {
        ...state,
        password:action.data
      };
    case "STORE_USER_DATA":
      return {
        ...state,
        user_data:action.data
      }
    case "STORE_PROJECT_DATA":
        return {
          ...state,
          project_data:action.data
        }
    default:
      return state

  }
};

export default logg;
