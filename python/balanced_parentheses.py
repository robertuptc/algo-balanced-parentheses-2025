def balanced_parentheses(string):
    parentheses_list = ["()", "{}", "[]"]
    open_parentheses = ["(", "[", "{"]

    if string in parentheses_list:
        return True
    elif len(string) % 2 != 0:
        return False
    else:
        stack = []

        for p in string:
            if p in open_parentheses:
                stack.append(p)
            else:
                if not stack:
                    return False
                
                filo = stack[len(stack) - 1]
                if p == ")" and ord(filo) == ord(p) - 1:
                    stack.pop()
                elif p == "]" and ord(filo) == ord(p) - 2:
                    stack.pop()
                elif p == "}" and ord(filo) == ord(p) - 2:
                    stack.pop()
                else:
                    return False
        return len(stack) == 0
