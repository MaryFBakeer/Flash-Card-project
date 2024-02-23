const answerForm = document.querySelector('.answerForm');
const dopMessage = document.querySelector('.dopMessage');
// console.log(answerForm, 88888777777777777777777);

if (answerForm) {
  answerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { answers } = e.target;
    const data = {
      answers: answers.value,
    };
    console.log(data, 55555555);

    const res = await fetch('/api/question', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    const resData = await res.json();
    // console.log(resData, 777777777777777777777777);
    if (resData.message === 'success') {
      answerForm.reset();
      dopMessage.innerHTML = 'О да! Ты крут!';
    } else {
      dopMessage.innerHTML = 'Иди учи матчасть';
    }
  });
}
