const express = require('express');
const employeeRoutes = require('./src/employee/routes');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.send('Aao API Chalao!')
  })

  app.use('/api/employee', employeeRoutes);

app.listen(port,()=>{
    console.log(`App Chal Rahi Hai on ${port}`)
});