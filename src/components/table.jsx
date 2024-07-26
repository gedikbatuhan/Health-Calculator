import axios from "axios";
import React from "react";

const Table = ({ personList, onDelete }) => {
    const handleDelete = (id) => {
      axios.delete(`http://localhost:5001/calculator/${id}`)
        .then(() => {
          onDelete(id);
        })
        .catch(error => {
          console.error("Error deleting person:", error);
        });
    };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Yaş</th>
            <th>Boy (cm)</th>
            <th>Kilo (kg)</th>
            <th>VKİ</th>
            <th>Cinsiyet</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {personList.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.surname}</td>
              <td>{person.age}</td>
              <td>{person.height}</td>
              <td>{person.width}</td>
              <td>{person.vki}</td>
              <td>{person.gender}</td>
              <td>
                <button onClick={() => handleDelete(person.id)}>
                  &#128473;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
