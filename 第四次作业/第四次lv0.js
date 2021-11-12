const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
        city: 'ChongQing',
        area: 'NanShan'
    },
    title: ['student', { year: 2021, title: 'GoodStudent' }]
}

const { name: Name } = person;

const { age } = person
let { age: year } = person

const { address: { city } } = person

const { address: { area } } = person
var mountain = area

const { title: [title1] } = person;

let obj = { title: ['student', { year: 2021, title: 'GoodStudent' }] };
let { title: [x, { title }] } = obj;
var title2 = title

let title3 = title2
title3 = title2.slice(0, 2) + title2.charAt(3)

console.log(Name)
console.log(year)
console.log(city)
console.log(mountain)
console.log(title1)
console.log(title2)
console.log(title3)