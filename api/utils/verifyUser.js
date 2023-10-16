import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verityToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).json("You need to Login");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Token is not valid!'));

    req.user = user;
    next();
  });
};