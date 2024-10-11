const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const users = [
    { name: 'Joakim', age: 37, status: false },
    {name: 'Jeanette', age: 26, status: true},
    { name: 'Hans', age: 40, status: false },
    { name: 'Colin', age: 7, status: false },
]

for(let i = 0; i < numbers.length; i++) {
    // console.log('i: ' + i + ', number: ' + numbers[i])
  }
  
// for(let number of numbers) {
//  console.log(number)
// }
// for(let user of users) {
//  console.log(user.name)
// }

// users.forEach(function(user, i) {
//  console.log('index: '+i)
//  console.log(user.name)
// })

const filteredNumbers = numbers.filter(function(number) {
  return number < 6 
})

const underageUsers = users.filter(function(user) {
//   if(user.age < 18) { 
//    return user
// }
// return user.age < 18
 return user.status == true 
})

// console.log(underageUsers)


const newUsers = users.map(function(user, i) {
  return { ...user, isHandsome: false, age: user.age + 1 }
})

console.log(newUsers)