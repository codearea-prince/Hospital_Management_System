export const generateToken = (user, message, statusCode, res) => {
    const token = user.generateJsonWebToken();
    // Determine the cookie name based on the user's role
    const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';
  
    res
      .status(statusCode)
      .cookie(cookieName, token, {
        expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000   //this determines the expiry date of that token(read from rightside like millisecond-> second->minute->hour->7 days as cookie_expre = 7)
        ),
        httpOnly: true,
        secure: true,
        sameSite: "None"
      })
      .json({
        success: true,
        message,
        user,
        token,
      });
  };
  
  