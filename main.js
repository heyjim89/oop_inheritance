// a restaurant 'has a ' menu. A menu 'has a' plate. Restaurant UI is full of 'has a ' relationships.

// 'is a'. A golden retriever 'is a' dog. A dog 'is a' animal.

var Monkey = function (name, color) {
    this.name = name;
    this.color = color;
}
Monkey.prototype.climb = function (tree) {
    console.log(this.name + ' climbs the ' + tree + 'tree.')
}

var george = new Monkey('George', 'red');
george.climb('oak');

// This code is not very DRY: Don't Repeat Yourself
// mechanism that s
var FlyingMonkey = function (name, color, wingspan) {
    this.name = name;
    this.color = color;
    this.wingspan = wingspan;
}
FlyingMonkey.prototype.climb = function (tree) {
    console.log(this.name + ' climbs the ' + tree + 'tree.')
};
FlyingMonkey.prototype.fly = function () {
    console.log(this.name + 'flew ' + this.wingspan * 10 + ' feet.')
};



var FlyingMonkey = function (name, color, wingspan) {
    //    Monkey.call(this, name, color, wingspan);
    console.log(this);
    Monkey.apply(this, arguments)
    console.log(this);
}


var evilGeorge = new FlyingMonkey('EvilGeorge', 'black', 150)

//evilGeorge.climb('pine')
//evilGeorge.fly()
