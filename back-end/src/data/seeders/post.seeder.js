import mongoose from 'mongoose';
import Post from '../../models/post'

async function postSeeder() {
  const createPostPromisses = [];
  await Post.remove({});

  const posts = [
    {
      title: 'title',
      subTitle: 'subTitle',
      description: 'description',
      content: 'content',
      imageUrl: 'http://www.fragil.org/wp-content/themes/courage/assets/images/placeholder_featured_image.svg',
    },
    {
      title: 'title2',
      subTitle: 'subTitle2',
      description: 'description2',
      content: 'content2',
      imageUrl: 'http://www.fragil.org/wp-content/themes/courage/assets/images/placeholder_featured_image.svg',
    },
    {
      title: 'title3',
      subTitle: 'subTitle3',
      description: 'description3',
      content: 'content3',
      imageUrl: 'http://www.fragil.org/wp-content/themes/courage/assets/images/placeholder_featured_image.svg',
    }
  ];

  posts.forEach(post => {
    createPostPromisses.push(Post.create(post));
  });

  return Promise.all(createPostPromisses);
}

const closeConnection = () => {
  mongoose.connection.close(() => {
    console.log('*** Done, connection with db closed ***')
  })
}

async function initSeed() {
  await mongoose.connect('mongodb://admin:admin@ds151702.mlab.com:51702/webedia-backend');

  console.log('*** Seeding initial data ***')
  await postSeeder();

  closeConnection();
}

initSeed();
