const ParentClass = require("./parentClass");

module.exports = class ChildClass extends ParentClass{
    constructor(){
        super();
        this.dateOfBirth = 1994
    }

    takeInformation(){
        console.log(this.dateOfBirth + ' ' + super.getName())
    }
}
