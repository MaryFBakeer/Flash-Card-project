const React = require('react');

function Navbar({ user }) {
    return (
    <nav>
        <div>
            <a href='/'>Веселый квиз</a>
        </div>
        {user ? (
        <div>
            {user}
        </div>
            ):
        (<div>
            Гость
        </div>
        )}
    </nav>
    );
  }
  
  module.exports = Navbar;
  