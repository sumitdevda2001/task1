import React from "react";
import { useState, useEffect } from "react";
import MEMBERS_DATA from "./users";
import "./App.css";
import Cardlist from "./components/card-list/card-list.component.jsx";
import Navbar from "./components/navbar/navbar.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  console.log(searchField);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilterMembers] = useState(members);

  const onChangeSearchHandler = (event) => {
    setSearchField(event.target.value);
  };


  useEffect(() => {
    setMembers(MEMBERS_DATA);
  }, []);
  console.log(members);

  useEffect(() => {
    console.log("effects is fired ");
    console.log("members", members);
    const newFilteredMembers = members
      ?.flatMap(({ members }) => members)
      ?.filter(({ first_name, last_name  }) => (first_name + " " + last_name)
      .toLowerCase()
      .includes(searchField.toLowerCase())
  );
    console.log("newFilteredMembers", newFilteredMembers);

    setFilterMembers(newFilteredMembers);
    console.log(newFilteredMembers);
  }, [members, searchField]);
  console.log(members, searchField);

  // const onSearchChange = (event) => {
  //   const searchFieldString = event.target.value.toLocaleLowerCase();
  //   setSearchField(searchFieldString);
  // };
  return (
    <>
      <Navbar onChangeSearchHandler={onChangeSearchHandler } searchField={searchField} />
      <h1 className="title0">Members Of Company</h1>
      <Cardlist filteredMembers={filteredMembers}></Cardlist>
    </>
  );
};

export default App;
