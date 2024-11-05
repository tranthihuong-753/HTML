/* 
Create a method in the Person class which returns how another person's age compares. 
Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, 
return a sentence in the following format:
{other person name} is {older than / younger than / the same age as} me.
p1 = Person("Samuel", 24)p2 = Person("Joel", 36)p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me." 
p2.compareAge(p1) ➞ "Samuel is younger than me." 
p1.compareAge(p3) ➞ "Lily is the same age as me."
*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

var checkage = function(p1, p2){
    if(p1.age > p2.age){
        return p1.name + " is older than me.";
    }
    if(p1.age < p2.age){
        return p1.name + " is younger than me.";
    }
    return p1.name + " is the same age as me.";
}

checkage(p1, p2);
