from flask import Flask, request
from flask_cors import CORS
from main import initialize
app = Flask(__name__)
CORS(app)



#test data
header="Zeytinli presents"
title="SUMMER FUN FESTIVAL"
day="03"
date="02.10.2023"
clock=" 09.00 AM"
input_data = "www.google.com"
id="45698792"
vip="true"
amount=3



@app.route("/", methods = ['GET'])
def products():
    res = initialize(header,title,date,clock,input_data,id,vip,amount)
    return {"res_time":res}

app.debug=False
app.run()    