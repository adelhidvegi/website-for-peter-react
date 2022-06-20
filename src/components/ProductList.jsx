import ProductDescription from "./ProductDescription";
import HoneyCard from "./HoneyCard";

const ProductList = () => {
  const honeyTypes = [
    {
      id: 1,
      name: "Méz1",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sollicitudin bibendum. Phasellus eget nisl lobortis, pellentesque nisl at, accumsan tellus. Pellentesque venenatis lobortis lorem. Nunc feugiat molestie ex et aliquet. Vestibulum non augue metus.",
      price: "3000 Ft",
    },

    {
      id: 2,
      name: "Méz2",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sollicitudin bibendum. Phasellus eget nisl lobortis, pellentesque nisl at, accumsan tellus. Pellentesque venenatis lobortis lorem. Nunc feugiat molestie ex et aliquet. Vestibulum non augue metus.",
      price: "3000 Ft",
    },
    {
      id: 3,
      name: "Méz3",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sollicitudin bibendum. Phasellus eget nisl lobortis, pellentesque nisl at, accumsan tellus. Pellentesque venenatis lobortis lorem. Nunc feugiat molestie ex et aliquet. Vestibulum non augue metus.",
      price: "3000 Ft",
    },
    {
      id: 4,
      name: "Méz4",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sollicitudin bibendum. Phasellus eget nisl lobortis, pellentesque nisl at, accumsan tellus. Pellentesque venenatis lobortis lorem. Nunc feugiat molestie ex et aliquet. Vestibulum non augue metus.",
      price: "3000 Ft",
    },
    {
      id: 5,
      name: "Méz5",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sollicitudin bibendum. Phasellus eget nisl lobortis, pellentesque nisl at, accumsan tellus. Pellentesque venenatis lobortis lorem. Nunc feugiat molestie ex et aliquet. Vestibulum non augue metus.",
      price: "3000 Ft",
    },
    {
      id: 6,
      name: "Méz6",
      packaging: "1000 gr",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus sollicitudin bibendum. Phasellus eget nisl lobortis, pellentesque nisl at, accumsan tellus. Pellentesque venenatis lobortis lorem. Nunc feugiat molestie ex et aliquet. Vestibulum non augue metus.",
      price: "3000 Ft",
    },
  ];
  return (
    <>
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
    </>
  );
};

export default ProductList;
