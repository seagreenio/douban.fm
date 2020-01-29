export const BASE_URL = 'https://api.douban.com/v2/fm'

export const withBearer = (obj: object, bearer: string) => ({ ...obj, bearer })
