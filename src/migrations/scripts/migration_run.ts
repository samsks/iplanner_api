const { execSync } = require("child_process");

let i = 0;
while (i < 1000000) {
  try {
    const result = execSync(
      "typeorm-ts-node-commonjs migration:run -d dist/src/data-source"
    ).toString();
    if (result.includes("has been  executed successfully")) {
      console.log("Migrations executed successfully");
      break;
    }
  } catch (err) {
    console.log("Error: " + err);
  }
  i++;
}
if (i === 1000000) {
  console.log("Failed to execute migrations after 1.000.000 attempts");
}
