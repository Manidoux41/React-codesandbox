const Fruit = ({ fruitInfo, onFruitDelete }) => {
  // state

  // Comportements

  // Affichage (render)
  return (
    <li>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>x</button>
    </li>
  );
};

export default Fruit;
