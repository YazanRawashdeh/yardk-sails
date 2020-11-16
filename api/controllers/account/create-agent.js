const util = require('util');
module.exports = {


  friendlyName: 'Create agent',


  description: '',


  inputs: {
    firstName: {
      type: 'string'
    },

    lastName: {
      type: 'string'
    },

    emailAddress: {
      type: 'string'
    },

    password: {
      type: 'string'
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    console.log("event: ", util.inspect(inputs, { showHidden: false, depth: null }));
    // All done.
    return;

  }


};
