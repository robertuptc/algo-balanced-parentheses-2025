function balancedParentheses(input) {
// console.log( "(","(".charCodeAt()) // 40
// console.log( ")",")".charCodeAt()) // 41
// console.log( "[","[".charCodeAt()) // 91
// console.log( "]","]".charCodeAt()) // 93
// console.log( "{","{".charCodeAt()) // 123
// console.log( "}","}".charCodeAt()) // 125

    if (input === "{}" || input === "[]" || input === "()") {
        return true
    } else if (input.length % 2 != 0) {
        return false
    } else {
        arr_input = input.split('')
        let stack = [];

        for(let i = 0; i < arr_input.length; i++) {
            if (arr_input[i] === "[" || arr_input[i] === "{" || arr_input[i] === "(") {
                stack.push(arr_input[i])
            } else {
                let LIFO = stack[stack.length - 1]
                if (LIFO === "(" &&  LIFO.charCodeAt() == (arr_input[i]).charCodeAt()-1) {
                    stack.pop()
                } else if(LIFO === "[" &&  LIFO.charCodeAt() == (arr_input[i]).charCodeAt()-2){
                    stack.pop()
                } else if(LIFO === "{" &&  LIFO.charCodeAt() == (arr_input[i]).charCodeAt()-2) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }

        return stack.length === 0 ? true : false
    }
};   

module.exports = {balancedParentheses};