console.log("hello world");
fetch('https://dummyjson.com/ip')
.then(res => res.json())
.then( tex => (console.log(tex.ip)));


const loaddata = () => {
  fetch('https://dummyjson.com/products/search?q=phone')
    .then(res => res.json())
    .then(data => {
      for (let i = 0; i < data.products.length; i++) {
        displaypost(data.products[i].description);
      }
    });
};

const displaypost = (posts) => {
  const p = document.createElement('p');
  p.innerText = posts;
  document.getElementById('Createone').appendChild(p);
};


const fetchfun = () => {
    fetch('https://dummyjson.com/products')
    .then( res => res.json())
    .then(data =>{
       let elements = data.products ;
      elements.forEach(element => {
         final(element.title , element.price)
      });
    })
};

const final = (a,b) => {
  let h = document.createElement ( 'h3');
  h.innerText = a;
  let p = document.createElement ( 'p');
  p.innerText = b;
  let card = document.createElement ( 'div');
  card.appendChild(h);
  card.appendChild(p);

 document.getElementById('Createtwo').appendChild(card);
     }