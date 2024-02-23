const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ title, user, themes, question }) {
  // {let question.id = 1}
  return (
    <Layout title={title} user={user}>
      <h1>Выбери тему квиза</h1>
      {themes.map((theme) => (
        <div>
          <a href={`/questions/${theme.id}`}>{theme.themeName}</a>
        </div>
      ))}
    </Layout>
  );
}

module.exports = ThemesPage;
