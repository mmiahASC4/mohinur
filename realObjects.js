function Car(color, weight) {
this.color = color;
this.weight = weight;
}

var jeep = new Car("black", 1);

function Player(team, position, number) {
    this.team = team;
    this.position = position;
    this.number = number;
} 

var jamesHarden = new Player("Rockets", "Point Gaurd", 13);
console.log("James HArden " + jamesHarden.team +
", he's in the position " + jamesHarden.position +
", and is number " + jamesHarden.number);

function person(ethnicity, race, nationality) {
    this.ethnicity = ethnicity;
    this.nationality = nationality;
    this.race = race;
}

var jordan = new Person("Asian", "African-American", "American");

function Job(type, position, income) {
    this.type = type;
    this.position = position;
    this.income = income;
}
var engineer = new Job("Software-engineer", "engineer", "income");
console.log(engineer.type)
console.loog(position.software-developer)
console.log(income.$100k)
