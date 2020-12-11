/**
 * <download-mobile-app></download-mobile-app>
 * -----------------------------------------------------------------------------
 * A bottomsheet with a dismiss button in it.
 *
 * @type {Component}
 *
 * @event click   [emitted when clicked]
 * -----------------------------------------------------------------------------
 */

parasails.registerComponent('downloadMobileApp', {
  //  ╔═╗╦═╗╔═╗╔═╗╔═╗
  //  ╠═╝╠╦╝║ ║╠═╝╚═╗
  //  ╩  ╩╚═╚═╝╩  ╚═╝
  props: [],

  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: function () {
    return {
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
<div class="sticky-top">
     <div v-if="!isPopupHidden()" class="alert alert alert-light alert-dismissible fade show d-lg-none" role="alert">
        <a href="#">
            <img src="http://via.placeholder.com/60" alt="">
            <span class="btn btn-link">
            For a better experience<br>
            <strong>Download our App</strong><br>
            </span>
            <span class="btn btn-primary open-app">Open App</span>
        </a>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close()">
          <span class="x-color" aria-hidden="true">&times;</span>
        </button>
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
    //…
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    close: async function () {
      localStorage.setItem('hidePopup', 'true');
    },
    isPopupHidden: function () {
      var hidePopup = localStorage.getItem('hidePopup');
      return !!hidePopup;
    },
  }
});
