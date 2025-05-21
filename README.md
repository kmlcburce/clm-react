

### 📁 `clm-react/README.md`

# CLM React Frontend

This is the frontend for the CLM project built with React and Vite. It interacts with the `clm-laravel` backend via RESTful API.

## ✨ Features

- Vite-powered React app
- REST API integration
- User interface for name input and listing
- Axios for HTTP requests

## 🛠️ Requirements

- Node.js 18+
- npm or Yarn


## 🚀 Installation

1. **Clone the repo**
   ```
   git clone https://github.com/kmlcburce/clm-react.git
   cd clm-react
   ```
2. **Install dependencies**
    ```
    npm install
    ```
3. **Configure API endpoint**
  For local development server
    ```
    API_BASE_URL=http://localhost:8000/api/app
    ```
  For production server
    ```
    API_BASE_URL=http://your-server/api/app
    ```

##  🔌 API Integration
  The frontend communicates with:
  ```
  POST http://localhost:8000/api/app/create_name
  POST http://localhost:8000/api/app/retrieve_name
  ```
##  📦 Deployment
  Currently deployed and running at:
  ```
  http://35.208.11.48/
  ```

