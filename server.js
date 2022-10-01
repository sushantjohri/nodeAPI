const express = require('express');
const app = express();
const port = 3050;
const employeeRoutes = require('./src/employee/routes');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use('/api/v1/employee/', employeeRoutes);

app.listen(port,()=>{
    console.log(`App Chal Rahi Hai on ${port}`)
});