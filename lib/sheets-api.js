import { google } from "googleapis";
import marked from "marked";

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${
    title || ""
  }">${text}</a>`;

export async function getData() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Data!A1:B9', // range of the data you need | format: `SheetName!colStart:colEnd`
    });

    const rows = response.data.values;

    if (rows.length) {
      // how you shape your data
      return rows.map((row) => ({
        title: row[0],
        description: marked(row[1].replace(/\n/g, "<br />"), { renderer }),
      }));
    }
  } catch (err) {
    console.log(err);
  }

  return [];
}