/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Quizes',
      [
        {
          themeId: 1,
          question: 'Как  звали сестру Люка Скайуокера?',
          img: 'https://memepedia.ru/wp-content/uploads/2021/06/mem-padme-i-enakin-k-luchshemu-verno-3.jpg',
          answers: 'Лея',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 1,
          question: 'Как называется оружие джедаев?',
          img: 'https://www.meme-arsenal.com/memes/77d186744a86e369c552403c685466a6.jpg',
          answers: 'Световой меч',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 1,
          question:
            'Как называлась планета на которой Люк Скайуокер проходил обучение у Йоды?',
          img: 'https://masterpiecer-images.s3.yandex.net/57f5986ba94411ee9937ba0d8cad0506:upscaled',
          answers: 'Дагоба',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 1,
          question:
            'Как звали капитана пиратского корабля, сыгранного Харрисоном Фордом в фильме "Звездные войны: Пробуждение Силы"?',
          img: 'https://img2.reactor.cc/pics/post/han-Solo-%D0%A5%D0%B0%D0%BD-%D0%A1%D0%BE%D0%BB%D0%BE-YOLO-435616.jpeg',
          answers: 'Хан Соло',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 1,
          question:
            'Какой истребитель является основным боевым кораблем Альянса повстанцев во вселенной Звездных Войн?',
          img: 'https://i.imgflip.com/nw486.jpg',
          answers: 'Икс-винг',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 1,
          question: 'Как зовут создателя фантастической саги «Звёздные войны»?',
          img: 'https://cs14.pikabu.ru/post_img/2022/09/10/9/1662820805231472089.jpg',
          answers: 'Джордж Лукас',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 1,
          question:
            'Как звали астромеханика-дроида, долгое время служившего на "Миллениум Фалькон"?',
          img: 'https://i.chzbgr.com/full/9041248768/h6C19C29F/star-wars-next-to-a-trash-can-that-looks-like-him-saying-that-its-another-life-ruined-by-marijuana',
          answers: 'R2-D2',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
          answers: 'Йемен',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1280px-Flag_of_Syria.svg.png',
          answers: 'Сирия',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/250px-Flag_of_Iraq.svg.png',
          answers: 'Ирак',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_Bohemia.svg/1280px-Flag_of_Bohemia.svg.png',
          answers: 'Богемия',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/1280px-Flag_of_Monaco.svg.png',
          answers: 'Монако',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/1280px-Flag_of_Indonesia.svg.png',
          answers: 'Индонезия',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://kupit-flag.ru/upload/iblock/ee6/ee63cacafbcbc0f490f6f0f1b543504f.png',
          answers: 'Вена',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg',
          answers: 'Польша',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
        {
          themeId: 2,
          question: 'Угадай чей это флаг?',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1280px-Flag_of_Switzerland_%28Pantone%29.svg.png',
          answers: 'Аптека',
          createdAt: new Date(),

          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quizes', null, {});
  },
};
