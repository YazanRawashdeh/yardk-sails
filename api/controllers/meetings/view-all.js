module.exports = {


  friendlyName: 'View all',


  description: 'Display "All" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/meetings/all'
    }

  },


  fn: async function () {

    // Respond with view.
    // const meetings = await Meetings.find({

    // });

    return {
      meetings : [{
        title: "Meeting no.1",
        status: "no", 
        notes: "sadasdasdsad",
        time: "2010/20/12",
        creator: "",
      },{
        title: "Meeting no.2",
        status: "yes", 
        notes: "qeqweqwewqe",
        time: "2010/20/12",
        creator: "Hamada",
      },{
        title: "Meeting no.3",
        status: "yes", 
        notes: "tytutyutyu",
        time: "2010/20/12",
        creator: "Yazan",
      },{
        title: "Meeting no.4",
        status: "yes", 
        notes: "gghjhgjghj",
        time: "2010/20/12",
        creator: "Hamada",
      },]
    };

  }


};
