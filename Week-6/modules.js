const name = 'Jhon';
const surname = 'Doe';
const age = 22;

export const fullname= name + ''+ surname;

export function sayhi(){
    console.log('Merhaba',name);
}

export default{
    name,
    surname,
    age,
}