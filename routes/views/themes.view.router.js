const router = require('express').Router();

const ThemesPage = require('../../components/ThemesPage.jsx');

router.get('/', (req, res) => {
  res.send(res.renderComponent(ThemesPage, { title: 'Выбор темы' }));
});

module.exports = router;