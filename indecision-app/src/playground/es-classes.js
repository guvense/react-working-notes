



class Person {

    constructor(name = 'Anonymous', age =10){
        this.name = name ;
        this.age = age;

    }

    setName(name){
        this.name=name;
    }

    getGreeting(){
        if (this.age > 18) {
            return  `Hi ${this.name}` 
        } else {
            return  `Not valid age ${this.name}` 
        }
     
    }

    getFullInfo() {
        return `name: ${this.name}  age: ${this.age} `
    }



}

const me  = new Person('Guven');
console.log(me.getGreeting());

me.setName("adnan");
console.log(me.getGreeting());

const bigOne  = new Person('Guven',20);

console.log(bigOne.getGreeting());


class Student extends Person {

    constructor(name,age,major ="undefined"){
        super(name,age)
        this.major=major;
    }

    getFullInfo(){
      
        let info = super.getFullInfo();
        return info + `major ${this.major}`
    }
}


const stu= new Student("guven",16,"computer")

console.log(stu.getFullInfo());
