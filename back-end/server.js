import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import posts from './src/data/routes/posts'
const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/v1', posts);

(async() => {
  try {
    await mongoose.connect('mongodb://admin:admin@ds151702.mlab.com:51702/webedia-backend');
    console.log('*** Connected ***');

    app.listen(PORT, () => {
			console.info('==> Listening on port %s.', PORT);
		});

  } catch (err) {
		console.log(err);
	}
})();

module.exports = app;
