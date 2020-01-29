const AUTH_URL = 'https://www.douban.com/service/auth2/token'

const loginFixedParams = {
  grant_type: 'password',
  client_id: '02646d3fb69a52ff072d47bf23cef8fd',
  client_secret: 'cde5d61429abcd7c'
}

interface LoginParams {
  username: string
  password: string
}

/**
 * 登录豆瓣 FM 并记录下 token。
 *
 */
const login = ({ username, password }: LoginParams) => ({
  method: 'POST',
  url: AUTH_URL,
  data: {
    username,
    password,
    ...loginFixedParams
  }
})

export { login }
