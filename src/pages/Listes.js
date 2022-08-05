import { useState } from "react";
import Fruit from "../components/Fruit";
import FruitForm from "../components/FruitForm";

// states (état, données)
const Listes = () => {
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  // const inputRef = useRef();

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

  const handleAdd = (fruitAAjouter) => {
    const fruitsCopy = [...fruits];

    fruitsCopy.push(fruitAAjouter);

    setFruits(fruitsCopy);
  };

  // affichage(render)
  return (
    <div className="liste">
      <h1>Listes</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onFruitDelete={handleDelete}
            key={fruit.id}
          />
        ))}
      </ul>

      {/* Gestion des formulaire */}

      {/* 1. Création du formulaire */}

      <FruitForm handleAdd={handleAdd} />
    </div>
  );
};

export default Listes;
