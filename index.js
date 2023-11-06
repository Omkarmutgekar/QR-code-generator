
import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";


inquirer
  .prompt([
    { message: "Enter a URL",
     name:"URL"

    },
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(url);
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('Qr_code.png'));

    fs.writeFile("QR.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });