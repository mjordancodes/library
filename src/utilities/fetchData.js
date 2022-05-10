var Airtable = require("airtable");
var base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appNOiwNgPCGylwR6");

export async function getAllOfTable(table) {
  const records = await base(table).select().firstPage();

  return records;
}
