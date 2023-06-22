var userInput = prompt('please enter your name')
function hello(name){
    if (name == null || name == ' '){
        answer="you didn't provide any input"
        
    } else{
        answer = `hello ${name}, and welcome`
    }
    return answer;
}



var food = ["pizza","burguare","meat","sousiso","chicken"];
function hospitality (name, gift){
    console.log(hello(userInput))
    for (eachFood of food){
        console.log(`${name} would you like some` + eachFood)
    }
}