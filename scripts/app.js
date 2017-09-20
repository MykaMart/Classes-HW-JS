// 1.

class pets {
	constructor(name) {
		this.name = name
		this.owner = ""
	}
	setOwner(owner) {
		this.owner = owner;
	}
}

// const fluffy = new pets("fluffy");
// fluffy.setOwner("john");
// console.log(fluffy);

// 2.

class Dog extends pets {
	constructor(name, price) {
		super(name)
		this.price = price
	}
	bark () {
		console.log("bark")
	}
	chaseTail() {
		console.log("oh boy oh boy oh boy")
	}
	getPrice() {
		console.log(price)
	}
}

// const spot = new Dog("spot", 399);
// spot.setOwner("steve");
// console.log(spot);

// 3.

const sparky = new Dog("sparky", 150);
sparky.setOwner("lacey");
console.log(sparky);

