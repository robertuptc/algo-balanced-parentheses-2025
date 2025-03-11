const { balancedParentheses } = require("./balancedParentheses")

console.log(balancedParentheses("()")) // should return true
console.log(balancedParentheses("())")) // should return false
console.log(balancedParentheses("(){}")) // should return true
console.log(balancedParentheses("({})")) // should return true
console.log(balancedParentheses("(){}[])")) // should return false
console.log(balancedParentheses("][")) // should return false
console.log(balancedParentheses("(({}")) // should return false
console.log(balancedParentheses("}([]){")) // should return false
console.log(balancedParentheses("]]")) // should return false
console.log(balancedParentheses("{[()")) // should return false
console.log(balancedParentheses("{[()]({})}()")) // should return true
