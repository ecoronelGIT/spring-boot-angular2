export interface IUser {
  id: number
  firstName: string
  lastName: string
  userName: string
}

export interface IAuthenticationRequest {
  username: string
  password: string
}