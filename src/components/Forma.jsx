import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function Forma({ handleAdd }) {
  const [ime, setIme] = useState("");
  const [telefon, setTelefon] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const unosImena = (e) => {
    if (ime === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (ime !== "" && ime.trim().length <= 3) {
      setMessage("Morate uneti najmanje 3 karaktera");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setIme(e.target.value);
  };

  const unosTelefona = (e) => {
    setTelefon(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ime.trim().length > 3) {
      const newTelefon = {
        ime,
        telefon,
      };

      setIme("");
      setTelefon("");
      handleAdd(newTelefon);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input onChange={unosImena} type="text" placeholder="Unesite ime" />
          <input
            onChange={unosTelefona}
            type="text"
            placeholder="Unesite telefon"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Sačuvaj
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default Forma;
