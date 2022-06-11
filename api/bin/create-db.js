const requestify = require('requestify');
const { db, MemeModel } = require('../models');

db.sync()
  .then(async () => {
    console.log('Database created.');
    console.log('Receiving data...');

    await requestify.get('https://api.imgflip.com/get_memes').then(async response => {
      const json = response.getBody();
      console.log('Adding data to the database...');

      if (Array.isArray(json.data?.memes)) {
        await MemeModel.bulkCreate(json.data.memes.map(m => ({ ...m, id: undefined })));
      }
    });

    console.log('Done.');
  })
  .catch(e => console.log('Error creating database:', e));
