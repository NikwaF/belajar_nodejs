module.exports = (temp, produk) => {
  let output = temp.replace(/{%PRODUCT_NAME%}/g,produk.productName);
  output = output.replace(/{%QUANTITY%}/g,produk.quantity);
  output = output.replace(/{%PRICE%}/g,produk.price);
  output = output.replace(/{%IMAGE%}/g,produk.image);
  output = output.replace(/{%ID%}/g,produk.id);
  output = output.replace(/{%FROM%}/g,produk.from);
  output = output.replace(/{%NUTRIENTS%}/g,produk.nutrients);

  if(!produk.organic){
   output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
  }
  return output;
};


