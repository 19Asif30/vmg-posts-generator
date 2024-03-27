import "./App.css";
import NavBar from "./components/NavBar";
import AppRoutes from "./router/AppRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="container-fluid p-4 body-app">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <AppRoutes />
        </div>
      </main>
    </div>
  );
}

export default App;
