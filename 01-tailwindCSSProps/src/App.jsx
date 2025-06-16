import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const andaman = {
    name: "Andaman",
    capital: "Port Blair",
    area: 8249,
    population: 380581,
    languages: ["Hindi", "English", "Bengali"],
    currency: "Indian Rupee",
    imgSrc:
      "https://images.pexels.com/photos/29175703/pexels-photo-29175703/free-photo-of-pristine-beach-in-andaman-and-nicobar-islands.jpeg?auto=compress&cs=tinysrgb&w=600",
  };

  const manali = {
    name: "Manali",
    capital: "Manali",
    area: 27.86,
    population: 8000,
    languages: ["Hindi", "English", "Punjabi"],
    currency: "Indian Rupee",
    imgSrc:
      "https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const somnath={
    name: "Somnath",
    capital: "Prabhas Patan",
    area: 5.5,
    population: 15000,
    languages: ["Gujarati", "Hindi", "English"],
    currency: "Indian Rupee",
    imgSrc:
      "https://www.thehistoryhub.com/wp-content/uploads/2017/02/Somnath-Temple-Images.jpg",
  }

  const akshardham = {
    name: "Akshardham",
    capital: "Gandhinagar",
    area: 23,
    population: 10000,
    languages: ["Gujarati", "Hindi", "English"],
    currency: "Indian Rupee",
    imgSrc:
      "https://th.bing.com/th/id/R.cebae2a779558f5a234ac3d5664517e6?rik=G0D4oP95ZinT9g&riu=http%3a%2f%2fimage3.mouthshut.com%2fimages%2fimagesp%2f925753186s.jpg&ehk=W9PtDgOUtTmwsMgv9ikRyCnWyBFtTp8wg0AphhEs8U4%3d&risl=&pid=ImgRaw&r=0",
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mt-10 underline">
          Tailwind CSS Props Example
        </h1>

        {/* Cards container */}
        <div
          className="min-h-screen bg-gray-500 flex items-center justify-center p-4 gap-4
        flex-wrap max-w-7xl  mt-10
      "
        >
          <Card data={andaman} />
          <Card data={manali} />
         
          <Card data={somnath} />
          <Card data={akshardham} />

        </div>
      </div>
    </>
  );
}

export default App;
