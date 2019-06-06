var Airtable = require('airtable');
var moment = require('moment');

exports.addClip = async function(record, table, base){
  var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(base);
  var airtableResult = await base(table).create(record).then(result => {
    return result;
  })
    .catch(err => {
      console.log("\nthere was an error with the AT push\n");
      console.error(err);
      return;
    });
  return airtableResult;
}
