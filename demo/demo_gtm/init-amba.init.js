var LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

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
            'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#privacy-policy" class="cc-link">Privacy policy</a>',
          primary_btn: {
            text: 'Accept all',
            role: 'accept_all',
          },
          secondary_btn: {
            text: 'Preferences',
            role: 'settings',
          },
          revision_message:
            '<br><br> Dear user, terms and conditions have changed since the last time you visited!',
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
              description: 'We use cookies on our website to enhance your browsing experience and provide personalized services. This section explains how we use cookies and similar technologies, and it provides information on your choices regarding cookies.\n\nA cookie is a small text file that is stored on your device (computer, tablet, or mobile) when you visit a website. It allows the website to recognize your device and remember certain information about your preferences or past actions.\n\nWe use different types of cookies on our website:\n\n- Strictly necessary cookies: These cookies are essential for the proper functioning of our website. They enable basic features such as page navigation, access to secure areas, and authentication. Without these cookies, certain parts of the website may not function correctly.\n\n- Functionality cookies: These cookies allow our website to remember choices you make and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as watching videos or commenting on a blog.\n\n- Analytics and Performance cookies: These cookies allow us to gather anonymous information about how visitors use our website. They provide us with valuable insights into visitor behavior and help us improve the performance and functionality of our site. These cookies collect aggregated data, such as the number of visitors, the pages they visit, and the time spent on each page.\n\n- Social media cookies: These cookies are set by social media platforms such as Facebook, Twitter, and LinkedIn. They enable you to share our content with your friends and networks. They may track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites.\n\n- Third-party cookies: These cookies are set by third-party services or providers that we may use on our website. They may be used to track your browsing activity across different websites and create a profile of your interests. These cookies are subject to the privacy policies of the respective third parties, and we recommend reviewing their privacy policies for more information.\n\nBy using our website, you consent to the use of these cookies as described in our <a href="#" class="cc-link">Privacy Policy</a>.\n\nYou can manage your cookie preferences and make choices regarding the use of cookies by clicking on "Preferences" below. Please note that disabling certain types of cookies may impact the functionality of the website and limit your access to certain features.\n\nFor more information on how we collect, use, and protect your personal data, please read our <a href="#" class="cc-link">Privacy Policy</a>.',
            },
            {
              title: 'Strictly necessary cookies',
              description: 'These cookies are essential for the proper functioning of our website. They enable basic features such as page navigation, access to secure areas, and authentication. Without these cookies, certain parts of the website may not function correctly. These cookies do not collect any personally identifiable information.',
              toggle: {
                value: 'necessary',
                enabled: true,
                readonly: true,
              },
            },
            {
              title: 'Functionality cookies',
              description: 'These cookies allow our website to remember choices you make and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as watching videos or commenting on a blog.',
              toggle: {
                value: 'functionality',
                enabled: false,
                readonly: false,
              },
            },
            {
              title: 'Analytics & Performance cookies',
              description:
                'These cookies allow us to gather anonymous information about how visitors use our website. They provide us with valuable insights into visitor behavior and help us improve the performance and functionality of our site. These cookies collect aggregated data, such as the number of visitors, the pages they visit, and the time spent on each page. The information collected is anonymous and cannot be used to personally identify you.',
              toggle: {
                value: 'analytics',
                enabled: false,
                readonly: false,
              },
            },
            {
                title: 'Marketing cookies',
                description:
                  'These cookies are used to collect information about your browsing habits and interests. They are used by advertisers and marketers to deliver personalized advertisements and content tailored to your preferences. These cookies track your interactions with websites and may share this information with third parties, such as advertising networks. By enabling these cookies, you may receive targeted advertisements that are more relevant to you.',
                toggle: {
                  value: 'marketing',
                  enabled: false,
                  readonly: false,
                  reload: 'on_disable',
                },
              },
            {
              title: 'Social media cookies',
              description:
                'These cookies are set by social media platforms such as Facebook, Twitter, and LinkedIn. They enable you to share our content with your friends and networks. They may track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites.',
              toggle: {
                value: 'social_media',
                enabled: false,
                readonly: false,
                reload: 'on_disable',
              },
            },
            {
              title: 'Third-party cookies',
              description:
                'These cookies are set by third-party services or providers that we may use on our website. They may be used to track your browsing activity across different websites and create a profile of your interests. These cookies are subject to the privacy policies of the respective third parties, and we recommend reviewing their privacy policies for more information.',
              toggle: {
                value: 'third_party',
                enabled: false,
                readonly: false,
                reload: 'on_disable',
              },
            },
            {
              title: 'More information',
              description: 'For more detailed information about our use of cookies and your rights regarding your personal data, please refer to our Cookie Policy and Privacy Policy.\n\n- Cookie Policy: Our Cookie Policy provides detailed information about the types of cookies we use, their purposes, and how you can manage your cookie preferences. You can access our Cookie Policy by clicking <a href="www.ambaamba.studio/cookies-policy">here</a>.\n\n- Privacy Policy: Our Privacy Policy outlines how we collect, use, disclose, and protect your personal data. It also explains your rights and choices regarding your personal data. You can access our Privacy Policy by clicking <a href="www.ambaamba.studio/privacy-policy">here</a>.\n\nIf you have any questions, concerns, or requests regarding your personal data or our use of cookies, please feel free to <a class="cc-link" href="www.ambaamba.studio/cookies-policy-disclaimer">contact us</a>.\n\nPlease note that by contacting us, you acknowledge that you have read and understood our Cookie Policy and Privacy Policy.'
            },
        ],
      },
    },
  },
});
