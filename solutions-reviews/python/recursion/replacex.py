# 7. Given a string, compute recursively (no loops) a new string
# where all the lowercase 'x' chars have been changed to 'y' chars.

# alxma -> alyma
# "a" + r("lxma")
#       r("lxma") -> "l" + r("xma")
#                          r("xma") -> "y" + r("ma") !!
#                                            r("ma") -> "m" + r("a")
#                                                             r("a") -> "a" + r("")
#                                                                             r("") -> "" !! base case
#
#  ---------------------------
#  | \       s == ""        /|
#  ---------------------------
#  | ""  |  g(s[0])+r(s[1:]) |
#  ---------------------------

def replace_x(string):
    if string == '':
        return ''
    else:
        current = string[0]
        remaining = string[1:]
        return check_letter(current) + replace_x(remaining)

def check_letter(letter):
    if letter == 'x':
        return 'y'
    else:
        return letter

print(replace_x('alxma'))
