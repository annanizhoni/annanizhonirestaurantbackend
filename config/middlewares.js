module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*', // You can list specific headers you want to allow here
      origin: ['http://localhost:3000', 'http://localhost:1337', 'https://annanizhonirestaurantfrontend-2857f51cd024.herokuapp.com']
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];




