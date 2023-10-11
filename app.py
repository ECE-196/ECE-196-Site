from datetime import datetime
from flask import Flask, send_file
app = Flask(__name__)


@app.route('/')
def index():
    return send_file('index.html')


@app.route('/technicalworkshops')
def techworkshops():
    return send_file('technicalworkshops.html')

@app.route('/professionalworkshops')
def proworkshops():
    return send_file('professionalworkshops.html')

if __name__ == '__main__':
    app.run()
