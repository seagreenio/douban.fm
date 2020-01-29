interface LoginParams {
  username: string
  password: string
}
/**
 * 登录豆瓣 FM 并记录下 token。
 *
 */
declare const login: ({
  username,
  password
}: LoginParams) => {
  method: string
  url: string
  data: {
    grant_type: string
    client_id: string
    client_secret: string
    username: string
    password: string
  }
}
export { login }
