import { Container } from "react-bootstrap";
import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Ecommers App</h1>
          <HomeScreen />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
