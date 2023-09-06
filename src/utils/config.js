const config = {
  "static_url": "https://static.prod.beantownpub.com",
  "sections": {
    "home": {
        "template": "index",
        "metadata": {
            "title": "Dr. Davis Ice Cream",
            "description": "Doc's Ice Cream Pepperell Massachusetts, making and serving our own ice cream for over 80 years!",
            "keywords": "ice cream, homemade, desserts, pepperell, massachusetts, sundaes, milkshakes, frappes, soft-serve"
        }
    },
    "menu": {
        "template": "menu",
        "metadata": {
            "title": "Doc's Menu",
            "description": "Dr. Davis Ice Cream Menu",
            "keywords": "ice cream, homemade, desserts"
        }
    },
    "about": {
        "template": "about",
        "metadata": {
            "title": "About Doc's",
            "description": "",
            "keywords": ""
        }
    },
    "contact": {
        "template": "contact",
        "metadata": {
            "title": "Contact Doc's",
            "description": "",
            "keywords": ""
        }
    },
    "parties": {
        "template": "parties",
        "metadata": {
            "title": "Ice Cream Parties",
            "description": "",
            "keywords": ""
        }
    },
    "flavors": {
        "template": "flavors",
        "metadata": {
            "title": "Doc's Ice Cream Flavors",
            "description": "",
            "keywords": "chocolate, vanilla, strawberry, coffee"
        }
    },
    "faq": {
        "template": "faq",
        "metadata": {
            "title": "Doc's FAQ",
            "description": "",
            "keywords": ""
        }
    }
  },
  "urls": {
      "googleApi": "https://maps.googleapis.com/maps/api/",
      "contactApi": "https://contact-api.jalgraves.com/v1/contact/beantown",
      "static": "https://static.prod.beantownpub.com",
      "facebook": "https://www.facebook.com/Doc-Davis-Ice-Cream-Stand-115542725133788/",
      "instagram": "https://www.instagram.com/drdavisicecream/",
      "twitter": "https://twitter.com/DrDavisIceCream"
  },
  "colors": {
      "yellow": "rgb(252,204,18)",
      "primaryYellow": "rgb(252,204,18)",
      "gray": "#494040",
      "red": "#c70039",
      "primaryRed": "#c70039",
      "navBarBlue": "rgba(5,46,102,0.90)",
      "primaryBlue": "rgba(5,46,102,0.90)",
      "navBarMenuBackgroundGray": "rgb(248 248 248)",
      "backgroundGray": "rgba(248,248,248,0.8)",
      "primaryGray": "rgb(248 248 248)",
      "blue": "#1f6696",
      "lightGray": "#F3F4F4",
      "darkGray": "#888888",
      "cyan": "#3fc5f0",
      "black": "#000000",
      "white": "whitesmoke"
  },
  "fonts": {
    "button": "'gotham-narrow-ultra', Poppins, sans-serif",
    "content": "'gotham-medium', Lato, sans-serif",
    "footer": "'Raleway', Arial, sans-serif",
    "headline": "'Poppins', sans-sefif",
    "script": "'Satisfy', cursive;"
  },
  "pages": {
      "index": {
          "name": "index",
          "icon": "faHome",
          "text": "Home",
          "title": "Dr. Davis Ice Cream",
          "keywords": "",
          "description": "",
          "menu_list": true,
          "top_menu": false
      },
      "about": {
          "name": "about",
          "icon": "faInfo",
          "text": "About",
          "title": "About Doc's",
          "keywords": "",
          "description": "Information about Dr. Davis Ice Cream",
          "menu_list": true,
          "top_menu": true
      },
      "contact": {
          "name": "contact",
          "icon": "faEnvelope",
          "text": "Contact",
          "title": "Contact Doc's",
          "keywords": "",
          "description": "Contact information for Dr. Davis Ice Cream",
          "menu_list": true,
          "top_menu": true
      },
      "menu": {
          "name": "menu",
          "icon": "faUtensils",
          "text": "Menu",
          "title": "Doc's Menu",
          "keywords": "",
          "description": "Dr. Davis Ice Cream food menu",
          "menu_list": true,
          "top_menu": true
      },
      "parties": {
          "name": "parties",
          "icon": "faUsers",
          "text": "Parties",
          "title": "Ice Cream Parties",
          "keywords": "",
          "description": "Dr. Davis Ice Cream parties",
          "menu_list": true,
          "top_menu": true
      },
      "flavors": {
          "name": "flavors",
          "icon": "faStar",
          "text": "Flavors",
          "title": "Ice Cream Flavors",
          "keywords": "",
          "description": "Doc's ice cram flavors",
          "menu_list": false,
          "top_menu": false
      },
      "facebook": {
          "name": "https://www.facebook.com/DrDavisIceCream/",
          "icon": "faFacebook",
          "text": "Facebook",
          "title": "",
          "keywords": "",
          "description": "",
          "menu_list": true,
          "top_menu": false
      },
      "instagram": {
          "name": "https://www.instagram.com/drdavisicecream/",
          "icon": "faInstagram",
          "text": "Instagram",
          "title": "",
          "keywords": "",
          "description": "",
          "menu_list": false,
          "top_menu": false
      },
      "twitter": {
          "name": "https://twitter.com/DrDavisIceCream",
          "icon": "faTwitter",
          "text": "Twitter",
          "title": "",
          "keywords": "",
          "description": "",
          "menu_list": false,
          "top_menu": false
      }
  }
}

export default config
