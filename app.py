from flask import Flask, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
MONGO_URI = "mongodb+srv://blackcoffer_user:Rishi%4012345@blackcoffercluster.gg3jl.mongodb.net/?retryWrites=true&w=majority&appName=BlackcofferCluster"
client = MongoClient(MONGO_URI)

# Access the database and collection
db = client["BlackcofferDashboard"]
collection = db["blackcoffer_data"]

@app.route('/data', methods=['GET'])
def get_data():
    data = list(collection.find({}, {"_id": 0}))  # Remove MongoDB’s default _id field
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
