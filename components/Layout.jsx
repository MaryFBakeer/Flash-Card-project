const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/style.css" />
        <script defer src="/scripts/script.js" />
      </head>
      <body>
        <Navbar user={user} />
        {/* наши страницы */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
