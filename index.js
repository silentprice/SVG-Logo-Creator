const prompts = require("prompts");
const fs = require("fs");
const inquirer = require("inquirer");

const shapes = ["circle", "triangle", "square"];

async function promptUser() {
  const response = await prompts([
    {
      type: "text",
      name: "text",
      message: "Enter up to three characters:",
    },
    {
      type: "text",
      name: "textColor",
      message: "Enter the text color (keyword or hexadecimal number):",
    },
    {
      type: "select",
      name: "shape",
      message: "Choose a shape:",
      choices: shapes,
    },
    {
      type: "text",
      name: "shapeColor",
      message: "Enter the shape's color (keyword or hexadecimal):",
    },
  ]);

  return response;
}

function generateSVG(response) {
  const { text, textColor, shape, shapeColor } = response;

  if (shape === 0) {
    shapeElement = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    fs.writeFile("logo.html", generateShape(shapeElement), (err) => {
      if (err) {
        console.error("Error creating SVG file:", err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  } else if (shape === 1) {
    shapeElement = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
    fs.writeFile("logo.html", generateShape(shapeElement), (err) => {
      if (err) {
        console.error("Error creating SVG file:", err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  } else if (shape === 2) {
    shapeElement = `<rect width="300" height="200" fill="${shapeColor}" />`;
    fs.writeFile("logo.html", generateShape(shapeElement), (err) => {
      if (err) {
        console.error("Error creating SVG file:", err);
      } else {
        console.log("Generated logo.svg");
      }
    });
  }

  function generateShape(shape) {
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <svg width="300" height="200">
                    ${shape}
                    <text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
                </svg>
            </body>
        </html>
        `;
  }
}
async function run() {
  const response = await promptUser();
  generateSVG(response);
}

run();
