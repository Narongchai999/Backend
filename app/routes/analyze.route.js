module.exports = (app) => {
  //const analyze = require("../controllers/analyze.controller");
  const router = require('express').Router();

  app.get('/analyze', (req, res) => {
    res.send('Analyze Page');
  });

  app.use('/analyze', router);
};
