import { Container } from "react-bootstrap";
import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1>Ecommers App</h1>
          <Routes>
            <Route path="/" Component={HomeScreen} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
