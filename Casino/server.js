express = require("express");
var mysql      = require('mysql');

var app = express();

app.listen(3000);
app .use(express.static('./static'));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'timetable'
});

function get_week() {
    var today = new Date();
    var day = new Date().getDay();
    var week = [];
    for(var i = 7 - day; i > - day; i-- ) {
        var date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);

        week.unshift(date.getFullYear() + "." + date.getMonth() + "." + date.getDate());
    }
    return week;
}

function get_student_table (user) {
    var class_number;
    var result;
    var lessons;

    connection.connect();
    var sql = 'SELECT * FROM lessons_time;';
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        result.lessons_time = rows;
    });

    sql = 'SELECT student_class FROM students WHERE student_id =' + user.user_id + ';';
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        class_number = rows[0];
    });

    result.days = [];
    var day = {};
    for (var i in get_week()) {
        day.date = i;
        sql = "SELECT lesson_number, lesson_subject, lesson_teacher FROM lessons WHERE lesson_class=" +
            class_number + " AND lesson_date = " + i + ";";
        connection.query(sql, function (err, rows, fields) {
            if (err) throw err;
            lessons = rows;
        });
        for (var i in lessons) {
            sql = "SELECT teacher_classroom, teacher_id FROM teachers WHERE user_id=" + i.teacher + ";";
            connection.query(sql, function (err, rows, fields) {
                if (err) throw err;
                day.teacher =
            });
        }

    }

    connection.end();
}




app.get('auth', function(req, res) {
    connection.connect();
    var sql = 'SELECT * FROM users WHERE users_login = ' + req.login + 'AND users_password = ' + req.password + ";";
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        console.log(rows);
    });


    connection.end();
    res.status(200).send(a);
});