from PIL import Image
from PIL import ImageDraw,ImageFont,ImageOps
import qrcode
import time


def initialize(header,title,date,clock,input_data,id,vip,amount):
    gate="3B"
    row=0
    row_range=2
    

    start_time = time.time()
    for i in range(1,amount):
        if i % row_range ==0:
            row+=1
            
        qr = qrcode.QRCode(
            version=1,
            box_size=6,
            border=2)
        qr.add_data(input_data)
        qr.make(fit=True)
        qr_image = qr.make_image(fill='black', back_color='white')


        if vip:
            img = Image.open('vip-ticket.png')
        else:
            img = Image.open('ticket.png')
        

        ticket = ImageDraw.Draw(img)

        # font = ImageFont.load("arial.pil")
        font = ImageFont.truetype("arial.ttf",size=30)
        ticket.text((300, 200), header, font=font,fill=(0, 0, 0))

        font = ImageFont.truetype("arial-bold.ttf",size=60)
        ticket.text((300, 270), title, font=font,fill=(149, 122, 255))


        font = ImageFont.truetype("arial-bold.ttf",size=40)
        ticket.text((330, 450), gate, font=font,fill=(0,0,0))

        ticket.text((505, 450), str(row), font=font,fill=(0,0,0))
        ticket.text((675, 450), str(i), font=font,fill=(0,0,0))

        # font = ImageFont.truetype("arial-bold.ttf",size=140)
        # ticket.text((1100, 200), day, font=font,fill=(149, 122, 255))
        img.paste(qr_image, (1110, 160))

        font = ImageFont.truetype("arial-bold.ttf",size=40)
        ticket.text((1100, 370), date, font=font,fill=(149, 122, 255))
        ticket.text((1090, 420), clock, font=font,fill=(149, 122, 255))


        font = ImageFont.truetype("arial.ttf",size=35)
        txt=Image.new("L", (500,50))
        d = ImageDraw.Draw(txt)
        d.text( (0, 0), "ID "+id,  font=font, fill=255)
        w=txt.rotate(90,  expand=1)

        img.paste( ImageOps.colorize(w, (255,255,255), (255,255,255)), (1800,-90),  w)


        # img.show()
        img.save("./examples/ticket-"+str(i)+".png")


    return ("--- %s seconds ---" % (time.time() - start_time))
 
