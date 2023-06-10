
// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
  current_lang: 'en',
  autoclear_cookies: true,
  cookie_name: 'cc_cookie_demo2',
  cookie_expiration: 365,
  page_scripts: true,
  force_consent: true,
  remove_cookie_tables: true,

  gui_options: {
    consent_modal: {
      layout: 'cloud',
      position: 'bottom center',
      transition: 'slide',
      show_close_button: true,
      show_decline_all_button: true,
    },
    settings_modal: {
      layout: 'bar',
      position: 'left',
      transition: 'slide',
    },
  },

  onFirstAction: function() {
    console.log('onFirstAction fired');
  },

  onAccept: function(cookie) {
    console.log('onAccept fired!');
  },

  onChange: function(cookie, changed_preferences) {
    console.log('onChange fired!');
    if (!cc.allowedCategory('analytics')) {
      typeof gtag === 'function' &&
        gtag('consent', 'update', {
          analytics_storage: 'denied',
        });
    }
  },

  languages: {
    en: {
      consent_modal: {
        title: 'Hello traveller, it\'s cookie time!',
        description:
          'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="www.ambaamba.studio/privacy-policies" class="cc-link">Privacy policy</a>',
        primary_btn: {
          text: 'Accept all',
          role: 'accept_all',
        },
        secondary_btn: {
          text: 'Preferences',
          role: 'settings',
        },
        revision_message:
          '<br><br> Dear user,' + ' <a href="www.ambaamba.studio/terms-and-conditions" class="cc-link"> terms and conditions </a> ' + ' have changed since the last time you visited!',
      },
      settings_modal: {
        title: 'Cookie settings',
        save_settings_btn: 'Save current selection',
        accept_all_btn: 'Accept all',
        reject_all_btn: 'Reject all',
        close_btn_label: 'Close',
        blocks: [
          {
            title: 'Cookie usage',
            description: 'Read our Privacy Policy' + ' <a href="www.ambaamba.studio/privacy-policies" class="cc-link">Privacy Policy</a>.',
          },
          {
            title: 'Strictly necessary cookies',
            description: 'These items are required to enable basic website functionality.',
            toggle: {
              value: 'necessary',
              enabled: true,
              readonly: true,
            },
          },
          {
            title: 'Analytics & Performance cookies',
            description:
              'These items help the website operator understand how its website performs, how visitors interact with the site, and whether there may be technical issues. This storage type usually doesn’t collect information that identifies a visitor.',
            toggle: {
              value: 'analytics',
              enabled: false,
              readonly: false,
            },
          },
          {
            title: 'Targeting & Advertising cookies',
            description:
"If this category is deselected, the page will reload when preferences are saved, ensuring that scripts related to targeting and advertising cookies are properly adjusted."         
              toggle: {
              value: 'targeting',
              enabled: false,
              readonly: false,
              reload: 'on_disable',
            },
          },
          {
            title: 'More information',
            description: 'Read more on our cookie policy disclaimer' + ' <a class="cc-link" href="www.ambaamba.studio/cookies-policy-disclaimer">Contact me</a>.',
          },
        ],
      },
    },
  },
});
