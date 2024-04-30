const compression = require("compression");
const cors = require("cors");
const { indexRouter } = require("./src/router/indexRouter");
const { userRouter } = require("./src/router/userRouter");


const express = require("express");
const app = express();
const port = 3000;

/* express 미들 웨어 설정 */

// cors 설정
app.use(cors());

// body json 파싱
app.use(express.json());

// HTTP 요청 압축
app.use(compression());

// router
indexRouter(app);
userRouter(app);

app.post("/users", function (req, res) {
  const name = req.body.name;
  return res.send("어서오세요  " + name + "님 환영합니다.");
});

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`);
});
