import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      <ItemList title="Artistas populares" items={5} />

      <ItemList title="Músicas populares" items={10} />
    </div>
  );
};

export default Main;
