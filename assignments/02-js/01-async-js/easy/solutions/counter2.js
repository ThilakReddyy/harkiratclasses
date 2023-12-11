var seconds = 0;
function counter() {
  process.stdout.write(`Counter: ${seconds}`);
  process.stdout.write("\r");

  seconds++;
  setTimeout(counter, 1000);
}

counter();
