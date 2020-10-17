/**
 * Permission.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    // Meeting Actions
    forUser:{
      model: 'user',
      unique: true,
      description: 'The user permissions set',
    },

    editMeeting: {
      type: 'boolean',
      defaultsTo: true,
      description: 'edit Meeting action',
    },

    createMeeting: {
      type: 'boolean',
      defaultsTo: true,
      description: 'create Meeting action',
    },

    deleteMeeting: {
      type: 'boolean',
      defaultsTo: true,
      description: 'delete Meeting action',
    },

    // Commenting Actions
    createComment: {
      type: 'boolean',
      defaultsTo: true,
      description: 'create Comment action',
    },

    editComment: {
      type: 'boolean',
      defaultsTo: true,
      description: 'edit Comment action',
    },

    deleteComment: {
      type: 'boolean',
      defaultsTo: true,
      description: 'delete Comment action',
    },

    // Profile Actions
    changePassword: {
      type: 'boolean',
      defaultsTo: true,
      description: 'change Password action',
    },

    changeName: {
      type: 'boolean',
      defaultsTo: true,
      description: 'change Name action',
    },

    changeEmail: {
      type: 'boolean',
      defaultsTo: true,
      description: 'change Email action',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

