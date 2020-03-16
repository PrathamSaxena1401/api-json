const express = require("express");
const cors = require("cors");
const bp = require("body-parser");
const mysql = require("mysql");
const app = express();
const selectAll = "SELECT * FROM menu";
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "foodie"
});

con.connect(function(err) {
  if (err) throw err;
  else console.log("connected");
});

app.get("/", function(req, res) {
  res.send("hello");
});

app.get("/menu", (req, res) => {
  con.query(selectAll, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: results
      });
    }
  });
});

//app.get('/products/add',(req,res) => {
//const {username, email, password} = req.query;
// const I_P_Q = "INSERT INTO reg (username, email, password) VALUES ('$(username)','$(email)','$(password)')"
//    con.query(I_P_Q, (err,results) =>{
// if(err){
// return res.send(err)
// }
// else{
//  return res.send('added');
// }
//});
//});

app.listen(4000, function(req, res) {
  console.log("server is running on port no 4000");
});
