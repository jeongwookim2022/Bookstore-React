import "./App.css";
import Search from "./routes/Search";
import { Suspense, useEffect, useState } from "react";
import Loading from "./components/Loading";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./routes/MainPage";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {/* LOADING */}
      {loading == true ? <Loading /> : null}
      {/* HEADER */}
      <Header />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
