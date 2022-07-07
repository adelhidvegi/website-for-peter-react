import img1 from "../assets/beekeeper.jpg";
import img2 from "../assets/bee_hive.jpg";
import img3 from "../assets/bee_on_flower.jpg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-img-container">
        <img src={img1} alt="img1" id="img1" width="470" />
        <img src={img2} alt="img2" id="img2" width="470" />
        <img src={img3} alt="img3" id="img3" width="470" />
      </div>
      <div className="about-text-container">
        <h1>A Méhészetről</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          nullam vehicula ipsum a. Diam vulputate ut pharetra sit amet aliquam
          id. Lorem donec massa sapien faucibus et molestie ac. Eu volutpat odio
          facilisis mauris sit. <br /> In metus vulputate eu scelerisque felis.
          Gravida quis blandit turpis cursus in hac habitasse platea dictumst.
          Arcu bibendum at varius vel. Molestie nunc non blandit massa enim.
          Tristique senectus et netus et. Sed ullamcorper morbi tincidunt ornare
          massa eget egestas. Tincidunt lobortis feugiat vivamus at augue eget.
          Amet consectetur adipiscing elit pellentesque habitant morbi tristique
          senectus et. Pharetra et ultrices neque ornare aenean euismod. Arcu
          non sodales neque sodales. Duis at tellus at urna condimentum. Cursus
          risus at ultrices mi tempus imperdiet. <br /> Viverra ipsum nunc
          aliquet bibendum enim facilisis. Luctus accumsan tortor posuere ac ut
          consequat. Tellus mauris a diam maecenas sed enim ut sem. Molestie a
          iaculis at erat pellentesque adipiscing commodo elit at. Nibh mauris
          cursus mattis molestie. Facilisis volutpat est velit egestas dui id
          ornare. Tempor orci eu lobortis elementum nibh tellus molestie nunc
          non. Velit egestas dui id ornare arcu odio ut. Cras semper auctor
          neque vitae tempus. Senectus et netus et malesuada fames ac turpis
          egestas maecenas. Tincidunt praesent semper feugiat nibh sed pulvinar
          proin gravida hendrerit.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
