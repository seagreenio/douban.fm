import { userInfo } from '../..'
import { bearer } from './config'

test('login should return correct request object', () => {
  const expectResult = {
    method: 'GET',
    url: 'https://api.douban.com/v2/fm/user_info',
    params: {
      avatar_size: 'large'
    },
    bearer
  }

  expect(userInfo(bearer)).toEqual(expectResult)
})
