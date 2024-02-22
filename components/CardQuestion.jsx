const React = require('react');

function CardQuestion({
  question,
}) {
  return (
    <p>{question.question}</p>
  );
}

module.exports = CardQuestion;
