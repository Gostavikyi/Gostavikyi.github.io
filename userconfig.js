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
  fastlink: "https://raindrop.io/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "HOME",
      background_url: "https://i.pinimg.com/originals/63/54/df/6354dfb863e40a1a159c00ddd5dd7ce4.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "!bs",
            url: "https://bsky.app/",
           icon: "butterfly",
            icon_color: "#7daea3",
          },
          {name: "d",  url: "https://deck.blue/", },
   
          {
            name: "!tw",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },

     {
            name: "!tk",
            url: "https://www.tiktok.com/",
            icon: "brand-tiktok",
            icon_color: "#99858B",
          },


          {
            name: "!ig",
            url: "https://www.instagram.com/",
            icon: "brand-instagram",
            icon_color: "#99858B",
          },


          {
            name: "!re",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
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


        



        ],
      }, {
        name: "Games",
        links: [
         
          {name: "",  url: "https://rentry.org/4yeg5hqc",icon: "dice-5", icon_color: "#ea1262",  },
                   

            {name: "steamdb",  url: "https://steamdb.info/",  icon: "brand-steam", icon_color: "#777674", },
   
            {name: "steamchart",  url: "https://steamcharts.com/",  icon: "brand-steam", icon_color: "#546B54", },

            {name: "prime stuff",  url: "https://gaming.amazon.com/home",  icon: "ironing-steam", icon_color: "#796A3B", },
            {name: "itch.io", url: "https://itch.io/games", icon: "device-gamepad-3", icon_color: "#ea6962", },
            
            

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
              name: "cara",
              url: "https://cara.app/",
              icon: "brand-craft",
              icon_color: "#7daea3",
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
              url: "https://soundcloud.com/",
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

            {
              name: "lastfm",
              url: "https://www.last.fm/home/",
              icon: "device-audio-tape",
              icon_color: "#2daea3",
            },

          ],
        },
        {
          name: "Animation",
          links: [

            
            {name: "hicartoon",  url: "https://hicartoon.to/home",  icon: "brand-radix-ui",
              icon_color: "#2daea3", },
            
            {name: "kimcartoon",  url: "https://kimcartoon.si/kimcartoon.me",  icon: "mickey",
              icon_color: "#969696", },
            
         
            {name: "everythingmoe",  url: "https://everythingmoe.com/", icon: "building-carousel",  
              icon_color: "#D02451" },

            {name: "miruro",  url: "https://www.miruro.online/", icon: "michelin-star",  
              icon_color: "#D02451" },

  




          ],
        },
      ],
    },
    {
      name: "Life",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "Movie/Tv",
          links: [

  
            {name: "",  url: "https://nmnhost.github.io/Movie/", icon: "movie",  icon_color: "#D52051" },
            
           {
              name: "Aether",
              url: "https://aether.mom",
              icon: "accessible",
              icon_color: "#7daea3",
            },
            

            {name: "Yflix ", url: "https://yflix.to/home", icon: "brand-netflix", icon_color: "#fa3962", },
            
{name: "hydra ", url: "https://hydrahd.ru/", icon: "ripple", icon_color: "#ea6962", },
            
           

               {
              name: "ihavenotv",
              url: "https://ihavenotv.com/",
              icon: "antenna",
              icon_color: "#2jaea3",
            },
   



          ],
        },
        {
          name: "Animation",
          links: [
   {name: "hicartoon",  url: "https://hicartoon.to/home",  icon: "brand-radix-ui",
              icon_color: "#2daea3", },
            
            {name: "kimcartoon",  url: "https://kimcartoon.si/kimcartoon.me",  icon: "mickey",
              icon_color: "#969696", },
            
         
            {name: "everythingmoe",  url: "https://everythingmoe.com/", icon: "building-carousel",  
              icon_color: "#D02451" },

            {name: "miruro",  url: "https://www.miruro.online/", icon: "michelin-star",  
              icon_color: "#D02451" },



            
     
          ],
        },
        {
          name: "Resources",
          links: [
           {name: "Fmhy",  url: "https://fmhy.net/",  icon: "sword",
              icon_color: "#ddb839", },
            
            {name: "",  url: "https://www.reddit.com/r/Piracy/wiki/megathread/",  icon: "align-left",
              icon_color: "#ddb839", },
   
                 {
              name: "Tabler",
              url: "https://tabler.io/icons",
              icon: "icons",
              icon_color: "#e78a4e",
            },


            {
              name: "sketchfab",
              url: "https://sketchfab.com/",
              icon: "basket",
              icon_color: "#7daea3",
            },

            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#ea6962",
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
            {
              name: "cobalt",
              url: "https://cobalt.tools/",
              icon: "download",
              icon_color: "#f24912",
            },


      {
              name: "",
              url: "https://rentry.org/vzght9na",
              icon: "settings-bolt",
              icon_color: "#f24912",
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
