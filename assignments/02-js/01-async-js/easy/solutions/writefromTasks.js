const fs = require("fs");

fs.writeFile("a.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("The file is been updated");
});

for (let i = 0; i < 100000; i++) {
  console.log(i);
}
