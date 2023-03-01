const { connection } = require("../model/connection");

const getUser = async (req, res) => {
  try {
    let sqlQuery = "SELECT * FROM users";
    await connection.query(sqlQuery, (err, result) => {
      if (err) {
        return res.send({ status: 400, error: err.sqlMessage });
      } else {
        return res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, error: err.sqlMessage });
  }
};

const postUser = async (req, res) => {
  try {
    let sqlQuery = "INSERT INTO users SET ?";
    let data = req.body;
    await connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

const putUser = async (req, res) => {
  try {
    let sqlQuery = "UPDATE users SET ? WHERE id = ?";
    console.log(sqlQuery);
    let data = [req.body, req.params.id];
    await connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

const deleteUser = async (req, res) => {
  try {
    let sqlQuery = "DELETE FROM users WHERE id = ?";
    let data = [req.params.id]
    await connection.query(sqlQuery, data, (err, result) => {
      if (err) {
        res.send({ status: 400, Error: err.sqlMessage });
      } else {
        res.send({ status: 200, response: result });
      }
    });
  } catch (err) {
    res.send({ status: 400, Error: err.sqlMessage });
  }
};

module.exports = { getUser, postUser, putUser, deleteUser };
