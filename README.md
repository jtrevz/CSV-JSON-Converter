# CSV to JSON Converter

CSV to JSON Converter is a Node.js command-line tool that allows you to convert CSV files into JSON format. Whether you need to process data from spreadsheets, databases, or other sources this tool simplifies conversion process.

## Table of Contents:

- [Features](#features)
- [Installation](#installion)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

### Features

- Converts CSV Files to JSON format
- Dynamically determines column structure based on CSV input file.
- Supports user-defined input and output file paths in user friendly command line interface.

### Installation

1. Clone repository to your local machine:

```
git clone git@github.com:jtrevz/CSV-JSON-Converter.git
```

2. Navigate to project directory and install dependencies:

```bash
npm install
```

### Usage

To convert a CSV file to JSON formt, run the following command:

```bash
node index.js
```

You will then be prompted to add path of CSV file you would like to convert, in this case the path is the local file sample.csv:

```
? Enter path of CSV file you would like to convert: sample.csv
```

You will then be prompted to input the path where you would like the JSON file to generate and name.

```
? Enter path to output JSON file: output.json
```

In this case, the file was generated into the project folder with the name of output.json.

### Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request with description of your changes.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
