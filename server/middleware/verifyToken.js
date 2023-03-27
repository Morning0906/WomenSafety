const jwt = require('jsonwebtoken');
// token密钥
const {
  secret
} = require('../utils/config')

function verifyToken(ctx) {
  const authorizationHeader = ctx.headers.authorization;
  if (!authorizationHeader) {
    ctx.throw(401, 'Authorization header not found');
  }

  const token = authorizationHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, secret);
    // token信息存储在此
    ctx.state.user = decoded;
  } catch (err) {
    ctx.throw(401, 'Invalid token');
  }
}

module.exports = verifyToken;
