//Create a Object


//var person = {firstName: "Jobaer",lastName: "Ahmed",age:50, eyeColor:"blue"};

//document.write(person.firstName  +" is " + person.age + " years old" );

/*var person = {firstName:"Nur Jahan", lastName: "Tushi", age:48 , eyeColor:"Ash"};
document.write(person.firstName + " is " + person.age + " year old" + "<br>  ");

document.write(person.lastName);*/


function Student(name, age, cgpa, lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display = function() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);

    }
}

var student1 = new Student("Jobaer", 27, 3.92, ["Bangla", "Hindi", "Urdu"]);
var student2 = new Student("Joba", 28, 3.90, ["Bangla", "Hindi", "Urdu"]);
var student3 = new Student("Jobae", 24, 3.90, ["Bangla", "Hindi", "Urdu"]);

student1.display();
student2.display();
student3.display();

