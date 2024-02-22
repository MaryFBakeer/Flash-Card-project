const React = require('react');
const Layout = require('./Layout');

function ThemesPage({ title }) {
  return (
    <Layout title={title}>
      <h1>Выбери тему квиза</h1>
      <button>
        <a href='#'>Тема №1</a>
      </button>
      <button>
        <a href='#'>Тема №2</a>
      </button>
    </Layout>
  );
}

module.exports = ThemesPage;
