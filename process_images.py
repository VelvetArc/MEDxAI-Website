import os
import shutil
from PIL import Image

src_dir = r"C:\Users\DND\.gemini\antigravity\brain\a965eb24-9bb1-43d9-b863-db96b9eb74fe"
dest_dir = r"c:\Users\DND\sprite generator\Website\MEDxAI-Website\images"

# 1. Crop Dr. Sheena's photo
img1_path = os.path.join(src_dir, "media__1780377817942.png")
if os.path.exists(img1_path):
    img = Image.open(img1_path)
    # The image is 341 x 1024. Let's crop a square for the face.
    # Face is usually in the top part. Let's crop from y=40 to y=381
    box = (0, 40, 341, 381)
    cropped_img = img.crop(box)
    cropped_img.save(os.path.join(dest_dir, "dr_sheena_cropped.png"))

# 2. Copy Cervilens
img2_path = os.path.join(src_dir, "media__1780377877855.png")
if os.path.exists(img2_path):
    shutil.copy(img2_path, os.path.join(dest_dir, "cervilens.png"))

# 3. Copy Quantum PharmX
img3_path = os.path.join(src_dir, "media__1780377897509.jpg")
if os.path.exists(img3_path):
    shutil.copy(img3_path, os.path.join(dest_dir, "quantum-pharmx.jpg"))

print("Images processed and saved.")
