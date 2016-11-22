#Write a program that prints the numbers from 1 to 100.
#But for multiples of three print "Fizz" instead of the
#number and for the multiples of five print "Buzz".
#For numbers which are multiples of both three and
#five print "FizzBuzz".

def fizz_buzz(length=0):
    output = []
    for i in range(1, length+1):
        if i%3 is 0 and i%5 is 0:
            output.append("fizzbuzz")
        elif i%3 is 0:
            output.append("fizz")
        elif i%5 is 0:
            output.append("buzz")
        else:
            output.append(i)
    return output
