#hello
import random
import texts

def escape_from_hell(bottom, top, tries):
    number_of_guesses = 0
    tries_remaining = tries

### welcome sentences and adding name
    print ( texts.intro['game_intro'] )
    player_name = input()

    ## input field for the player name
    random_number = random.randint(bottom, top)
    print( texts.intro['welcome_msg'] % str(player_name), str(tries), str(bottom), str(top) )


    attemp = -1
### start of the loop
    while attemp != random_number:
        attemp = -1

        if tries_remaining > 1:
            attemp = int(input( texts.loop['number_question'] ))
            tries_remaining -= 1
        elif tries_remaining == 1:
            attemp = int(input( texts.loop['number_question_final'] % str(player_name) ))
            tries_remaining -= 1
        elif tries_remaining == 0:
            print ( texts.loop['player_lost'] )
            return False

    ## bad inputs
        if type(attemp) != int:
            if tries_remaining > 1:
                print ( texts.exceptions['not_whole'] )
            elif tries_remaining == 1:
                print ( texts.exceptions['not_whole_final'] )
            else:
                print ( texts.loop['player_lost'] )
                return False

        elif attemp < bottom_number or attemp > top_number:
            if tries_remaining > 1:
                print ( text.loop['interval_out'] % str(bottom_number), str(top_number) )
            elif tries_remaining == 1:
                print ( text.loop['interval_out_last'] % str(bottom_number), str(top_number) )
            else:
                return False


### number is found
        if attemp == random_number:
            print ( texts.loop['player_won'] % str(random_number) )

            repeat = False
            next_game = 'nothin'

            while next_game == 'nothin':
                next_game = input("Yes or No?\n\n")
                if next_game[0].lower() == "y":
                    return escape_from_hell(bottom_number, top_number, tries_number)
                elif next_game[0].lower() == "n":
                    print ( text.loop['see_ya'] )
                    return False
                else:
                    next_game == 'nothin'

            while repeat == True:
                repeat = escape_from_hell(bottom_number, top_number, tries_number)




### number is too small
        elif attemp < random_number:
            if tries_remaining > 1:
                print( texts.loop['guess_smaller'] )
            elif tries_remaining == 1:
                print( texts.loop['guess_smaller_final'] )
            else:
                pass


### number is too big
        else:
            if tries_remaining > 1:
                print( texts.loop['guess_bigger'] )
            elif tries_remaining == 1:
                print( texts.loop['guess_bigger_final'] )
            else:
                pass





#######################################################
# ----- u can give the default numbers in the game here --------|
#######################################################

bottom_number = 1
top_number = 100
tries_number = 10

escape_from_hell(bottom_number, top_number, tries_number)
