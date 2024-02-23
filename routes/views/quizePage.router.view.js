const router = require('express').Router();
const QuizePage = require('../../components/QuizePage');
const { Quize } = require('../../db/models');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const quest = await Quize.findOne({ where: { themeId: id } });
    res.send(
      res.renderComponent(QuizePage, {
        title: 'Вопрос',
        question: quest,
      })
    );
  } catch ({ message }) {
    console.log(message);
    res.status(500).json({ error: message });
  }
});

router.get('/:id/:questId', async (req, res) => {
  try {
    const { id, questId } = req.params;
    const quest = await Quize.findOne({ where: { themeId: id, id: questId } });
    res.send(
      res.renderComponent(QuizePage, {
        title: 'Вопрос',
        question: quest,
      })
    );
  } catch ({ message }) {
    res.redirect('/themes');
  }
});

module.exports = router;
