const React = require('react');

function CardQuestion({ question }) {
  // console.log(question);
  return (
    <div>
      <p>{question.question}</p>
      <form className='answerForm' action={`/api/question`} method='post'>
        <input type='text' name='answers' placeholder='answer' required />
        <button type='submit'>ОК</button>
      </form>
      <div className='dopMessage'></div>
      <a href={`/questions/${question.themeId}/${question.id + 1}`}>dalee</a>
    </div>
  );
}

module.exports = CardQuestion;
