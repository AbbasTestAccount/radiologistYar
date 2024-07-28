const express = require('express');
const bodyParser = require('body-parser');
const db = require('./Database');
const sql = require('mssql');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/records', async (req, res) => {
  try {
    const pool = await db.connect();
    const result = await pool.request().query('SELECT * FROM your_table');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send('Error fetching records');
  }
});

app.post('/api/records', async (req, res) => {
  const data = req.body;
  try {
    const pool = await db.connect();
    await pool.request()
      .input('column1', sql.VarChar, data.column1)
      .input('column2', sql.VarChar, data.column2)
      .query('INSERT INTO your_table (column1, column2) VALUES (@column1, @column2)');
    res.status(201).send('Record inserted');
  } catch (err) {
    res.status(500).send('Error inserting record');
  }
});

app.put('/api/records/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const pool = await db.connect();
    await pool.request()
      .input('id', sql.Int, id)
      .input('column1', sql.VarChar, data.column1)
      .input('column2', sql.VarChar, data.column2)
      .query('UPDATE your_table SET column1 = @column1, column2 = @column2 WHERE id = @id');
    res.send('Record updated');
  } catch (err) {
    res.status(500).send('Error updating record');
  }
});

app.delete('/api/records/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const pool = await db.connect();
    await pool.request()
      .input('id', sql.Int, id)
      .query('DELETE FROM your_table WHERE id = @id');
    res.send('Record deleted');
  } catch (err) {
    res.status(500).send('Error deleting record');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const test = async()=>{
  const pool = await db.connect();
}

test()