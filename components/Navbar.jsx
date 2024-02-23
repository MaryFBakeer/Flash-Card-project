const React = require('react');

function Navbar({ user }) {
  return (
    <div className="navbar">
      <div>
        <a href="/"><img className="imgLogo" src="https://sun9-8.userapi.com/impg/l5X4imrBd5AVkOsxjg_LnB7DQdS0t0WEms4yoA/GCL--i2b8Qs.jpg?size=470x302&quality=96&sign=171fa8b5aea289b83b922b287be765a8&type=album" /></a>
      </div>
      <div className="buttonNav">
        <div className="topGamersButton">
          <a href="#">Top gamers</a>
        </div>
        <div className="nameButton">
          {user && <div>{user.name}</div>}
        </div>
        {user && (
        <div className="scoreButton">
          Score:
          {user.score}
        </div>
        )}
      </div>
    </div>
  );
}

module.exports = Navbar;
