import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CuisinesPage from "./components/CuisinesPage/CuisinesPage";
import { AuthContextConstructor } from "./Context/DataContext";
import RestaurantDetailPage from "./components/RestaurantDetail/RestaurantDetailPage";
import Favorites from "./components/FavoritesPage/Favorites";

const App = () => {
  return (
    <>
      <AuthContextConstructor>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cuisines/:category" element={<CuisinesPage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </AuthContextConstructor>
    </>
  );
};

export default App;
