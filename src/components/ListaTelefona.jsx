import Telefon from "./Telefon";

function ListaTelefona({ telefoni, handleDelete }) {
  if (!telefoni || telefoni.length === 0) {
    return <p>Nema telefona u bazi.</p>;
  }
  return (
    <div className="feedback-list">
      {telefoni.map((tel) => (
        <Telefon key={tel.id} item={tel} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ListaTelefona;
