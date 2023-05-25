var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/conn')();
var conn = mysql_odbc.init();

router.get('/', function(req, res) {
    res.redirect('/board/1');
});

router.get('/write', function(req, res, next){
    res.render('write');
});

router.post('/write', function(req, res) {
    var post_title = req.body.title;
    var post_content = req.body.content;
    var post_user = "user1";
    var datas = [post_title, post_content, post_user];
    var sql = "insert into post(post_title, post_content, post_user) value(?,?,?);";
        conn.query(sql, datas, function (err, rows) {
        if (err) console.error("err : " + err);
        res.redirect('/board');
    });
});


router.get('/read/:id', function(req, res) {
    var id = req.params.id;
    var sql = "select post_title, post_content, date_format(post_date,'%Y-%m-%d')post_date, post_user from post" + 
    " where post_id=?";
        conn.query(sql, [id], function (err, row) {
        if (err) console.error("err : " + err);
        console.log(row[0]);
        res.render('read', {row: row[0]});
    });
});

router.get('/:page', function(req, res) {
    var page = req.params.page;
    var sql = "select post_id, post_title, date_format(post_date,'%Y-%m-%d')post_date, post_user, post_content from post;";
        conn.query(sql, function (err, rows) {
        if (err) console.error("err : " + err);
        res.render('board', {rows: rows, page:page, length:rows.length-1, page_num: 10});
    });
});

router.get('/update/:id', function(req, res) {
    var id = req.params.id;
    var title = req.body.title;
    var content = req.body.content;
    var datas = [title, content, id];
    console.log(datas);

    var sql = "update post set post_title=?, post_content=?, post_date=now() where id=?";
    conn.query(sql, datas, function(err, result)
    {
        if(err) console.error(err);
        res.redirect('/read/:id');
    });
})

module.exports = router;