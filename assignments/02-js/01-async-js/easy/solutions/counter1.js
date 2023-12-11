var seconds = 0;
setInterval(() => {
  process.stdout.write(`Counter: ${seconds}`);
  process.stdout.write("\r");
  seconds += 1;
}, 1000);
