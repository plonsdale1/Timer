// node timer1.js 10 3 5 15 9 ! what it has to do !
 
let arr = process.argv.slice(2);



for (let num of arr) {
  setTimeout(
    () => {
      process.stdout.write('\x07');
    // console.log("nfjfnjnfkj\n")
    }, num * 1000);
}
  