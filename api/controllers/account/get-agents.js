module.exports = {


  friendlyName: 'Get agents',


  description: '',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const userId = this.req.me.id;
    const userWithAgents = await User.findOne({
      id: userId
    }).populate('agents');

    const agents = userWithAgents.agents;

    _.each(agents, agent => {
      sails.helpers.redactUser(agent);
    })

    return agents || [];
  }
};
