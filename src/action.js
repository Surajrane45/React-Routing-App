export const LogIn = () =>{
  return{
    type: "LOG_IN"
  }
}

export const LogOut = () =>{
  return{
    type: "LOG_OUT"
  }
}

export const EmailChange = (value) => {
  return{
    type: "EMAIL_CHANGE",
    data:value
  }
}

export const PasswordChange = (value) => {
  return{
    type: "PASSWORD_CHANGE",
    data:value
  }
}

export const StoreUserData = (UserData) => {
  return{
    type: "STORE_USER_DATA",
    data: UserData
  }
}

export const StoreProjectData = (ProjectData) => {
    return{
      type: "STORE_PROJECT_DATA",
      data: ProjectData
    }
}
