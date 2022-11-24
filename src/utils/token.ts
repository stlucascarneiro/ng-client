import { getCookie } from 'cookies-next'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'

export const getToken = (req?: NextApiRequest, res?: NextApiResponse) => {
  const nextApi = (req && res) ? { req, res } : undefined
  const token: any = getCookie('JWT', nextApi)
  try {
    const payload: any = jwt.decode(token)
    if (!payload || !payload.id || !payload.username) return null
    return { token, id: payload.id, username: payload.username }
  } catch (error) {
    return null
  }
}