let people = {
    Ana: 25,
    Alex: 28, 
    John: 27,
};

function topAge(people){
    if(Object.keys(people).length === 0 ){
        return null;
    }
    
    let maxAge = 0
    let oldestPerson

    for (const person in people){
        if(people[person] > maxAge){
            maxAge = people[person];
            oldestPerson = person
        }
    }
    return oldestPerson
}

console.log(topAge(people))