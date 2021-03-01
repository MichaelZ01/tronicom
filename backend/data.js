import bcrypt from 'bcryptjs';

// Initial users and products
const data = {
  users: [
    {
      name: 'Michael',
      email: 'admin@email.com',
      password: bcrypt.hashSync('password', 8),
      isAdmin: true,
    },
    {
      name: 'Sam',
      email: 'user@email.com',
      password: bcrypt.hashSync('slightlyBetterPassword', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Worlds',
      category: 'Music',
      image: '/images/p1.jpg',
      price: 17.99,
      stock: 35,
      artist: 'Porter Robinson',
      rating: 5,
      numReviews: 53,
      description: "Debut studio album of Porter, the album explores new sounds\
       while having a heavy japanese influence. One of my all time favourite albums.\
       I'm incredibly excited for his 2nd album coming out this year",
    },
    {
      name: 'Adventure',
      category: 'Music',
      image: '/images/p2.jpg',
      price: 41.87,
      stock: 18,
      artist: 'Madeon',
      rating: 3.5,
      numReviews: 29,
      description: "Debut studio album of Madeon. Madeon's style is very iconic \
      and almost every song is a banger. Great album.",
    },
    {
      name: 'Good Faith',
      category: 'Music',
      image: '/images/p3.jpg',
      price: 9.99,
      stock: 0,
      artist: 'Madeon',
      rating: 4.5,
      numReviews: 85,
      description: "Madeon's second album, I daresay even better than the first\
      his songs have a way of being very catchy while also mesmerizing",
    },
    {
      name: 'Discovery',
      category: 'Music',
      image: '/images/p4.jpg',
      price: 99.99,
      stock: 58,
      artist: 'Daft Punk',
      rating: 4,
      numReviews: 320,
      description: "One of the most influencial EDM albums of all time. Even if\
      you haven't heard the whole album you will have heard some of the singles.\
      Daft punk truly are legends in the genre",
    },
    {
      name: 'Stories',
      category: 'Music',
      image: '/images/p5.jpg',
      price: 13.29,
      stock: 40,
      artist: 'Avicii',
      rating: 4,
      numReviews: 243,
      description: 'RIP. One of my favourite Avicii albums. The songs in this\
      album really resonate with me and at a time where I was unsure who I was\
      or what I wanted to be.',
    },
    {
      name: 'Voicenotes',
      category: 'Music',
      image: '/images/p6.jpg',
      price: 11.88,
      stock: 32,
      artist: 'Charlie Puth',
      rating: 4,
      numReviews: 158,
      description: 'Not exactly a EDM album but a very enjoyable album. Every poppy\
      and every song is a earworm.',
    },
  ]
}

export default data;