const React = require('react');
const Navbar = require('./Navbar');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/normalize.css.css" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/styleMainPage.css" />
        <link rel="stylesheet" href="/styles/styleThemes.css" />
        <link rel="stylesheet" href="/styles/styleCardQuest.css" />
        <script defer src="/scripts/answerScript.js" />
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
