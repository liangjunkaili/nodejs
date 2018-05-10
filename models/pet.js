var db = require('../db');

module.exports = db.defineModel('pets',{
  name: db.STRING(100),
  gender: db.BOOLEAN,
  birth: db.STRING(10)
});

// var Pet = db.define('pet', {
//   id: {
//     type: Sequelize.STRING(50),
//     primaryKey: true
//   },
//   name: Sequelize.STRING(100),
//   gender: Sequelize.BOOLEAN,
//   birth: Sequelize.STRING(10),
//   createdAt: Sequelize.BIGINT,
//   updatedAt: Sequelize.BIGINT,
//   version: Sequelize.BIGINT
// }, {
//     timestamps: false
//   });

// var now = Date.now();

// Pet.create({
//   id: 'g-' + now,
//   name: 'Gaffey',
//   gender: false,
//   birth: '2007-07-07',
//   createdAt: now,
//   updatedAt: now,
//   version: 0
// }).then(function (p) {
//   console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//   console.log('failed: ' + err);
// });

// (async () => {
//   var dog = await Pet.create({
//     id: 'd-' + now,
//     name: 'Odie',
//     gender: false,
//     birth: '2008-08-08',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
//   });
//   console.log('created: ' + JSON.stringify(dog));
// })();

// (async () => {
//   var pets = await Pet.findAll({
//     where: {
//       name: 'Gaffey'
//     }
//   });
//   console.log(`find ${pets.length} pets:`);
//   for (let p of pets) {
//     console.log(JSON.stringify(p));
//     console.log('update pet...');
//     p.gender = true;
//     p.updatedAt = Date.now();
//     p.version++;
//     await p.save();//修改
//     if (p.version === 3) {
//       await p.destroy();//删除
//       console.log(`${p.name} was destroyed.`);
//     }
//   }
// })();
