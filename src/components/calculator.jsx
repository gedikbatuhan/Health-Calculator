// import React, { Component } from "react";
import React from "react";
import axios from "axios";

const Calculator = ({ onAddPerson }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      age: e.target.age.value,
      height: e.target.height.value,
      width: e.target.width.value,
      gender: e.target.gender.value,
    };
    // hesaplama
    const height = parseFloat(e.target.elements.height.value);
    const width = parseFloat(e.target.elements.width.value);
    person.vki = width / ((height / 100) * (height / 100));

    // App componentine kişi ekleme işlemi
    //  Json-server çağırılacak post ilen
    // json-server then'inden gelen response'da aşağıdaki satır olacak
    axios.post("http://localhost:5001/calculator", person)
      .then(response => {
        // JSON-Server'dan gelen yanıtla onAddPerson fonksiyonunu çağırma
        onAddPerson(response.data);
      })
      .catch(error => {
        console.error("Error adding person:", error);
      });

    // Formu sıfırlama veya diğer işlemler
    e.target.reset();
  };

  return (
    <>
    <p>Json kullanarak boy kitle indeksi hesaplama:</p>
      <form onSubmit={onSubmit} className="verigiris">
        <input type="text" placeholder="İsminizi Giriniz" name="name" />
        <input type="text" placeholder="Soyisminizi Giriniz" name="surname" />
        <input type="number" placeholder="Yaşınızı Giriniz" name="age" />
        <input
          type="number"
          placeholder="Boyunuzu Giriniz (cm)"
          name="height"
        />
        <input type="number" placeholder="Kilonuzu Giriniz" name="width" />
        <select name="gender">
          <option selected>Cinsiyet Seçiniz</option>
          <option value="female">Kadın</option>
          <option value="male">Erkek</option>
        </select>
        <button type="submit">Ekle</button>
      </form>
    </>
  );
};

export default Calculator;
