# Data Visualization Dashboard

## 📌 Project Overview
This project is a **Data Visualization Dashboard** built for a test assignment. It visualizes data from a JSON dataset using interactive charts, graphs, and multiple filters. The dashboard allows users to explore insights on various parameters such as **intensity, likelihood, relevance, country, topics, region, city**, and more.

## 🔗 Deployment Links
- **Backend API (Flask - Render)**: [Blackcoffer API](https://blackcoffer-api-gi84.onrender.com)
- **Frontend (React - CodeSandbox)**: [Dashboard](https://d5rv9f.csb.app/)
- **Google Drive Folder (Code & Documentation)**: [Drive Link](https://drive.google.com/drive/folders/1hwUVDJzZ6wInL2YbxsrjEBPh-drFZBCo?usp=sharing)

## 🛠️ Technologies Used
- **Backend**: Flask (Python) + MongoDB
- **Frontend**: React.js + Chart.js + React-Select
- **Deployment**: Render (Backend), CodeSandbox (Frontend)
- **Database**: MongoDB (for storing JSON data)

## 🚀 Features
- **Dynamic Filters**: Users can filter data by country, region, sector, end year, topics, PEST, SWOT, and more.
- **Interactive Charts**:
  - **Bar Chart** (Intensity visualization)
  - **Scatter Plot** (Likelihood)
  - **Word Cloud** (Relevance insights)
- **Fully Responsive**: The UI is designed to work across all screen sizes.
- **Live Data Fetching**: The dashboard reads data from a **MongoDB database via Flask API**.

## 📂 Project Structure
```
📁 blackcoffer-dashboard/
 ├── 📂 backend/ (Flask API)
 │   ├── app.py
 │   ├── requirements.txt
 │   ├── database.py
 │   ├── models.py
 │   └── README.md
 │
 ├── 📂 frontend/ (React Dashboard)
 │   ├── src/
 │   │   ├── components/
 │   │   │   ├── Filters.js
 │   │   │   ├── IntensityChart.js
 │   │   │   ├── LikelihoodChart.js
 │   │   │   ├── RelevanceChart.js
 │   │   │   └── WordCloud.js
 │   │   ├── App.js
 │   │   ├── index.js
 │   │   ├── styles.css
 │   │   └── api.js
 │   ├── package.json
 │   └── README.md
 │
 ├── 📄 README.txt
 └── 📄 requirements.txt
```

## 📌 Installation & Running Locally
### 1️⃣ Backend (Flask API)
```sh
# Clone the repository
git clone https://github.com/rishi02102017/blackcoffer-dashboard.git
cd backend

# Install dependencies
pip install -r requirements.txt

# Run the API
python app.py
```
> The API should be running at `http://127.0.0.1:5000`

### 2️⃣ Frontend (React Dashboard)
```sh
# Go to the frontend folder
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```
> The frontend should be available at `http://localhost:3000`

## 📜 Requirements.txt (For Flask API)
```
Flask
Flask-CORS
pymongo
chart.js
requests
```



