
function Scooter(year,color,model) {
        this.year = year;
        this.color = color;
        this.model = model
}

  let flash = new Scooter('year,', 'color', 'model')


  function Driver(name,age,experience) {

          this.name = name;
          this.age = age;
          this.experience = experience
  }

  let speedracer = new Driver('name,', 'age', 'experience')


  // + PickupLocation with `address` and `city` properties

  function PickupLocation(address,city) {
          this.address = address;
          this.city = city
          // this.model = model
  }

    let safehouse = new PickupLocation('address', 'city')



//
// function User(name, email) {
// 	this.name = name;
// 	this.email = email;
// }
//
// let lauren = new User("Lauren", "lauren@example.com");
// lauren.name //=> "Lauren"
//
// Scooter with `year`, `color`, and `model` properties
