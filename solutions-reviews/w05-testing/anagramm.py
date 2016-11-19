def anagramm(string1, string2):

    if type(string1) != str:
        raise TypeError("Nem string az elso!")

    if type(string2) != str:
        raise TypeError("Nem string a masodik!")

    try:
        string1= ''.join(string1.split()) # remove all whitespace chars
        string2= ''.join(string2.split()) # remove all whitespace chars

        string1 = string1.lower()
        string2 = string2.lower()
    except AttributeError as valami:
        print('jaj, AttributeError')
        print(valami)
    try:
        string1 = sorted(string1)
        string2 = sorted(string2)
    except Exception as valami:
        print('hajjaj, TypeError')
        print(valami)


    if string1 == string2:
        return True
    else:
        return False
