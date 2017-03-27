const {name} = require('./package.json')

const CONFIG__ENABLE_UI = 'enableUi'

module.exports = {
  config: {
    [CONFIG__ENABLE_UI]: {
      type: 'boolean',
      default: false,
    },
  },

  activate: () => {
    atom.config
      .observe(`${name}.${CONFIG__ENABLE_UI}`, value => {
        if (value) {
          document.body.classList.add(`${name}-ui`)
        }
        else {
          document.body.classList.remove(`${name}-ui`)
        }
      })
  },
}
