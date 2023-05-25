def split_string_operations(input_string):
    # Split the input string into three equal parts
    length = len(input_string)
    part_length = length // 3
    part1 = input_string[:part_length]
    part2 = input_string[part_length:2 * part_length]
    part3 = input_string[2 * part_length:]

    # Convert part 1 to lowercase
    part1_lower = part1.lower()

    # Reverse part 2
    part2_reversed = part2[::-1]

    # Shift ASCII values in part 3 by 1 position
    part3_shifted = ""
    for char in part3:
        shifted_char = chr(ord(char) + 1)
        part3_shifted += shifted_char

    # Return the modified parts as a tuple
    return part1_lower, part2_reversed, part3_shifted


# Example usage
input_string = "Flag goes here"
part1, part2, part3 = split_string_operations(input_string)
print(part1 + part2 + part3)