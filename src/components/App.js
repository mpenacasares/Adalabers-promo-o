import "../styles/App.scss";
import contactList from "../data/contacts.json";
import { useState } from "react";

function App() {
  //  Variables estado
  const [data, setData] = useState(contactList);
  const [name, setName] = useState("");
  const [counselor, setCounselor] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [newAdalaber, setNewAdalaber] = useState({
    name: "",
    counselor: "",
    speciality: "",
  });
  //  funciones manejadoras
  const handleNewAdalaberForm = (ev) => {
    ev.preventDefault();
  };

  const handleName = (ev) => {
    setName(ev.currentTarget.value);
  };
  const handleCounselor = (ev) => {
    setCounselor(ev.currentTarget.value);
  };
  const handleSpeciality = (ev) => {
    setSpeciality(ev.currentTarget.value);
  };
  const handleNewAdalaberBtn = (ev) => {
    ev.preventDefault();
    const newAdalaber = {
      name: name,
      counselor: counselor,
      speciality: speciality,
    };
    setData([...data, newAdalaber]);
    setName("");
    setCounselor("");
    setSpeciality("");
  };

  // render html
  const htmlContact = data.map((contact, index) => (
    <tr key={index}>
      <td className="name">{contact.name}</td>
      <td className="counselor">{contact.counselor}</td>
      <td className="speciality">{contact.speciality}</td>
    </tr>
  ));

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
        <section>
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
        </section>
        <section>
          <h2>Añadir nueva Adalaber</h2>

          <form onSubmit={handleNewAdalaberForm}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
            />

            <label htmlFor="name">Tutora:</label>
            <input
              type="text"
              name="counselor"
              id="counselor"
              value={counselor}
              onChange={handleCounselor}
            />

            <label htmlFor="name">Especialidad:</label>
            <input
              type="text"
              name="speciality"
              id="speciality"
              value={speciality}
              onChange={handleSpeciality}
            />

            <input
              type="submit"
              value="Añadir nueva Adalaber"
              onClick={handleNewAdalaberBtn}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
