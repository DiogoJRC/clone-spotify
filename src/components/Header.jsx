import { Link } from "react-router-dom";

import spotifyLogo from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={spotifyLogo} alt="" />
      </Link>
      <Link to="/">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;
