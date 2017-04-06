var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _this = this;
console.log("hola mundo");
var full_name = "marcelo lavizzari";
var age = 45;
var developer = true;
var skills = ["javascript", "angular", "typescript"];
var numberArray = [123, 345, 456, 789];
var Role;
(function (Role) {
    Role[Role["employee"] = 0] = "employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
;
var role = Role.employee;
console.log("roles", Role);
function setName(name) {
    this.full_name = name;
}
function getHello(pretext) {
    return pretext + " " + this.full_name;
}
function inConsole(nameFunction) {
    console.log(nameFunction);
}
inConsole(getHello('texto adentro dle hello'));
inConsole(full_name);
inConsole('hoal soy un simple string');
var data = ['angularJS', 'angular', 'redux', 'react', 'vue'];
data.forEach(function (framwworslibs) {
    _this.inConsole(framwworslibs);
});
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hey, " + this.greeting;
    };
    return Greeter;
}());
__decorate([
    enumerable(false)
], Greeter.prototype, "greet", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var gree = new Greeter("Soy el mensaje");
console.log(gree.greet());
var personaUno = {
    first_name: 'Jorge',
    last_name: 'Cano',
    twitter_account: '@jorgeucano'
};
var personaDos = {
    first_name: 'Pepe',
    last_name: 'Gomez'
};
console.log(personaUno);
console.log(personaDos);
var MyPerson = (function () {
    function MyPerson(first_name, last_name) {
        console.log("first_name", first_name);
        console.log("last_name", last_name);
        this.first_name = first_name;
        this.last_name = last_name;
    }
    MyPerson.prototype.getSaludo = function () {
        var emojis = '(tiojo)';
        return "Saludos \n            " + this.last_name + ", " + this.first_name + "\n            Le enviamos un saludo desde la consola!\n\n            " + emojis + "\n        ";
    };
    return MyPerson;
}());
var personaUno = new MyPerson();
var personaDos = new MyPerson('Jorge');
var personaTres = new MyPerson('Jorge', 'Cano');
console.log(personaTres.getSaludo());
var person = (function () {
    function person() {
        this.first_name = "mar";
        this.last_name = "lav";
        this.twitter_acount = "@eyeroach";
    }
    person.prototype.setlastname = function (last_name) {
        this.last_name = last_name;
    };
    return person;
}());
var myPerson = new person();
myPerson.setlastname("lavizzari");
myPerson.first_name = "marcelo";
console.log(myPerson);
//# sourceMappingURL=tsc.js.map