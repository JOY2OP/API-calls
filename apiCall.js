async function fetchData(){
  const response = await fetch("https://dummyjson.com/carts");
  const cart = await response.json();
  // console.log(cart.carts[0])
  
  for (let i =0; i<=cart.carts[0].products.length; i++){
    console.log(cart.carts[0].products[i].title);
  }
}

//"Spring and summershoes"
// "TC Reusable Silicone Magic Washing Gloves"
// "Oil Free Moisturizer 100ml"
// "Wholesale cargo lashing Belt"
// "Women Sweaters Wool"
