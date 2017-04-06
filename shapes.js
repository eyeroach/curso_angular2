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
