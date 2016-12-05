
# Create a function that takes a list and a value, and returns the index of that value in the list.
# If the value is not it the list, the function should return -1.

# def index(a,b):
#     if len(a) == 0:
#         return -1
#     for i in range(len(a)):
#         if a[i] == b:
#             return i
#         else:
#             return -1
#
#
# def index(a,b):
#     if b in a:
#         return a.index(b)
#     else:
#         return -1

# def index(a,b):
#     if b in a:
#         return a.index(b)
#     elif type(a) == str:
#         raise TypeError
#     else:
#         return -1
# def index(a,b):
#     if type(a) == str:
#         raise TypeError
#     elif b in a:
#         return a.index(b)
#     else:
#         return -1

# def index(a,b):
#     if type(a) == str:
#         raise TypeError
#     if type(b) == str:
#         raise TypeError
#     elif b in a:
#         return a.index(b)
#     else:
#         return -1

# def index(a,b):
#     if type(a) == str or type(b) == str:
#         raise TypeError
#     elif b in a:
#         return a.index(b)
#     else:
#         return -1

# def index(a,b):
#     if type(a) != list or type(b) != int:
#         raise TypeError
#     elif b in a:
#         return a.index(b)
#     else:
#         return -1

def index(given_list,search):
    if type(given_list) != list:
        raise TypeError
    elif search in given_list:
        return given_list.index(search)
    else:
        return -1
