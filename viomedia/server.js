express = require("express");
var app = express();

app.listen(3000);
app .use(express.static(__dirname + '/static'));


app.get('/getJSON', function(req, res) {
    var a = {
        tag: 'a',
        content: 'dgdfg',
        attr: {
            href:"",
            id: 'someId'
        },
        events: {
            click: 'alert(this.href);',
            focus: 'this.className="active"',
            blur: 'app.log(this)'
        },
        style: {
            width: '100px',
            height: '100px'
        }
    };
    res.status(200).send(a);
});