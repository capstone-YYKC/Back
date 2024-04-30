const { pool } = require("../../database");

exports.insertUser = async function (email, password, nickname, hwId) {
    try {
        // DB 검사
        const connection = await pool.getConnection(async (conn) => conn);
        try {
          // 쿼리
          const insertUserQuery =
          "insert into users(email, password,nickname,hwId) values (?,?,?,?);"
          const insertUserParams = [email, password, nickname, hwId];
    
          const [row] = await connection.query(insertUserQuery, insertUserParams);
          connection.release();

          return row;

        } catch (err) {
          console.error(` #### insertUser Query error #### \n ${err}`);
          connection.release();
          return false;
        }
      } catch (err) {
        console.error(` #### insertUser DB error #### \n ${err}`);
        return false;
      }
    
};

exports.selectUserByEmail = async function (email){
    try {
      // DB 검사
      const connection = await pool.getConnection(async (conn) => conn);
      try {
        // 쿼리
        const selectUserByEmailQuery =
          "select * from users where email = ?"
        const selectUserByEmailParams = [email];
  
        const [row] = await connection.query(selectUserByEmailQuery, selectUserByEmailParams);
        connection.release();
        return row;
      } catch (err) {
        console.error(` #### selectUserByEmail Query error #### \n ${err}`);
        connection.release();
        return false;
      }
    } catch (err) {
      console.error(` #### selectUserByEmail DB error #### \n ${err}`);
      return false;
    }
  }

  exports.selectUser = async function(email,password){
    try {
        // DB 검사
        const connection = await pool.getConnection(async (conn) => conn);
        try {
          // 쿼리
          const selectUserQuery =
            "select * from users where email = ? and password = ?;";
          const selectUserParams = [email,password];
    
          const [row] = await connection.query(
            selectUserQuery,
            selectUserParams
        );
          connection.release();
          return row;
        } catch (err) {
          console.error(` #### selectUser Query error #### \n ${err}`);
          connection.release();
          return false;
        }
      } catch (err) {
        console.error(` #### selectUser DB error #### \n ${err}`);
        return false;
      }
  }