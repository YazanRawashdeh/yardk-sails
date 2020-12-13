module.exports = {
    attributes: {
      slug:{
        type: 'string',
        unique: true,
        description: 'slug for public consumption like urls instead of id',
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
        isIn: ['upcoming', 'due', 'running'],
        defaultsTo: 'upcoming',
        description: 'The approval status of the user\'s meeting.',
      },

      startTime: {
        type: 'string',
        description: 'The time of the user\'s meeting.',
      },

      endTime: {
        type: 'string',
        description: 'The time of the user\'s meeting.',
      },

      duration: {
        type: 'string',
        description: 'The duration of the user\'s meeting.',
      },

      timezone: {
        type: 'string',
        description: 'The timezone of the user\'s meeting.',
      },

      isPublic: {
        type: 'boolean',
        description: 'Whether the meeting is viewable by everyone or not.',
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
  