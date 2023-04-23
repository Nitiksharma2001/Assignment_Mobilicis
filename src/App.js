import { useEffect, useState } from "react";
import Card from "./Components/Card";
import "./App.css";
function App() {
  const [Users, setUsers] = useState([]);
  const [DropDown, setDropDown] = useState("first");
  useEffect(() => {
    fetch(`http://localhost:4000/${DropDown}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, [DropDown]);
  const selection = [
    {
      text: "Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes",
      value: "first",
    },
    {
      text: "Male Users which have phone price greater than 10,000",
      value: "second",
    },
    {
      text: "Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name",
      value: "third",
    },
    {
      text: "Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit",
      value: "fourth",
    },
    {
      text: "Show the data of top 10 cities which have the highest number of users and their average income",
      value: "fifth",
    },
  ];
  return (
    <>
      <div className="App">
        <select onChange={(e) => setDropDown(e.target.value)}>
          {selection.map((selects, index) => {
            return <option key={index} value={selects.value}>{selects.text}</option>
          })}
        </select>
        <Card Users={Users} />;
      </div>
    </>
  );
}

export default App;
