var LOREM_IPSUM = 'Amba Amba Studio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
var LOREM_IPSUMA = 'For more detailed information about our use of cookies and your rights regarding your personal data, please refer to our Cookie Policy and Privacy Policy.\n\n- Cookie Policy: Our Cookie Policy provides detailed information about the types of cookies we use, their purposes, and how you can manage your cookie preferences. You can access our Cookie Policy by clicking <a href="www.ambaamba.studio/cookies-policy">here</a>.\n\n- Privacy Policy: Our Privacy Policy outlines how we collect, use, disclose, and protect your personal data. It also explains your rights and choices regarding your personal data. You can access our Privacy Policy by clicking <a href="www.ambaamba.studio/privacy-policy">here</a>.\n\nIf you have any questions, concerns, or requests regarding your personal data or our use of cookies, please feel free to <a class="cc-link" href="www.ambaamba.studio/cookies-policy-disclaimer">contact us</a>.\n\nPlease note that by contacting us, you acknowledge that you have read and understood our Cookie Policy and Privacy Policy.';
         
var LOREM_IPSUMAB = 'thi';
var LOREM_IPSUMABC = 'thi.';
var LOREM_IPSUMABCD = 'thi';
var LOREM_IPSUMABCDE = 'thi';
var LOREM_IPSUMABCDEF = 'thi';
var LOREM_IPSUMABCDEFG =   'Third-Party Cookies: These cookies are set by third-party services or providers that we may use on our website. They may be used to track your browsing activity across different websites and create a profile of your interests. These cookies are subject to the privacy policies of the respective third parties, and we recommend reviewing their privacy policies for more information.'
// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    current_lang: 'en',
    autoclear_cookies: true,                    // default: false
    cookie_name: 'cc_cookie_demo2',             // default: 'cc_cookie'
    cookie_expiration: 365,                     // default: 182
    page_scripts: true,                         // default: false
    force_consent: true,                        // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // hide_from_bots: false,                   // default: false
   // remove_cookie_tables: true,              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: '/',                        // default: root
    // cookie_same_site: 'Lax',
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                    // box,cloud,bar
            position: 'bottom center',          // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'bar',                      // box,bar
            position: 'left',                   // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired!')
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired!');

        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Hello traveller, it\'s cookie time!',
                description: 'Our website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#privacy-policy" class="cc-link">Privacy policy</a>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'      //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Preferences',
                    role: 'settings'       //'settings' or 'accept_necessary'
                },
                revision_message: '<br><br> Dear user, terms and conditions have changed since the last time you visisted!'
            },
            settings_modal: {
                title: 'Cookie settings',
                save_settings_btn: 'Save current selection',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: LOREM_IPSUMA + ' <a href="#" class="cc-link">Privacy Policy</a>.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: LOREM_IPSUMA + LOREM_IPSUM + "<br><br>" + LOREM_IPSUM + LOREM_IPSUM,
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Analytics & Performance cookies',
                        description: LOREM_IPSUMABCDEFG,
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'yourdomain.com',
                                col3: 'description ...',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'yourdomain.com',
                                col3: 'description ...',
                            },
                            {
                                col1: '_my_cookie',
                                col2: 'yourdomain.com',
                                col3: 'test cookie with custom path ...',
                                path: '/demo'       // needed for autoclear cookies
                            }
                        ]
                    }, {
                        title: 'Targeting & Advertising cookies',
                        description: 'If this category is deselected, <b>the page will reload when preferences are saved</b>... <br><br>(demo example with reload option enabled, for scripts like microsoft clarity which will re-set cookies and send beacons even after the cookies have been cleared by the cookieconsent\'s autoclear function)',
                        toggle: {
                            value: 'targeting',
                            enabled: false,
                            readonly: false,
                            reload: 'on_disable'            // New option in v2.4, check readme.md
                        },
                      cookie_table: [
                            {
                                col1: '^_cl',               // New option in v2.4: regex (microsoft clarity cookies)
                                col2: 'yourdomain.com',
                                col3: 'These cookies are set by microsoft clarity',
                                // path: '/',               // New option in v2.4
                                is_regex: true              // New option in v2.4
                            }
                        ]
                    },
                    {
                title: 'Functionality cookies',
                description:
                  'Functionality Cookies: These cookies allow our website to remember choices you make and provide enhanced, more personalized features. They may also be used to provide services you have requested, such as watching videos or commenting on a blog. The information these cookies collect is anonymized and cannot track your browsing activity on other websites.',
                toggle: {
                  value: 'functionality',
                  enabled: false,
                  readonly: false,
                }
              },
                        {
                title: 'Social media cookies',
                description:
                  'Social Media Cookies: These cookies are set by social media platforms such as Facebook, Twitter, and LinkedIn. They enable you to share our content with your friends and networks. They may track your browser across other sites and build a profile of your interests, which may impact the content and messages you see on other websites.',
                toggle: {
                  value: 'social_media',
                  enabled: false,
                  readonly: false,
                }
              },
                       {
                                title: 'Third-party cookies',
                                description: 'Third-Party Cookies: These cookies are set by third-party services or providers that we may use on our website. They may be used to track your browsing activity across different websites and create a profile of your interests. These cookies are subject to the privacy policies of the respective third parties, and we recommend reviewing their privacy policies for more information.',
                                toggle: {
                                    value: 'third_party',
                                    enabled: false,
                                    readonly: false,
                                }
                            },
                    {
                        title: 'More information',
                        description: LOREM_IPSUM + ' <a class="cc-link" href="https://orestbida.com/contact/">Contact me</a>.',
                    }
                ]
            }
        }
    }
});
