var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br']

var tag = {
    li: 3,
    div: 3,
    p: 3,
    h1: 4,
    ol: 1,
    br: 1
}
console.log(tag)


var num2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54]
var num1 = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76]

let res = num1.filter(value => value !== num2.length)

console.log(res);
