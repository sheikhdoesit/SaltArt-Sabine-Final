from rembg import remove
from PIL import Image

input_path = 'public/Sabine.png'
output_path = 'public/Sabine_transparent.png'

print("Loading image...")
input = Image.open(input_path)

print("Removing background...")
output = remove(input)

print("Saving image...")
output.save(output_path)
print("Done!")
