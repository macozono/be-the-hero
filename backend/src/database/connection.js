const knex = require('knex');
const config = require('../../knexfile');

const configuration = knex(config.development);

module.exports = configuration;