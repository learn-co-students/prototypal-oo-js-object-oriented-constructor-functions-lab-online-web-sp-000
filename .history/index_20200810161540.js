class Scooter{
    constructor(year, color, model) {
        this.year = year
        this.color = color
        this.model = model
        }
    }
class Driver{
    constructor(name, age, experience){
        this.name = name
        this.age = age
        this.experience = experience
        }
    }
const mike = new Driver("Mike", "28 years", "2 years")
const allison = new Driver("Allison", '16 years', "2 years")

class PickupLocation{
    constructor(address, city){
        this.address = address
        this.city = city

        }
    }