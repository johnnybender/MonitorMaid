from flask import Flask, render_template, request, json
app = Flask(__name__, static_folder="../static/dist", template_folder="../static/templates")

@app.route('/')
def main():
    return render_template('app.html')

@app.route('/launch/')
def launch():
    return render_template('launch.html')

@app.route('/index/')
def index():
    return render_template('index.html')

@app.route('/token/', methods=['GET', 'POST'])
def token():
    if request.method == 'POST':
        access = {}
        access["parameterskey"] = request.get_json()
        with open('data.json', 'w') as outfile:
            json.dump(access["parameterskey"], outfile)
        return 'PostSuccess'
    else:
        return 'GetSuccess'

if __name__ == "__main__":
    app.debug = True
    app.run()