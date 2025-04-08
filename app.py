from flask import Flask, jsonify, render_template
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def get_data():
    # Simulate crowd density around venue (lat: 51.505, lon: -0.09)
    data = []
    for _ in range(20):  # 20 "people"
        lat = 51.505 + random.uniform(-0.01, 0.01)
        lon = -0.09 + random.uniform(-0.01, 0.01)
        intensity = random.uniform(0.4, 1.0)#// Higher baseline for more yellow/red  # Crowd "heat"
        data.append([lat, lon, intensity])
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)