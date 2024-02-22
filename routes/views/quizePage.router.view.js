const router = require('express').Router();
const QuizePage = require('../../components/QuizePage');
const { Quize } = require('../../db/models');

router.get('/:id/:questId', async (req, res) => {
  const { id, questId } = req.params;
  const quest = await Quize.findAll({ where: { themeId: id } });
  res.send(res.renderComponent(QuizePage, {
    title: 'Вопрос', question: quest,
  }));

// console.log(id, questid);
});

module.exports = router;
