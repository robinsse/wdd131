let firstName = 'Antonia'
let lastName = 'Francesca'

//function declaration
function fullName(first, last) {
    return `${first} ${last}`;
}

//function expression (anonymous)
const fullName = function (first, last) {
    return `${first} ${last}`;
}

//arrow function expression
const fullName = (first, last) => {
    return `${first} ${last}`;
}

//call fullName function declaration and write to existing HTML element's text node with the ID of fullName
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName)
