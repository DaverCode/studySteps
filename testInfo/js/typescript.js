/** Created by  yangtao on 16/10/23 ..**/
//创建一个类
class Person {
	name: string;
	age: number;
	constructor(options) { //构造方法\
		var _this = this;
		_this.name = options.name;
		_this.age = options.age;
	}
	print() {
		var _this = this;
		return _this.name + '&&&' + _this.age;
	}
}

var p = new Person({
	'name': 'yangtao',
	'age': 18
});
console.log(p.print())
