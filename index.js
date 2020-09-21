function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
}
let poop = new Scooter("2012", "blue", "yes");
poop.year //2012

function Driver(name, age, experience) { 
    this.name = name;
    this.age = age;
    this.experience = experience;
}
let bob = new Driver("Bob", "22", "2 years"); 
bob.name  //Bob

function PickupLocation(address, city) {
    this.address = address; 
    this.city = city;
}
let arizona = new PickupLocation("1234", "Scottsdale"); 
arizona.city //Scottsdale