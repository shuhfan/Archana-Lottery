const express = require('express')
const app = express();


const adminRouter = require('./Router/adminRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/admin', adminRouter);

app.listen(3000,()=> console.log('Server Started'))