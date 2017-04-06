class MyPerson{
    first_name:string;
    last_name:string;

    constructor(first_name?:string, last_name?:string){
        console.log("first_name", first_name);
        console.log("last_name", last_name);
        this.first_name = first_name;
        this.last_name = last_name;

    }
getSaludo():string{
let emojis ='(tiojo)';
return `Saludos 
            ${this.last_name}, ${this.first_name}
            Le enviamos un saludo desde la consola!

            ${emojis}
        `;
} 
}
let personaUno = new MyPerson();

let personaDos = new MyPerson('Jorge');

let personaTres = new MyPerson('Jorge', 'Cano');
console.log(personaTres.getSaludo());

