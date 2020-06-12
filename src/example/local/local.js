const path = require('path');
const app = require('express')();
const cors = require('cors');

const ParcelBundler = require('parcel-bundler');
const file = 'public/index.html';
const options = {};

const bundler = new ParcelBundler(file, options);

app.use(cors({ origin: 'http://localhost:9000', credentials: true }));

app.get('/dittnav-api/status-oppdateringer', (req, res) => (
  res.sendFile(path.resolve(__dirname, './mock.json'))
));

app.use(bundler.middleware());

app.listen(process.env.PORT);
