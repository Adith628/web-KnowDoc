var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('whoareyou', { title: 'Who are you?' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'KnowDoc Login' });
});

router.get('/Home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});

router.get('/mct', function(req, res, next) {
  res.render('kims')
});

router.get('/SPF', function(req, res, next) {
  res.render('SPF',{title:'SPF'})
});


router.get('/cosmo', function(req, res, next) {
  res.render('cosmopolitan',{title:'Cosmopolitan Hospitals Pvt Ltd.'})
});

// kims hospital

router.get('/kimscardio', function(req, res, next) {
  res.render('kimscardio',{title:'KIMS_CARDIO'})
});

router.get('/kimsneuro', function(req, res, next) {
  res.render('kimsneuro',{title:'KIMS_NEURO'})
});

router.get('/kimsnephro', function(req, res, next) {
  res.render('kimsnephro',{title:'KIMS_NEPHRO'})
});

// spf hospital

router.get('/kimscardio', function(req, res, next) {
  res.render('kimscardio',{title:'KIMS_CARDIO'})
});

router.get('/kimsneuro', function(req, res, next) {
  res.render('kimsneuro',{title:'KIMS_NEURO'})
});

router.get('/kimsnephro', function(req, res, next) {
  res.render('kimsnephro',{title:'KIMS_NEPHRO'})
});






router.get('/signup', function(req, res) {
  res.render('index', { title: 'Register' });
});

router.post('/home',function(req,res,next){
  console.log(req.body)

  MongoClient.connect('mongodb://http://localhost:3000/signup',function(err,client){
    if (err)
      console.log('error')
    else
      client.db('Hack22').collection('user').insertOne(req.body)
      console.log('database connected')
  })
  res.render('home')

})

module.exports = router;
