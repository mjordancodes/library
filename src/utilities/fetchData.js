var Airtable = require("airtable");
var base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appNOiwNgPCGylwR6");

export async function getAllOfTable(table) {
  let allRecords = [];
  base(table)
    .select({
      // Selecting the first 250 records in Grid view:
      maxRecords: 250,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          allRecords.push(record.fields);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  if (allRecords !== []) {
    return allRecords;
  }
}
