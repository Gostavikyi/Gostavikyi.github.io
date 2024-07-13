let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Chicago, Illinois',
    scale: "F",
  },
  clock: {
    format: "A ||           d:M: s",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      e: ["https://e621.net/posts?tags=", "E6"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
      a: ["https://www.amazon.com/s?k=", "Amazon"],
     
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://omnivore.app/home?q=in%3Ainbox+-label%3Ansfw",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "HOME",
      background_url: "https://i.pinimg.com/originals/63/54/df/6354dfb863e40a1a159c00ddd5dd7ce4.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "!tk",
            url: "https://www.tiktok.com/",
            icon: "brand-tiktok",
            icon_color: "#a9b665",
          },
          {name: "p",  url: "https://www.tiktok.com/profile", },
          {name: "v",  url: "https://www.tiktok.com/live?lang=en", },
          {
            name: "!tw",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
  

          {
            name: "!bs",
            url: "https://bsky.app/",
            icon: "butterfly",
            icon_color: "#e78a4e",
          },
          {
            name: "!yt",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "!ttv",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },

          {
            name: "!ig",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "#99858B",
          },



        ],
      }, {
        name: "chans",
        links: [
         
          {name: "/an/",  url: "https://boards.4chan.org/an/", },
          {name: "/co/",  url: "https://boards.4chan.org/co/", },
          {name: "/co/+",  url: "https://boards.plus4chan.org/co/", },

          {name: "/ck/",  url: "https://boards.4chan.org/ck/", },
          {name: "/v/",  url: "https://boards.4chan.org/m/", },
          {name: "/tv/",  url: "https://boards.4chan.org/an/", },
          {name: "/wg/",  url: "https://boards.4chan.org/wg/", },
          {name: "/wsg/",  url: "https://boards.4chan.org/wsg/", },


        ],
      }, {
        name: "Ai✨",
        links: [
          {
            name: "Ecos.ai - Client",
            url: "https://www.ecosia.org/chat?addon=firefox&addonversion=4.1.2&q=s",
            icon: "plant-2",
            icon_color: "#7daea3",
          },
       
        ],
      }],
    },
    {
      name: "Media",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "Media",
          links: [
            {
              name: "tumblr",
              url: "https://www.tumblr.com/",
              icon: "brand-tumblr",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "krea ai",
              url: "https://www.krea.ai/apps/image/realtime",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "saucenao",
              url: "https://saucenao.com/",
              icon: "eye-pin",
              icon_color: "#d3869b",
            },
       

          ],
        },
        {
          name: "Music",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com/",
              icon: "brand-spotify",
              icon_color: "#63b467",
            },
            {
              name: "soundcloud",
              url: "https://uxpro.cc/",
              icon: "brand-soundcloud",
              icon_color: "#d8a07c",
            },
            {
              name: "bandcamp",
              url: "https://bandcamp.com/",
              icon: "brand-bandcamp",
              icon_color: "#ea6962",
            },
            {
              name: "beatbox",
              url: "https://choptop84.github.io/abyssbox-app/",
              icon: "brand-adobe",
              icon_color: "#7daea3",
            },
      
          ],
        },
        {
          name: "Streams",
          links: [
            

            {name: "aniwav",  url: "https://aniwave.to/home", icon: "ripple",
              icon_color: "#D82051" },
            {name: "cimcartoon",  url: "https://kimcartoon.li/",  icon: "mickey",
              icon_color: "#969696", },
            {name: "fmobies",  url: "https://fmovies24.to/",   icon: "video",
              icon_color: "#130F10",},
  
            {name: "bingged",  url: "https://binged.in/",   icon: "video",
              icon_color: "#554CA8",},
            {name: "netflix",  url: "https://www.netflix.com/",  icon: "brand-netflix",
              icon_color: "#d75e40", },
            {name: "plex",  url: "https://app.plex.tv/desktop/#!/",  icon: "topology-complex",
              icon_color: "#ddb839", },
   




          ],
        },
      ],
    },
    {
      name: "Other",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "Games",
          links: [
            
            {name: "steamdb",  url: "https://steamdb.info/",  icon: "brand-steam",
              icon_color: "#777674", },
   
              {name: "steamchrt",  url: "https://steamcharts.com/",  icon: "brand-steam",
                icon_color: "#546B54", },

                {name: "prime stuff",  url: "https://gaming.amazon.com/home",  icon: "ironing-steam",
                  icon_color: "#796A3B", },
     
            

          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "MN",
              url: "https://github.com/",
              icon: "home-cog",
              icon_color: "#6D7070",
            },
     
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },

            {
              name: "OHB",
              url: "https://gitlab.com/Gostavikyi/Home/-/blob/master/index.html?ref_type=heads",
              icon: "home-cog",
              icon_color: "#6D7070",
            },
            {
              name: "NHB",
              url: "pastelinkhere",
              icon: "home-cog",
              icon_color: "#6D7070",
            },

            {name: "Priv Megatrd",  url: "https://www.reddit.com/r/Piracy/wiki/megathread/",  icon: "brand-steam",
              icon_color: "#ddb839", },
   

            
     
          ],
        },
        {
          name: "Other",
          links: [
   
        
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
            },

            {
              name: "tmlsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },

            {
              name: "Tabler",
              url: "https://tabler.io/icons",
              icon: "icons",
              icon_color: "#e78a4e",
            },

            {
              name: "thingi",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },


            {
              name: "sketchfab",
              url: "https://sketchfab.com/",
              icon: "basket",
              icon_color: "#7daea3",
            },




          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzBhZTQxZWI2YzJlYzR5emFxcHhrbnFtNXY1ZmVvMWI1emhscTFkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CqDTYmxrpApGF9eI6q/giphy.webp",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },

            {
              name: "proton",
              url: "https://proton.me/",
              icon: "template",
              icon_color: "#sa6362",
            },

            {
              name: "relay",
              url: "https://relay.firefox.com/accounts/profile/?",
              icon: "access-point",
              icon_color: "#oa6962",
            },

            {
              name: "temp",
              url: "https://temp-mail.org/en/",
              icon: "brand-ctemplar",
              icon_color: "#fe6962",
            },




          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "mega",
              url: "https://mega.nz/login",
              icon: "box",
              icon_color: "#7daea3",
            },
            {
              name: "catbox",
              url: "https://catbox.moe/",
              icon: "cat",
              icon_color: "#ea6962",
            },

          ],
        },

        {
          name: "Personally I think everything is about to go to shit real fast\nSo Why not go out in comfort. Its been 10 years since I started using webpages and so much has happened in those 10 years.\n            ~W.",
          links: [
       

          ],
        },
        
     
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
