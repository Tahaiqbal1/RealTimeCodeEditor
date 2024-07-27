import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditorPage from "./pages/EditorPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          reverseOrder={true}
          toastOptions={{
            success: {
              theme: {
                primary: "#000000",
              },
            },
          }}
        />
      </div>

      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<EditorPage />} path="/editor/:RoomId"></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
