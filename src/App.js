import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import SinglePage from "./components/SinglePage/SinglePage.comonent";
import Error from "./Error";
import MEMBERS_DATA from "./users";
import './App.css'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      
      <h1 className="title">{MEMBERS_DATA[0].title}</h1>
      <div className="member-container">
      {MEMBERS_DATA[0].members.map((member) => (
      <div  key={member.id}>
      <div className="box">
      <img src={member.image} alt={`${member.first_name} ${member.last_name}`} />
      <div className="text_container">
      <p>{member.Department}</p>
        <h2>{`${member.first_name} ${member.last_name}`}</h2>
        </div>
        </div>
      </div>
      ))}
      </div>


      <h1 className="title">{MEMBERS_DATA[1].title}</h1>
      <div className="member-container">
      {MEMBERS_DATA[1].members.map((member) => (
      <div key={member.id}>
      <div className="box">
      <img src={member.image} alt={`${member.first_name} ${member.last_name}`} />
      <div className="text_container">
      <p>{member.Department}</p>
        <h2>{`${member.first_name} ${member.last_name}`}</h2>
        </div>
        </div>
      </div>
      ))}
      </div>

      
    </div>
  );
};

export default App;
