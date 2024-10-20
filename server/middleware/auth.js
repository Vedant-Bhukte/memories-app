import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
  try {
    //console.log(req.headers);
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {   /// My one
      decodedData = jwt.verify(token, secret); 

      req.userId = decodedData?.id;
    } else {  // Google 
      decodedData = jwt.decode(token); 

      req.userId = decodedData?.sub; // googel name for id- to differentiate
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;