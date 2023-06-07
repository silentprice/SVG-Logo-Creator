const prompts = require('prompts');
const fs = require('fs');
const inquirer = require('inquirer');



const shapes = ['circle', 'triangle', 'square'];

async function promptUser() {
  const response = await prompts([
    {
      type: 'text',
      name: 'text',
      message: 'Enter up to three characters:'
    },
    {
      type: 'text',
      name: 'textColor',
      message: 'Enter the text color (keyword or hexadecimal):'
    },
    {
      type: 'select',
      name: 'shape',
      message: 'Choose a shape:',
      choices: shapes
    },
    {
      type: 'text',
      name: 'shapeColor',
      message: 'Enter the shape\'s color (keyword or hexadecimal):'
    }
  ]);

  return response;
}

function generateSVG(response) {
    const { text, textColor, shape, shapeColor } = response;
  
    const svgContent = `
      <svg width="300" height="200">
        <rect width="300" height="200" fill="${shapeColor}" />
        <text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;
      fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error creating SVG file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  }
  async function run() {
    const response = await promptUser();
    generateSVG(response);
  }
  
  run();
  