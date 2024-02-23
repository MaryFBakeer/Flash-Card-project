const React = require('react');

function CardQuestion({
  question,
}) {
  return (
    <div>
      <p>{question.question}</p>
      <div>
        <input type="text" name="answers" placeholder="answer" required />
        <button>
          ОК
        </button>
      </div>
    </div>

  );
}

module.exports = CardQuestion;
