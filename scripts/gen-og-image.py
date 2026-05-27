# -*- coding: utf-8 -*-
"""Generate opengraph-image.png (1200x630) for the Ana Paula Amaral site."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1200, 630
WHITE = (245, 243, 240)
BROWN = (62, 39, 35)
GOLD = (212, 165, 116)
OUT = os.path.join(os.path.dirname(__file__), '..', 'app', 'opengraph-image.png')
OUT = os.path.abspath(OUT)

img = Image.new('RGB', (W, H), WHITE)
draw = ImageDraw.Draw(img)

font_kicker = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 26)
font_title = ImageFont.truetype(r'C:\Windows\Fonts\georgiab.ttf', 96)
font_subtitle = ImageFont.truetype(r'C:\Windows\Fonts\georgia.ttf', 32)

PAD = 80
SEP = '  •  '  # bullet U+2022, supported by Georgia

kicker = 'ESTETICISTA' + SEP + 'RIO DE JANEIRO'
title = 'Ana Paula Amaral'
subtitle_line1 = 'Drenagem linfática pós-operatória' + SEP + 'Método Leduc'
subtitle_line2 = 'Atendimento a domicílio'

y = 170
draw.text((PAD, y), kicker, font=font_kicker, fill=GOLD)
y += 60
draw.text((PAD, y), title, font=font_title, fill=BROWN)
y += 130
draw.text((PAD, y), subtitle_line1, font=font_subtitle, fill=BROWN)
y += 50
draw.text((PAD, y), subtitle_line2, font=font_subtitle, fill=BROWN)

# Gold line at bottom with fade on edges
line_y = H - 80
line_w = W - 2 * PAD
for x in range(line_w):
    t = x / line_w
    alpha = (t * 2 if t < 0.5 else (1 - t) * 2)
    color = tuple(int(WHITE[i] * (1 - alpha) + GOLD[i] * alpha) for i in range(3))
    img.putpixel((PAD + x, line_y), color)
    img.putpixel((PAD + x, line_y + 1), color)

img.save(OUT, 'PNG', optimize=True)
print('wrote', OUT)
