function result(digits, operators) {
    var res = [];
    var tmp;
    try {
        tmp = "((" + digits[0] + operators[0] + digits[1] + ")" + operators[1] + digits[2] + ")" + operators[2] + digits[3];
        res.push({res:eval(tmp), order:"123", ex: tmp});
    }catch (e) {}
    try {
        tmp = "(" + digits[0] + operators[0] + digits[1] + ")" + operators[1] + "(" + digits[2] + operators[2] + digits[3] + ")";
        res.push({res:eval(tmp), order:"132", ex: tmp});
    }catch (e) {}
    try {
        tmp = "(" + digits[0] + operators[0] + "(" + digits[1] + operators[1] + digits[2] + "))" + operators[2] + digits[3];
        res.push({res:eval(tmp), order:"213", ex: tmp});
    }catch (e) {}
    try {
        tmp = digits[0] + operators[0] + "((" + digits[1] + operators[1] + digits[2] + ")" + operators[2] + digits[3] + ")";
        res.push({res:eval(tmp), order:"231", ex: tmp});
    }catch (e) {}
    try {
        tmp = digits[0] + operators[0]+ "(" + digits[1] + operators[1] + "(" + digits[2] + operators[2] + digits[3] + "))";
        res.push({res:eval(tmp), order:"321", ex: tmp});
    }catch (e) {}
    var res2 = [];
    for(var i in res) {
        if( res[i].res == "24"){
            res2.push(res[i]);
        }
    }
    return res2;
}

function make(arr, el) {
    var i, i_m, item;
    var len = arr.length;
    var res = [];

    for(i = len; i >= 0; i--) {
        res.push(
            ([]).concat(
                arr.slice(0, i),
                [el],
                arr.slice(i, i_m)
            )
        );
    }

    return res;
}

function combinations(arr) {
    var prev, curr, el, i;
    var len = arr.length;

    curr = [[arr[0]]];

    for(i = 1; i < len; i++) {
        el = arr[i];
        prev = curr;
        curr = [];

        prev.forEach(function(item) {
            curr = curr.concat(
                make(item, el)
            );
        });
    }

    return curr;
}

console.log(result([1,2,3,4], ["+", "-", "*"]));

var c4 = combinations([1,3,4,9]);
var c3 = combinations(["+", "-", "*", "/", ""]);
for(var i in c4) {
    for(var j in c3){
        var res = result(c4[i], c3[j]);
        if (res.length > 0) {
            console.log(res);
        }
    }
}

