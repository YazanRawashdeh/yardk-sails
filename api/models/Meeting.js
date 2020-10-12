module.exports = {
    attributes: {
      title: {
        type: 'string',
        defaultsTo: 'untitled meeting',
        maxLength: 200,
        example: 'Braces checkup meeting'
      },

      notes: {
        type: 'string',
        defaultsTo: '',
        maxLength: 400,
        example: 'Braces checkup meeting that the DR required after my installation'
      },
  
      status: {
        type: 'string',
        isIn: ['unapproved', 'change-requested', 'approved'],
        defaultsTo: 'unapproved',
        description: 'The approval status of the user\'s meeting.',
      },

      time: {
        type: 'string',
        description: 'The time of the user\'s meeting.',
      },

      creator: {
        collection: 'user',
        via: 'pets'
      }
    },
  };
  