const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <div className="main">
        <h1>Добро пожаловать, дорогой гость!</h1>
        <h2>Зарегистрируйся и сыграй в наш квиз “Мы так и знали!”</h2>
        <form className="reg-form" action="/" method="POST">
          <input type="text" name="name" placeholder="name" required />
          <input type="email" name="email" placeholder="email" required />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
          <button className="registr">Регистрация</button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
