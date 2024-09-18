import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MaahMaah from "./Components/MaahMaah";

const root = document.getElementById("root")
ReactDOM.createRoot(root).render(
  <>
    <Header />
    <MaahMaah />
    <Footer />
  </>
)