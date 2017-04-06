class person{
first_name:string;
last_name:string;
twitter_acount:string;
constructor(){
    this.first_name ="mar";
    this.last_name ="lav";
    this.twitter_acount ="@eyeroach";
    
}
setlastname(last_name:string){
    this.last_name = last_name;
}  

}

var myPerson =new person();
myPerson.setlastname("lavizzari");
myPerson.first_name = "marcelo";
console.log(myPerson);


