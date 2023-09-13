const fs = require("fs");
const csvParser = require("csv-parser");
const inquirer = require("inquirer");

//Capturing input and output paths from clients
const pathQuestions = [
  {
    name: "input",
    type: "input",
    message: "Enter path of CSV file you would like to convert:",
    validate: function (path) {
      if (fs.existsSync(path)) {
        return true;
      }
      return "File was not found. Enter valid path to CSV input file.";
    },
  },
  {
    name: "output",
    type: "input",
    message: "Enter path to output JSON file:",
  },
];

inquirer.prompt(pathQuestions).then((paths) => {
  const csvData = [];
  fs.createReadStream(paths.input)
    .pipe(csvParser())
    .on("data", (row) => {
      csvData.push(row);
      console.log(row);
    });
});
