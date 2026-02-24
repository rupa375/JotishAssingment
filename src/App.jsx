import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import PhotoResult from "./pages/PhotoResult";
import ChartPage from "./pages/ChartPage";
import MapPage from "./pages/MapPage";

const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/list"
        element={
          <ProtectedRoute>
            <List />
          </ProtectedRoute>
        }
      />

      <Route
        path="/details/:id"
        element={
          <ProtectedRoute>
            <Details />
          </ProtectedRoute>
        }
      />

      <Route
        path="/photo"
        element={
          <ProtectedRoute>
            <PhotoResult />
          </ProtectedRoute>
        }
      />

      <Route
        path="/chart"
        element={
          <ProtectedRoute>
            <ChartPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/map"
        element={
          <ProtectedRoute>
            <MapPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;