var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/conn')();
var conn = mysql_odbc.init();

router.get('/', function(req, res) {
    var sql = "select date_format(todo_date,'%Y-%m-%d')todo_date, todo_content, todo_check, todo_id from todo;";
        conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('home', {rows: rows})
    });
});

router.post('/', function(req, res) {
    var todo_content = req.body.content;
    console.log(req.body);
    var sql = "insert into todo(todo_content) value(?);";
    conn.query(sql, todo_content ,function (err) {
        if (err) console.error("err : " + err);
        res.redirect('/home');
    });
});

router.post('/update',function(req, res)
{
    var todo_check = req.body.todo_check;
    var todo_content = req.body.todo_content;
    var todo_id = parseInt(req.body.todo_id);
    var datas = [todo_check, todo_content, todo_id];
    console.log(datas);
    var sql = "update todo set todo_check=?, todo_content=? where todo_id=?;";
    conn.query(sql, datas, function(err, result)
    {
        if (err) console.error("err : " + err);
        res.redirect('/home');
    });
});

router.post('/update',function(req, res)
{
    var todo_check = req.body.todo_check;
    var todo_content = req.body.todo_content;
    var todo_id = parseInt(req.body.todo_id);
    var datas = [todo_check, todo_content, todo_id];
    console.log(datas);
    var sql = "update todo set todo_check=?, todo_content=? where todo_id=?;";
    conn.query(sql, datas, function(err, result)
    {
        if (err) console.error("err : " + err);
        res.redirect('/home');
    });
});

router.use((err, req, res, next) => {
    console.log(err);
    console.log("오류다");
    console.log("커맷");
    res.send(err);
})


module.exports = router;