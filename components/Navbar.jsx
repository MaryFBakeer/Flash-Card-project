const React = require('react');

function Navbar({ user }) {
  return (
    <nav>
      <div>
        <a href='/'>Веселый квиз</a>
      </div>
      {user ? <div>{user.name}</div> : <div>Гость</div>}
      <div>
        <a href='#'>Top gamers</a>
      </div>
      {user && <div>Score: {user.score}</div>}
    </nav>
  );
}

module.exports = Navbar;
