from balanced_parentheses import balanced_parentheses

# print(balanced_parentheses("()")) == True
# print(balanced_parentheses("())")) == False
# print(balanced_parentheses("(){}")) == True
# print(balanced_parentheses("({})")) == True
# print(balanced_parentheses("(){}[])")) == False
print(balanced_parentheses("][")) == False
# print(balanced_parentheses("(({}")) == False
# print(balanced_parentheses("}([]){")) == False
print(balanced_parentheses("{[()]({})}()")) == True