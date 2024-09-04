const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routers/authRoute');
const diagRoutes = require('./routers/diagRoute');

const cors = require('cors')



const app = express();
const port = 3001;

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/diag', diagRoutes);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});