import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const createToken = (userId, email) => {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: '7d' }
  )
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export const getAuthFromCookie = (request) => {
  const token = request.cookies.get('auth-token')?.value
  if (!token) return null
  return verifyToken(token)
}
