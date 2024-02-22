const React = require('react');

function TopGame({ user }) {
  return (
    <table>
      <tr>
        <td>{user.name}</td>
        <td>{user.score}</td>
      </tr>
    </table>
  );
}

module.exports = TopGame;
