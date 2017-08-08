import os
from flask import Flask, render_template, request, json
app = Flask(__name__, static_folder="../static/dist", template_folder="./templates")

@app.route('/')
def main():
    return render_template('devindex.html')

@app.route('/bpdata')
def bpdata():
    with open('bpdata.json') as json_data:
        variable = json.load(json_data)
        return variable

if __name__ == "__main__":
    app.debug = True
    app.run()