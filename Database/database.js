const sql = require("mssql");

const config = {
  user: "ricangabo",
  password: "mafuco123!",
  server: "ricaserver.database.windows.net",
  database: "ricaDB", // If using ricaserver/ricaDB, make sure to provide only the database name
  options: {
    encrypt: true, // For security purposes
    enableArithAbort: true,
  },
};

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  }
}

module.exports = {
  connectToDatabase,
  sql, // Export mssql for query execution
};
