var Airtable = require("airtable");
var base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base("appNOiwNgPCGylwR6");

export async function getAllBooksSorted() {
  const records = await base("books")
    .select({
      sort: [
        { field: "fldxbx7ODIN6v4Ujq", direction: "asc" },
        { field: "series", direction: "desc" },
        { field: "seriesNumber", direction: "asc" },
        { field: "title", direction: "desc" },
      ],
    })
    .all();

  return records;
}

export async function getAllOfTable(table) {
  const records = await base(table).select().firstPage();

  return records;
}
