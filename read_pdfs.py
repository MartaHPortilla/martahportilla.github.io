import os
import fitz

pdf_dir = r"a:\DAM\portfolio\astro-nano\.agents\skills\blog-writer\style-examples-spanish"
files = ["Comentarios al código.pdf", "Hoyo-Marta-BBDD-UF1.pdf", "MARTA_HOYO_ESDLA.pdf"]

for f in files:
    path = os.path.join(pdf_dir, f)
    print(f"\n{'='*20}\n--- {f} ---\n{'='*20}\n")
    try:
        doc = fitz.open(path)
        text = ""
        for i in range(min(3, len(doc))):
            text += doc[i].get_text()
        print(text[:1500])
    except Exception as e:
        print(f"Error reading {f}: {e}")
