module.exports = {
    prompt: ({ inquirer }) => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Component name (PascalCase):',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Short description of the component:',
        },
        {
          type: 'confirm',
          name: 'htmlAttributes',
          message: 'Should this component inherit HTML props?',
          default: true
        },
        {
          type: 'confirm',
          name: 'children',
          message: 'Should this component accept children?',
          default: true
        },
        {
          type: 'confirm',
          name: 'withVariants',
          message: 'Should this component include Tailwind style variants using cva?',
          default: false
        }
      ]);
    },
  };