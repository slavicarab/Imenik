import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function Telefon({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.telefon}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.ime}</div>
    </Card>
  );
}

export default Telefon;
