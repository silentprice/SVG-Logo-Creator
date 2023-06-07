const prompts = require('prompts');
const fs = require('fs');

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
