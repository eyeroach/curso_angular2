var _this = this;
console.log("hola mundo");
// primitivas
var full_name = "marcelo lavizzari";
var age = 45;
var developer = true;
// arrays
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
