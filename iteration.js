let name = "Rasmus"
let chars = []

for(let i = 0; i < name.length; i++) 
    chars.push(name[i])
chars.forEach(c => {
    console.log(c)
})

function reverse(input) {
    let str = ""
    for(let i = input.length - 1; i >= 0; i--)
        str += input[i]
    return str
}

console.log(reverse(name))
console.log(chars.reverse())

let bw = chars.map(c => {
    return c + c
})

console.log(bw)

let q = [1, 5, 12, 22]
let sum = q.reduce((n, m) => {
    return n + m
}, 0)

console.log("--------")
console.log("---" + sum + "---")
console.log("--------")

let filtered = q.filter(n => {
    return n !== 5
})

console.log(filtered)