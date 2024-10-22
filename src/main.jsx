import { createRoot } from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App"
const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<App />} /> {/* 👈 Renders at /app/ */}
      </Routes>
  </BrowserRouter>
);

