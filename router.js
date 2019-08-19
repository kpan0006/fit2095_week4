var express = require('express');
var router = express.Router();

var db = [];

router.get('/',(req,res)=>{
    res.send('Hello World');
})

//add
router.get('/addNumber/:number',function(req,res){
    let number = parseInt(req.params.number);
    db.push(number);

    res.send('We add a number : '+ number + ' to db <br> So the current db is: '+db);

})

//delete,splice
router.get('/deleteNumber/:number',(req,res)=>{
    let number = parseInt(req.params.number);
    let index = db.indexOf(number);
    // if number does not exist
    if(index == -1){
        res.send('The number does not exist in db');
    }else{
        db.splice(index,1);
        res.send('delete '+number+' successfully <br> Current db is: '+db);
    }
    

})

//sumup
router.get('/sumUp',function(req,res){
    db.forEach(element =>{
        sum+=parseInt(element);
    })
    res.send('Database: '+db+'<br> Sum: '+sum);
})


module.exports = router;
