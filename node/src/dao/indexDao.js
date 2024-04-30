const { pool } = require("../../database");

exports.getUserRows = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery = "SELECT * FROM Users;";

      const [row] = await connection.query(selectUserQuery);

      connection.release();

      return row;
    } catch (err) {
      console.log(` #### getUserRows Query error #### `);
      connection.release();
      return false;
    }
  } catch (err) {
    console.log(` #### getUserRows DB error #### `);
    return false;
  }
};

exports.insertDiary = async function (
  userIdx,
  emotionStatus,
  emotionScore,
  content
) {
  try {
    // DB 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const insertDiaryQuery =
        "insert into diary (userIdx, emotionStatus, emotionScore, content) values(?,?,?,?);";

      const insertDiaryParams = [userIdx, emotionStatus, emotionScore, content];

      const [row] = await connection.query(insertDiaryQuery, insertDiaryParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` #### insertDiary Query error #### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` #### insertDiary DB error #### \n ${err}`);
    return false;
  }
};

exports.selectDiaryByDate = async function (userIdx,date){
  try {
    // DB 검사
    const connection = await pool.getConnection(async (conn) => conn);
    try {
      // 쿼리
      const selectDiaryByDateQuery =
        "select * from yykcdiary.diary where userIdx = ? and date(writeAt) = ?;";

      const selectDiaryByDateParams = [userIdx,date];

      const [row] = await connection.query(selectDiaryByDateQuery, selectDiaryByDateParams);
      connection.release();
      return row;
    } catch (err) {
      console.error(` #### selectDiaryByDate Query error #### \n ${err}`);
      connection.release();
      return false;
    }
  } catch (err) {
    console.error(` #### selectDiaryByDate DB error #### \n ${err}`);
    return false;
  }
}