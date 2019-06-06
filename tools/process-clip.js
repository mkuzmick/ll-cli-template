var airtableTools = require('./airtable-tools');

module.exports = async function(input){

  // get array of files to process
  // get ffprobe data on files
  // rename files
  // get any extra data (tc offsets, etc) from Airtable
  // send data to Airtable
  // send notification to Slack

  // generate records from data ultimately, but for now . . .
  var sampleRecord = {
    "filename": "20190604_001_Test_Shoot_5Da_001.mov",
    "width": "1920",
    "tcOut": "12:13:03:12",
    "tcIn": "12:01:01:01",
    "height": "1080",
    "fileSize": "21413",
    "duration": "1:23",
    "originalFileName": "6D92340.MOV",
    // for now just grab first argument as path
    "initialFolderPath": input._[0]
  };

  // let user set these in config ultimately
  var airtableTable = process.env.AIRTABLE_TABLE_NAME;
  var airtableBase = process.env.AIRTABLE_BASE_ID;

  var atResult = await airtableTools.addClip(sampleRecord, airtableTable, airtableBase);
  return atResult;
}
