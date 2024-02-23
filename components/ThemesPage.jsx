const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ title, user, themes }) {
  return (
    <Layout title={title} user={user}>
      <div className="themes">
        <h1>Выбери тему квиза</h1>
        {themes.map((theme) => (
          <div className="themeBut">
            <a href={`/questions/${theme.id}`}>{theme.themeName}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = ThemesPage;
