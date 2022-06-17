import image from "../assets/honey-jar-picture.jpg";
//import Shape from "react-clip-path";

const HoneyCard = (props) => {
  const id = props.id % 2;
  console.log(id);

  return (
    <div class="card-container">
      {/* <Shape
        name="Hexagon"
        id="hexagon-shape-id"
        width="300px"
        height="300px"
        text="dfgafgda"
        showLabel={true}
      /> */}
      {id === 0 ? (
        <img src={image} alt="jar-pic" id="jar-pic" height={470} />
      ) : null}
      <div className="honey-card">
        <div className="honey-text">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <h3>
            {props.packaging} / {props.price}
          </h3>
        </div>
      </div>
      {id === 1 ? (
        <img src={image} alt="jar-pic" id="jar-pic" height={470} />
      ) : null}
    </div>
  );
};

export default HoneyCard;
