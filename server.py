from flask import Flask, render_template
app = Flask(__name__)

@app.route('/launch/')
def launch():
    return render_template('launch.html')

@app.route('/index/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()