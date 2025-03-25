const cds = require('@sap/cds');
const fetch = require('node-fetch');

module.exports = cds.service.impl(async function() {
  this.on('READ', 'CatBreeds', async req => {
    const response = await fetch("https://api.thecatapi.com/v1/breeds");
    const breeds = await response.json();

    return breeds;
  });
});
