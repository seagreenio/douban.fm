import { login } from '../..'

test('login should return correct request object', () => {
  const expectResult = {
    method: 'POST',
    url: 'https://www.douban.com/service/auth2/token',
    data: {
      username: 'test',
      password: '123456',
      grant_type: 'password',
      client_id: '02646d3fb69a52ff072d47bf23cef8fd',
      client_secret: 'cde5d61429abcd7c'
    }
  }

  expect(
    login({
      username: 'test',
      password: '123456'
    })
  ).toEqual(expectResult)
})
