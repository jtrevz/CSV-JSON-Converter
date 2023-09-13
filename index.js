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
  const jsonData = [];
  let columnHeaders;

  fs.createReadStream(paths.input) //reading/parsing data from CSV file
    .pipe(csvParser())
    .on("data", (row) => {
      //if no headers, first row will used as headers
      if (!columnHeaders) {
        columnHeaders = Object.keys(row);
      }

      const jsonObject = {}; //JSON object with header as key
      columnHeaders.forEach((header) => {
        jsonObject[header] = row[header];
      });

      jsonData.push(jsonObject); //pushing JSON object to results
    })
    .on("end", () => {
      //Writing JSON DATA into file
      if (paths.output) {
        fs.writeFileSync(paths.output, JSON.stringify(jsonData, null, 2));
        console.log(`CSV data has been written into ${paths.output} file`);
      } else {
        //returning JSON data if no file specified
        console.log(JSON.stringify(jsonData, null, 2));
      }
    });
});
