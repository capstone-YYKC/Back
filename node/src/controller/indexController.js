const indexDao = require("../dao/indexDao");

exports.createDiary = async function (req, res) {
  const { userIdx } = req.verifiedToken;
  const { emotionStatus, emotionScore, content } = req.body;

  const insertDiaryRow = await indexDao.insertDiary(
    userIdx,
    emotionStatus,
    emotionScore,
    content
  );
  
  if(!userIdx || !emotionStatus || !emotionScore || !content){
    return res.send({
      isSuccess:false,
      code:400,
      message:"입력값이 누락되었습니다.",
    })
  }

  return res.send({
    isSuccess:true,
    code:200,
    message:"입력 완료",
  })
};

exports.readDiary = async function (req, res) {
  // 객체 비구조화 할당
  const { userIdx } = req.verifiedToken;

  let date = "2024-04-29";

  const selectDiaryByDateRows = await indexDao.selectDiaryByDate(userIdx, date);

  return res.send(selectDiaryByDateRows);
};
