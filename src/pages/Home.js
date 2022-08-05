import { useState } from "react";

const Home = () => {
  // state (état, données)
  const [count, setCount] = useState(1);

  // comportements
  const handleclick = () => {
    setCount(count + 1);
  };
  //affichage(render)
  return (
    <div className="home">
      <h1>Les States</h1>
      <p>{count}</p>
      <button onClick={handleclick}>click for change value</button>
    </div>
  );
};

export default Home;
