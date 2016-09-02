var express = require("express");
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/omicron';

router.post('/', function(req, res) {
  var animal = req.body;
  console.log(req.body);
  pg.connect(connectionString, function(err, client, done) {
    if(err) {
      res.sendStatus(500);
      return;
    }

    client.query('INSERT INTO animals (name, photoURL, type, description) ' +
                'VALUES ($1, $2, $3, $4)',
                [animal.name, animal.photoURL, animal.type, animal.description],
                function(err, result) {
                  done();
                  if (err) {
                    res.sendStatus(500);
                    console.log(err);
                  } else {
                    res.sendStatus(201);
                  }
                });
  });
});

router.get('/', function(req, res) {
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } 

    client.query("SELECT * FROM animals",
                  function(err, result) {
                    done();
                    if (err) {
                      console.log("error: ", err);
                      res.sendStatus(500);
                      return;
                    }
                    res.send(result.rows);
                  });
  });
});


module.exports = router;
