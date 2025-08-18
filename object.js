const user = {
    name: 'tra',
    age: 16,
    major: 'cybersecurity',

    greet() {
        console.log(`Hello!, my name is ${this.name} \ni am ${this.age} years old\ni am a ${this.major}`);
    }
}

Object.keys(user).forEach(key => {
    console.log(key, user[key]);
});



for (let key in user) {
    if (typeof user[key] === "object") {
        console.log(key + ":");
        for (let nestekey in user[key]) {
            console.log(" " + nestekey + ":", user[key][nestekey]);
        }
    }else {
        console.log(key + ":", user[key])
    }
}
// user.greet();
//
// let anotherPerson = {...user};
// anotherPerson.name = 'sam';
// anotherPerson.greet();

/*
console.log(`Hello!, my name is ${user.name} \n i am ${user.age} years old\n`)*/
