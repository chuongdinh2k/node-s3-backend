export const isAuthenticated = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized - Bearer token missing' });
  }
  // Extract the token from the Authorization header
  const token = authHeader.split(' ')[1];
  console.log("token", token);
  next()
  // try{}
  // catch()
};
