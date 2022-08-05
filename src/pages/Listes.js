import { useState } from "react";

// states (état, données)
const Listes = () => {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // Comportements
  const handleDelete = (id) => {
    console.log(id);
    // 1. Copie du state
    const fruitsCopy = [...fruits];
    // 2. Manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // 3. modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  // affichage(render)
  return (
    <div className="liste">
      <h1>Listes</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button onClick={() => handleDelete(fruit.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listes;
