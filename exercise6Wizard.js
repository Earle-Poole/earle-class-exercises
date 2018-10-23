class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
	}
}

class Wizard extends Player {
	constructor(name, type){
		super(name, type)
	}
	play() {
		console.log(`I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Druid Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');