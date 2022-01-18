import "../styles/App.scss";
import contactList from "../data/contacts.json";

function App() {
  const htmlContact = contactList.map((contact) => (
    <tr key={contact.id}>
      <td className="name">{contact.name}</td>
      <td className="counselor">{contact.counselor}</td>
      <td className="speciality">{contact.speciality}</td>
    </tr>
  ));
  console.log(htmlContact);
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Adalabers</h1>
        <form>
          <input
            className="header__name"
            type="text"
            name="name"
            placeholder="Ej:MariCarmen"
            // onChange={handleChangeSearch}
            // value={search}
          />
        </form>
      </header>
      {/* main */}
      <main className="main">
        <table>
          {/* <!-- Fila de cabecera --> */}
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
            </tr>
          </thead>
          {/* <!-- Fin fila de cabecera --> */}
          <tbody>{htmlContact}</tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
