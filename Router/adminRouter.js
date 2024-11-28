const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    try {
       
        res.send('Admin')
      } catch (err) {
        res.status(500).send(err)
      }
})


module.exports = router