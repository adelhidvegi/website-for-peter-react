import image from "../assets/honey-jar-picture.jpg";

const HoneyCard = (props) => {
  const id = props.id % 2;
  console.log(id);

  return (
    <div class="card-container">
      {id === 0 ? <img src={image} alt="jar-pic" height={450} /> : null}
      <div className="honey-card">
        <div class="honey-text">
          <h1>{props.name}</h1>
          <h3>{props.packaging}</h3>
          <p>{props.description}</p>
          <h3>{props.price}</h3>
        </div>
      </div>
      {id === 1 ? (
        <img src={image} alt="jar-pic" id="jar-pic" height={450} />
      ) : null}
    </div>
  );
};

export default HoneyCard;
