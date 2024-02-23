const React = require('react');
const Layout = require('./Layout');
const CardQuestion = require('./CardQuestion');

function QuizePage({ title, user, question }) {
  return (
    <Layout title={title} user={user}>
      {question.map((el) => (
        <CardQuestion question={el} />
      ))}
    </Layout>
  );
}

module.exports = QuizePage;
