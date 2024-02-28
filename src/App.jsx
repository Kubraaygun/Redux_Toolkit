import Counter from "./pages/Counter";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrudPage from "./pages/CrudPage";

const App = () => {
  const state = useSelector((store) => store.counterSlice);

  return (
    <div
      style={{ height: "100vh", width: "100vw" }}
      className={state.is_dark_theme ? "text-bg-dark" : "text-bg-light"}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CrudPage />} />
          <Route path="/sayac" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
