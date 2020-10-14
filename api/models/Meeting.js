module.exports = {
    attributes: {
      slug:{
        type: 'string',
        unique: true,
        description: 'slug for public consumption liek urls instead of id',
        example: 'd94ed771bcecb16e12dc1fd0292358020368b22b'
      },
      
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
        model: 'user',
      },

      comments: {
        collection: 'comment',
        via: 'meeting'
      }
    },
  };
  