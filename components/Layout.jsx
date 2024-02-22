const React = require('react');

function Layout({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/style.css' />
        <script defere src='/scripts/script.js' />
      </head>
      <body>
        {/* наши страницы */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
