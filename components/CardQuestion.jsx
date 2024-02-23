const React = require('react');

function CardQuestion({ question }) {
  // console.log(question);
  return (
    <div>
      <div className="questimg">
        <p>{question.question}</p>
        <img className="imgQuestion" src={question.img} alt="imgQuest" />
      </div>
      <div className="dopMessage" />
      <div className="footer">
        <form className="answerForm" action="/api/question" method="post">
          <input type="text" name="answers" placeholder="answer" required />
          <button type="submit">ОК</button>
        </form>
        <a className="buttonDalee" href={`/questions/${question.themeId}/${question.id + 1}`}>Далее</a>
      </div>
    </div>

  );
}

module.exports = CardQuestion;
