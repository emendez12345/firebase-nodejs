const {Router}=require('express');
const router=Router();

const admin=require('firebase-admin');

var serviceAccount = require("../../tasks-examples-firebase-adminsdk-ilg04-69b249a8ab.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://tasks-examples-default-rtdb.firebaseio.com/'
});

const db=admin.database();

router.get('/',(req,res)=>{
    res.render('index');
});

router.post('/new-contact',(req,res)=>{
    const newContact={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        phone:req.body.phone,
        email:req.body.email
    }
    db.ref('contacts').push(newContact);
    res.send('received');
});


module.exports=router;