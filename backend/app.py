# backend/app.py
from flask import Flask, request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://mongodb:27017/mydb"
mongo = PyMongo(app)


@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    mongo.db.users.insert_one(data)
    return 'Data submitted successfully'


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
