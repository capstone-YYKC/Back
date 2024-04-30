const userController = require("../controller/userController");
const { jwtMiddleware } = require("../../jwtmiddleware");

exports.userRouter = function (app) {
  // 회원가입 API
  app.post("/signup", userController.signup);

  // 로그인 API
  app.post('/signin',userController.signin);
};
