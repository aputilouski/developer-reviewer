const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

const Meme = require('./Meme');

const storage = path.normalize(__dirname + '/../../db.sqlite');

const db = new Sequelize('db', '', '', { dialect: 'sqlite', storage });

const MemeModel = Meme(db, DataTypes);

const models = { MemeModel };

Object.values(models).forEach(Model => {
  if (Boolean(Model.associate)) Model.associate(models);
});

db.authenticate()
  .then(() => console.log('Database connected.'))
  .catch(e => console.log('Database connection error', e));

// db.sync({ alter: true })
//   .then(() => console.log('All tables were successfully checked.'))
//   .catch(err => console.log('ON TABLE SYNC', err));

module.exports = {
  db,
  ...models,
};
