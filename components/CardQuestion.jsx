const React = require('react');

function CardQuestion({ question }) {
  // console.log(question);
  return (
    <div>
      <div>
        <p>{question.question}</p>
        <img className="imgQuestion" src={question.img} alt="imgQuest" />
      </div>
      <form className="answerForm" action="/api/question" method="post">
        <input type="text" name="answers" placeholder="answer" required />
        <button type="submit">ОК</button>
      </form>
      <div className="dopMessage" />
      <a href={`/questions/${question.themeId}/${question.id + 1}`}>Далее</a>
    </div>
  );
}

module.exports = CardQuestion;
