const sql = require('mssql');
const config = require('./DBConfig');

class Database {
  constructor() {
    this.pool = null;
  }

  async connect() {
    if (this.pool) {
      return this.pool;
    }
    
    try {
      this.pool = await sql.connect(config);
      console.log('Connected to SQL Server');
      return this.pool;
    } catch (err) {
      console.error('Database connection failed: ', err);
      throw err;
    }
  }
}

module.exports = new Database();
