


// const article = document.createElement('article');
const blogStyle = [
  {
    headline: 'Traveling With Your Dog',
    body: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga',
    image: 'images/patrick-hendry-221863-unsplash.jpg',
    alt:  'a woman and her dog enjoy the view'
  },
  {
    headline: 'How To Walk Multiple Dogs',
    body: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga',
    image: 'images/matt-nelson-259365-unsplash.jpg',
    alt:  'How To Walk Multiple Dogs'
  },
  {
    headline: 'Teaching Your Dog To Fetch',
    body: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga',
    image: 'images/wyatt-ryan-367017-unsplash.jpg',
    alt:  'a dog waits patiently for a ball'
  }
];


console.log(blogHeader)


// let blogStyle1 = document.getElementById('blog-1');
// let blogStyle2 = document.getElementById('blog-2');
// let blogStyle3 = document.getElementById('blog-3');
//

// <article class = "blog-style">' + blogStyle[0].headline + blogStyle[0].body + blogStyle[0].image + blogStyle[0].alt;
// blogStyle2.innerhtml = '<article class = "blog-style">' + blogStyle[1].headline + blogStyle[1].body + blogStyle[1].image + blogStyle[1].alt;
// blogStyle3.innerhtml = '<article class = "blog-style">' + blogStyle[2].headline + blogStyle[2].body + blogStyle[2].image + blogStyle[2].alt;
//
//
//
for (let i=0; i < blogStyle.length; i++) {
  const blogHeader = document.querySelector('.blog-header');
  const blog = blogStyle[i];
  blogStyle.innerhtml = '<h2>' + blogStyle[0].headline + '</h2>' + '<p>' blogStyle[i].blogHeader + '</p>';
  let blogHeader = document.createElement('article');
  blogHeader.appendChild(blogHeader);

  //
  // const headline = document.createElement('headline');
  // headline.setAttribute('for', blog.headline);
  // headline.textContent = blog.headline;

  // const inputField = document.createElement('input');
  // inputField.setAttribute('id', field.name);



  // let headline = document.createElement('headline');
  // let body = document.createElement('body');
  // let image = document.createElement('image');
  // let alt = document.createElement('alt')
  //

}
