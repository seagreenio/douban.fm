import { BASE_URL, withBearer } from './config'

const userInfoFixedParams = {
  avatar_size: 'large'
}

const userInfo = (bearer: string) =>
  withBearer(
    {
      method: 'GET',
      url: `${BASE_URL}/user_info`,
      params: userInfoFixedParams
    },
    bearer
  )

export { userInfo }
