const indexController = require("../controller/indexController");
const { jwtMiddleware } = require("../../jwtmiddleware");

exports.indexRouter = function (app) {
  // 일기 CRUD API
  app.post("/diary",jwtMiddleware, indexController.createDiary); // create
  app.get("/diarys", jwtMiddleware,indexController.readDiary); // read

  app.get(
    "/dummy",
    function (req, res, next) {
      console.log(1);
      next();
    },
    function (req, res, next) {
      console.log(2);
      next();
    },
    function (req, res, next) {
      console.log(3);
      next();
    }
  );
};
