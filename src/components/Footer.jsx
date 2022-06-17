import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <h2>A közösségi médiában itt találsz meg minket:</h2>
        <div className="social-links">
          <FacebookIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
          <YouTubeIcon fontSize="large" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
