var express = require('express');
var router = express.Router();

let data = {
  id : 34,
  username: "Mike William",
  bio: "it shall be well",
  role: "Manager",
  verfified: false
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user-admin/', (req, res) => {
  res.render('userAdmin', data)
})

module.exports = router;
