const router = require('express').Router();
const { Quize } = require('../../db/models');

router.post('/question', async (req, res) => {
  try {
    const { answers } = req.body;
    console.log(answers, 1111177777);
    // console.log(answers, 99999999999999999999);
    const ansFromDb = await Quize.findOne({ where: { answers } });
    if (ansFromDb) {
      // console.log('oh, yeeeeeeeeeeeeeeeeeeee');
      res.app.locals.user.score += 10;
      res.status(200).json({ message: 'success' });
    } else {
      // console.log('oh, noooooooooooo');
      res.app.locals.user.score += 0;
      res.status(200).json({ message: ' not success' });
    }
    // console.log(answers);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
