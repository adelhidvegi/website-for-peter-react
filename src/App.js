import HoneyCard from "./components/HoneyCard";
import Navbar from "./components/Navbar";
import ProductDescription from "./components/ProductDescription";

function App() {
  const honeyTypes = [
    {
      id: 1,
      name: "Méz1",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, dictum eu tincidunt et, elementum a nisi. Curabitur elit ex, varius vel nisl ut, sollicitudin placerat diam.",
      price: "3000 Ft",
    },

    {
      id: 2,
      name: "Méz2",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, dictum eu tincidunt et, elementum a nisi. Curabitur elit ex, varius vel nisl ut, sollicitudin placerat diam.",
      price: "3000 Ft",
    },
    {
      id: 3,
      name: "Méz3",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, dictum eu tincidunt et, elementum a nisi. Curabitur elit ex, varius vel nisl ut, sollicitudin placerat diam.",
      price: "3000 Ft",
    },
    {
      id: 4,
      name: "Méz4",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, dictum eu tincidunt et, elementum a nisi. Curabitur elit ex, varius vel nisl ut, sollicitudin placerat diam.",
      price: "3000 Ft",
    },
    {
      id: 5,
      name: "Méz5",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, dictum eu tincidunt et, elementum a nisi. Curabitur elit ex, varius vel nisl ut, sollicitudin placerat diam.",
      price: "3000 Ft",
    },
    {
      id: 6,
      name: "Méz6",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor odio, dictum eu tincidunt et, elementum a nisi. Curabitur elit ex, varius vel nisl ut, sollicitudin placerat diam.",
      price: "3000 Ft",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <ProductDescription />
      {honeyTypes.map((item) => {
        return (
          <HoneyCard
            id={item.id}
            key={item.index}
            name={item.name}
            packaging={item.packaging}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default App;
