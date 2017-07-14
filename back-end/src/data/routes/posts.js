import express from 'express';
import Post from '../../models/post';
const router = express.Router();

router.route('/posts/:page')
.get(function(req, res) {
  Post.find().sort('-created_at').skip(5 * (req.params.page - 1)).limit(5).find(function(err, posts) {
    if (err) {
      return res.send(err);
    }
    res.json(posts);
  });
})

router.route('/posts/post/:postId')
.get(function(req, res) {
  Post.findOne({ _id: req.params.postId }, function(err, post) {
    if (err) {
      return res.send(err);
    }
    res.json(post);
  });
})

router.route('/posts/')
.get(function(req, res) {
  Post.find().sort('-created_at').find(function(err, posts) {
    if (err) {
      return res.send(err);
    }
    res.json(posts);
  });
})

.post(function(req, res) {
  var post = new Post(req.body);

  post.save(function(err) {
    if (err) {
      return res.send(err);
    }

    res.send({ message: 'Post Added' });
  });
})

.put(function(req,res){
  Post.findOne({ _id: req.params.id }, function(err, post) {
    if (err) {
      return res.send(err);
    }

    for (prop in req.body) {
      post[prop] = req.body[prop];
    }

    // save the post
    post.save(function(err) {
      if (err) {
        return res.send(err);
      }

      res.json({ message: 'Post updated!' });
    });
  });
});

router.route('/posts/:id').get(function(req, res) {
  Post.findOne({ _id: req.params.id}, function(err, post) {
    if (err) {
      return res.send(err);
    }

    res.json(post);
  });
})

.delete(function(req, res) {
  Post.remove({
    _id: req.params.id
  }, function(err, post) {
    if (err) {
      return res.send(err);
    }

    res.json({ message: 'Successfully deleted' });
  });
});

module.exports = router;
