import { v4 as uuidv4 } from "uuid";
//import { useState } from "react";
import Header from "./components/Header";
import ListaTelefona from "./components/ListaTelefona";
import Statistika from "./components/Statistika";
import { useState, useEffect } from "react";
//import Telefoni from "./data/Telefoni";
import Forma from "./components/Forma";

function App() {
  //const [telefoni, setTelefoni] = useState(Telefoni);
  const [telefoni, setTelefoni] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("Telefoni");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("Telefoni", JSON.stringify(telefoni));
  }, [telefoni]);

  const dodajTelefon = (newTelefon) => {
    newTelefon.id = uuidv4();
    setTelefoni([newTelefon, ...telefoni]);

    console.log(newTelefon);
  };

  const deleteTelefon = (id) => {
    if (window.confirm("Da li zelite da obriste ovaj broj")) {
      setTelefoni(telefoni.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <Forma handleAdd={dodajTelefon} />
        <Statistika telefoni={telefoni} />
        <ListaTelefona telefoni={telefoni} handleDelete={deleteTelefon} />
      </div>
    </>
  );
}

export default App;
