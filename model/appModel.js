const sql = require("../services/db");

module.exports = (value) => {
  return new Promise(function getJoke(resolve, reject) {
    sql.query(
      `SELECT * FROM jokes ORDER BY RAND() limit 1`,
      function (err, res) {
        if (err) throw err;
        else {
          resolve(JSON.stringify(res));
        }
      }
    );
  });
};
