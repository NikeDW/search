//1

function sum() {
    if(arguments.length > 0) {
        var s = arguments[0];
        return sum
    } else
}
//7

10 //��-�� ������� ��������� i

//8

0 // �� ��� ������� ����� let ��� ������ �������� ����� ��������� ���� ����������

//10
var mix = {
    sayHi: function() {
        console.log("Hi " + this.name)
    },
    sayBy: function() {
        console.log("By " + this.name)
    }
};

var user = {
    name: "Peter"
};

for (var key in mix){
    user[key] = mix[key];
}
//14

undefined // �� ���������� ��������� � ������� var, �� �������� �� ������������� �����

//x is not defined

//16

function createObject(constructor) {
    var object = {};
    var result = constructor.apply(object);
    if (result != null && typeof result == "object") {
        return result;
    }
    return object
}

//20

var a = new A();

for (var key in a) {
    if (!a.hasOwnProperty(key)) {
        continue;
    }
    console.log(key)
}
// � ������ ������ ������� method, x , y , �� ������ x, y

//21
//� ������ ������ ������� f is not a function
//�� ������ 'Hello'
// ������� � ���������� ����� function expression � function declaration
// � ������ ������ ���������� f ���������, �� ������� � ��� ���������� � undefined ������ ����� ���������������
//�������, �� ������ ��� ����� ��� �����

//22
// � ������ ������ ��������� ����������� ����� �������� �����, �� ������ �� ��������
// ������� � ������ ������ ��������� ���� ������ ����� ������� ��������, � �� ������ ���� (� �����
// ������� � �������� �������)

//18

function memoize(f) {
    return function tmp() {
        if (!tmp.memory) {
            tmp.memory = [];
        }
        for(var i in tmp.memory) {
            if (tmp.memory[i].arg === arguments[0]) {
                return tmp.memory[i].value
            }
        }
        var result = f.apply(this, arguments); // (*)
        tmp.memory.push({
            arg: arguments[0],
            value: result
        });

        return result;
    }
}

//17
if (Object.create === undefined) {

    Object.defineProperty(Object, 'create', {
        get: function(proto) {
            function F() {}
            F.prototype = proto;
            return new F;
        }
    });
}

if (Object.assign === undefined) {

    Object.defineProperty(Object, 'assign', {
        get: function() {
            var target = arguments[0];
            for(var i = 1; i < arguments.length; i++) {
                Object.keys(arguments[i]).forEach(function(item) {
                    target[item] = arguments[i][item]
                })
            }
            return target;
        }
    });
}

if (Array.forEach === undefined) {

        Object.defineProperty(Array, 'forEach', {
            get: function(F) {
                for (var i = 0; i < this.length; i++) {
                    F.apply(this, [this[i], i, this])
                }
            }
        });
    }

