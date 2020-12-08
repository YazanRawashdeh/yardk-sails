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
      hidePopup: this.isPopupHidden(),
      display: this.displayStyle(),
    };
  },

  //  ╦ ╦╔╦╗╔╦╗╦
  //  ╠═╣ ║ ║║║║
  //  ╩ ╩ ╩ ╩ ╩╩═╝
  template: `
<div :style="display">
<div class="mobileapplink">
  <span class="close" @click="close()">x</span>
  <a href="#">
    <img src="http://via.placeholder.com/60" alt="">
    <span class="mobileapplink__text">
      For a better experience<br>
      <strong>Download our App</strong><br>
    </span>
    <span class="mobileapplink__btn">Open App</span>
  </a>
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
      this.hidePopup = true;
      this.display = this.displayStyle();
    },
    displayStyle: function () {
      return {'display': this.isPopupHidden() ? 'none' : 'block'};
    },
    isPopupHidden: function () {
      var hidePopup = localStorage.getItem('hidePopup');
      return hidePopup ? true : false;
    }
  }
});
