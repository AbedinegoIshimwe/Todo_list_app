const { sql } = require("./database");

async function getTodoItems() {
  try {
    const result = await sql.query`SELECT * FROM TodoItems`;
    return result.recordset;
  } catch (err) {
    console.error("Error retrieving todo items:", err);
    return [];
  }
}

module.exports = {
  getTodoItems,
};
