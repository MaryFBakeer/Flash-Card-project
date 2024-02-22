const React = require('react');
const Layout = require('./Layout');

function ThemesPage({
  title, user, themes, question,
}) {
  return (
    <Layout title={title} user={user}>
      <h1>Выбери тему квиза</h1>
      {themes.map((theme) => (<div><a href={`/themes/${theme.id}/1`}>{theme.themeName}</a></div>))}
    </Layout>
  );
}

module.exports = ThemesPage;
