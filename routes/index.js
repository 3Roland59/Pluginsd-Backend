var express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log(req.cookies.token)
  res.cookie("token", "1233444", {httpOnly:true, secure:true})
  res.render('index');
});

router.get('/about', (req, res) => {
  res.render('about')
})




module.exports = router;
