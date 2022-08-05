import { useState } from "react";

const FruitForm = ({ handleAdd }) => {
  const [nouveauFruit, setNouveauFruit] = useState("Fraise");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // 2. Manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    // fruitsCopy.push(fruitAAjouter);
    handleAdd(fruitAAjouter);
    setNouveauFruit("");
  };

  const handleChange = (e) => {
    setNouveauFruit(e.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
        /* ref={inputRef} */ type="text"
        placeholder="Ajouter un fruit"
        onChange={handleChange}
      />
      {/* 2. Soumission du formulaire notamment avec l'attribut onSubmit */}
      <button>Ajouter +</button>
    </form>
  );
};

export default FruitForm;
