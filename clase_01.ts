
console.log("hola mundo");
// primitivas
var full_name:string = "marcelo lavizzari";
var age:number = 45;
var developer : boolean = true;

// arrays
var skills:Array<string>=["javascript","angular","typescript"];
var numberArray:number[] =[123, 345, 456, 789];

enum Role{employee, Manager, Admin, Developer };
var role:Role = Role.employee;

console.log("roles", Role);

function setName(name:string):void{
this.full_name = name
} 

function getHello(pretext:string ): string{
return pretext + " " + this.full_name;
}  

function inConsole(nameFunction:any) : void{
console.log(nameFunction);
}

inConsole(getHello('texto adentro dle hello'));
inConsole(full_name);
inConsole('hoal soy un simple string');

var data: string[] = ['angularJS','angular','redux','react','vue']

data.forEach(
    (framwworslibs) => {
    this.inConsole(framwworslibs);
})







