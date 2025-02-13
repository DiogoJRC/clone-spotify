import spotifyLogo from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
      <a href="">
        <img src={spotifyLogo} alt="" />
      </a>
      <a href="/">
        <h1>Spotify</h1>
      </a>
    </div>
  );
};

export default Header;
