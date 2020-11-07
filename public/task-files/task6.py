#    Mr. Rigby's top secret password checking algorithm
#    *** DO NOT STEAL! ***

password_is_valid = False
password = ""

def string_reverser(string_in):
    return string_in[::-1]

def chunk_and_change(string_in):
    string_length = len(string_in)
    odds = ""
    evens = ""
    for x in range(string_length):
        if x % 2 == 0:
            evens = evens + string_in[x]
        else:
            odds = odds + string_in[x]
    chunked = odds + evens
    return chunked


def password_checker(password):
    reversed = string_reverser(password)
    chunked = chunk_and_change(reversed)

    if chunked == "imenetl":
        return True
    else:
        print("Sorry, that's not correct!")
        return False

while password_is_valid is False:
    password = input("Please enter the password: ")

    password_is_valid = password_checker(password)

print("\nYou have found the flag:\n")
print("dhszCTF{" + password + "}")
