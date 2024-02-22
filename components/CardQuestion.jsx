const React = require('react');

function CardQuestion({
  question,
}) {
  return (
    <p>{question.question}</p>
    <div>
      <input type="text" name="answers" placeholder="answer" required />
      <button>
        ОК
      </button>
    </div>
  );
}

module.exports = CardQuestion;
