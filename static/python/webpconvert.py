#This script uses the library PIL which you can install using "pip install pillow"
import os
from PIL import Image

# Specify the folder path containing the JPG files
# folder_path = "static/images/index/"
folder_path = "static/images/research/"
# folder_path = "static/images/about_me/"
# folder_path = "static/images/contact_me/"

# Iterate over all files in the folder
for filename in os.listdir(folder_path):
    if filename.endswith(".jpg") or filename.endswith(".jpeg"):
        # Open the JPG image
        jpg_path = os.path.join(folder_path, filename)
        image = Image.open(jpg_path)
        
        # Convert the image to WebP format
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_path = os.path.join(folder_path, webp_filename)
        image.save(webp_path, "WebP")
        
        print(f"Converted {filename} to {webp_filename}")