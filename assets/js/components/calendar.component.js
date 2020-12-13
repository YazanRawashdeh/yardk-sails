/**
 * <calendar></calendar>
 * -----------------------------------------------------------------------------
 * A fully fledged calendar with all the functionality for meetings.
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('calendar', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [
    'syncing',
    'disabled'
  ],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
      //…
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
    <div id="calendar">
      <div class="progress">
        <div class="bg-dark progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
      </div>
    </div>
    `,

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function () {
    //…
  },
  mounted: async function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'timeGridWeek',
      themeSystem: 'bootstrap',
      headerToolbar: {
        start: 'prev,next today',
        center: 'title',
        end: 'dayGridWeek,timeGridWeek,listWeek,dayGridMonth'
      },
      events: [
        {
          "title": "All Day Event",
          "start": "2020-12-01"
        },
        {
          "title": "Long Event",
          "start": "2020-12-07",
          "end": "2020-12-10"
        },
        {
          "id": "999",
          "title": "Repeating Event",
          "start": "2020-12-09T16:00:00-05:00"
        },
        {
          "id": "999",
          "title": "Repeating Event",
          "start": "2020-12-16T16:00:00-05:00"
        },
        {
          "title": "Conference",
          "start": "2020-12-11",
          "end": "2020-12-13"
        },
        {
          "title": "Meeting",
          "start": "2020-12-12T10:30:00-05:00",
          "end": "2020-12-12T12:30:00-05:00"
        },
        {
          "title": "Lunch",
          "start": "2020-12-12T12:00:00-05:00"
        },
        {
          "title": "Meeting",
          "start": "2020-12-12T14:30:00-05:00"
        },
        {
          "title": "Happy Hour",
          "start": "2020-12-12T17:30:00-05:00"
        },
        {
          "title": "Dinner",
          "start": "2020-12-12T20:00:00"
        },
        {
          "title": "Birthday Party",
          "start": "2020-12-13T07:00:00-05:00"
        },
        {
          "title": "Click for Google",
          "url": "http://google.com/",
          "start": "2020-12-28"
        }
      ],
      eventClick: function(info) {
        console.log(info);
        alert('Event: ' + info.event.title);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('View: ' + info.view.type);
    
        // change the border color just for fun
        info.el.style.borderColor = 'red';
      },
      dateClick: function () {
        alert('a day has been clicked!');
      }
    });
    calendar.render();
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

  }
});
