const React = require('react');

function CardQuestion({ question }) {
  // console.log(question);
  return (
    <div>
      <p>{question.question}</p>
      <div>
        <input type='text' name='answers' placeholder='answer' required />
        <button>ОК</button>
      </div>
      <a href={`/questions/${question.themeId}/${question.id + 1}`}>dalee</a>
    </div>
  );
}

module.exports = CardQuestion;
