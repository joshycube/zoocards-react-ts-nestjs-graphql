const path = require('path');
import { Seeder } from 'mongo-seeding';

const config = {
  database: {
    name: 'zoocards',
  },
  dropDatabase: true,
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve(path.join(__dirname, 'data-dev')),
  {
    extensions: ['js', 'json', 'ts'],
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });
