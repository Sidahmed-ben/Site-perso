const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 7000

app.use(express.static(__dirname + '/public'));
app.use('/pdf', express.static(__dirname + '/public/cv'));

app.get('/',function(req,res){
    res.sendFile(path.join('index'));
    //__dirname : It will resolve to your project folder.
    });

app.get('/public/cv/d.pdf',function(req,res){
    res.download('./public/cv/cv_Benaissa_Sidahmed.pdf');
    //__dirname : It will resolve to your project folder.
    });
    
const server = app.listen(PORT, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });


