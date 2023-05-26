import base64

def base64_to_plaintext(base64_string):
    try:
        decoded_bytes = base64.b64decode(base64_string)
        plaintext = decoded_bytes.decode('utf-8')
        return plaintext
    except (base64.binascii.Error, UnicodeDecodeError):
        return "Invalid Base64 string or unable to decode."


base64_string = input("Enter a Base64-encoded string: ")
current_string = base64_string

for x in range(0, 6):
    decoded_text = base64_to_plaintext(current_string)
    current_string = decoded_text

print("Current string:", current_string)