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

// 4.

class Cat extends pets {
	constructor(name, price) {
		super(name)
		this.price = price
	}
	purr() {
		console.log("purrrrr");
	}
	clean() {
		console.log("cleaning");
	}
	getPrice(){
		console.log(price);
	}
}

// 5.

const sprinkles = new Cat("sprinkles", 190);
sprinkles.setOwner("jayla");
console.log(sprinkles);

// 6.

class Person {
	constructor(name){
		this.name = name
		this.age = 0
		this.weight = 0
		this.mood = 0
		this.pets = []
		this.bankAccount = 0
	}
	getName() {
		console.log(this.name);
	}
	getAge() {
		console.log(this.age);
	}
	getWeight() {
		console.log(this.weight);
	}
	greet(other_person) {
		console.log("Hello " + other_person +"!");
	}
	eat() {
		this.weight = this.weight + 3;
		this.mood = this.mood + 5;
	}
	excerise() {
		this.weight = this.weight -1;
	}
	aging() {
		this.age = this.age + 1;
		this.weight = this.weight + 2;
		this.mood = this.mood - 1;
		this.bankAccount =  this.bankAccount + 10;
	}
	buyPet(pet) {
		this.pets.push(pet)
		this.bankAccount = this.bankAccount - sparky.price
	}
}

const Jill = new Person("Jill")

for (i = 1; i <= 32; i++) {
	Jill.aging();
}

for (i = 1; i <= 30; i++) {
	Jill.eat();
}

Jill.buyPet(sparky)

console.log(Jill);


///Factories
	

//1. 

class shoe {
	constructor(brand, serialNumber) {
		this.brand = brand
		this.serialNumber = serialNumber
	}
}

class factory {
	constructor(brand) {
		this.brand = brand
		this.pairs = []
	}
	makeShoes(){
		const newPair = new shoe(this.brand, this.pairs.length);
		this.pairs.push(newPair);
		return newPair;
	}
}

const nike =  new factory("Nike")
nike.makeShoes();
nike.makeShoes();

console.log(nike.pairs);

class store {
	constructor(mallName, storeNumber) {
		this.mallName = mallName
		this.storeNumber = storeNumber
	}
}

// 2. 

class mall {
	constructor(mallName) {
		this.mallName = mallName
		this.stores = []
	}
	generateStore(){
		const newStore = new store(this.mallName, this.stores.length);
		this.stores.push(newStore);
		return newStore
	}
}

const  woodfield = new mall("woodfield")
woodfield.generateStore();
woodfield.generateStore();

console.log(woodfield.stores);











