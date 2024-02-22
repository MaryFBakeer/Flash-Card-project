const React = require('react');
const Layout = require('./Layout');

function MainPage({ title }) {
  return (
    <Layout title={title}>
      <>
        <h1>MainPage</h1>
        <form className='reg-form' action='/' method='POST'>
          <input type='text' name='name' placeholder='name' required />
          <input
            type='password'
            name='password'
            placeholder='password'
            required
          />
          <input type='email' name='email' placeholder='email' required />
          <button>Submit</button>
        </form>
      </>
    </Layout>
  );
}

module.exports = MainPage;
