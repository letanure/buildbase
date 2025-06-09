module.exports = {
    prompt: ({ inquirer }) => {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Provider name (PascalCase):',
        },
        {
          type: 'confirm',
          name: 'withHook',
          message: 'Create associated useXxx hook?',
          default: true,
        }
      ]);
    }
  };