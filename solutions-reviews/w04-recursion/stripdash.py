almastring = "alma_fa"

def process_item(char):
    if char == '_':
        return ''
    else:
        return char

def strip_(string):
    if len(string) == 0:
        return string
    return process_item(string[0]) + strip_(string[1:])

print(strip_(almastring))
