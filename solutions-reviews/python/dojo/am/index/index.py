def index(input_list, lookup_this):
    for i in range(len(input_list)):
        if input_list[i] == lookup_this:
            return i
    return -1
