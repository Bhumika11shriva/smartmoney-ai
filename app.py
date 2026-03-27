from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/plan', methods=['POST'])
def plan():
    data = request.json

    income = int(data['income'])
    expenses = int(data['expenses'])

    savings = income - expenses
    sip = round(savings * 0.4, 2)
    emergency = expenses * 6

    return jsonify({
        "savings": savings,
        "sip": sip,
        "emergency": emergency
    })

if __name__ == '__main__':
    app.run(debug=True)