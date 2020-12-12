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
      isDownloadMobileBannerVisible: !this.isPopupHidden()
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
<div class="fixed-bottom">
     <div id="download-mobile-app-banner" v-if="isDownloadMobileBannerVisible" class="alert alert alert-light alert-dismissible fade show d-lg-none bg-white" role="alert">
        <a href="#">
            <img src="http://via.placeholder.com/60" class="rounded-3 d-inline" alt="">
            <span class="btn btn-link">
            For a better experience<br>
            <strong>Download our App</strong><br>
            </span>
            <span class="btn btn-primary open-app">Open App</span>
        </a>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span class="text-dark" aria-hidden="true">&times;</span>
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
    $('#download-mobile-app-banner').on('closed.bs.alert', function () {
      localStorage.setItem('hidePopup', 'true');
    });
  },
  beforeDestroy: function () {
    //…
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {
    isPopupHidden: function () {
      var hidePopup = localStorage.getItem('hidePopup');
      return !!hidePopup;
    },
  }
});
