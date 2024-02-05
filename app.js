const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.get('/api/whoami', (req, res) => {
  console.log('req.headers:', JSON.stringify(req.headers));
  console.log('req.ip:', req.ip);

  const result = {
    ipaddress: req.ip,
    language: req.get('accept-language'),
    software: req.get('user-agent')
  };

  return res.json(result);
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
