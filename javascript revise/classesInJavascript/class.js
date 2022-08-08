class Person{
    constructor(name,age){
        this.name = name ;
        this.age = age ;
    }
}

class Student extends Person{
    constructor(name,age,cgpa){    
        super(name,age) ;
        this.cgpa = cgpa ;
    }
}
class Teacher extends Person{
    constructor(name,age,id){    
        super(name,age)
        this.id = id ;
    }
}

let teacher1 = new Teacher('monika',25,'class_primary') ;
let student1 = new Student('shivam',17,7.6) ;

console.log(teacher1) ;
console.log(student1) ;