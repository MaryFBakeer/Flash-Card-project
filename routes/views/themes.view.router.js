const router = require('express').Router();

const ThemesPage = require('../../components/ThemesPage');
const { QuizeTheme } = require('../../db/models');

router.get('/', async (req, res) => {
  const themes = await QuizeTheme.findAll();
  res.send(res.renderComponent(ThemesPage, { title: 'Выбор темы', themes }));
});

module.exports = router;
