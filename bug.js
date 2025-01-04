function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}
myFunction();

//The loop will only run until i is equal to 5 because of the break statement. 
//It's not an error, but it is very common to forget about the break statement and lead to infinite loops.