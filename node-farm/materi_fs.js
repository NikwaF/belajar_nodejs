const fs = require('fs');
const file = fs.readFileSync('./txt/input.txt','utf-8');

//blocking , synchronous way
// const txt = `This is what we know about avocado ${file}. \n Created On: ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt',txt);
// console.log('the file has been written'); 

//non-blocking, asynchronous way
fs.readFile('./txt/start.sstxt','utf-8', (err, data1) => {
  if(err) return console.log('ERROR WOII');
  fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile('./txt/append.txt','utf-8',(err, data3) => {
      console.log(data3);
      fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8', err => {
        console.log('your file has been written');
      });
    });
  });
});
console.log('will read file!');