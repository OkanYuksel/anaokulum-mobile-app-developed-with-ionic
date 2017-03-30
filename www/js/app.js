// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
      })

    .state('app.search', {
        url: '/search',
        views: {
            'menuContent': {
                templateUrl: 'templates/search.html'
            }
        }
    })

    .state('app.browse', {
        url: '/browse',
        views: {
            'menuContent': {
                templateUrl: 'templates/browse.html'
            }
        }
    })
      .state('app.playlists', {
          url: '/playlists',
          views: {
              'menuContent': {
                  templateUrl: 'templates/playlists.html',
                  controller: 'PlaylistsCtrl'
              }
          }
      })

    .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    })

     .state('app.karne', {
         url: '/playlists/karne',
         views: {
             'menuContent': {
                 templateUrl: 'templates/Karne.html',
                 controller: 'KarneCtrl'
             }
         }
     })

       .state('app.etkinlik', {
           url: '/playlists/etkinlik',
           views: {
               'menuContent': {
                   templateUrl: 'templates/Etkinlik.html',
                   controller: 'EtkinlikCtrl'
               }
           }
       })

       .state('app.yemek', {
           url: '/playlists/yemek',
           views: {
               'menuContent': {
                   templateUrl: 'templates/Yemek.html',
                   controller: 'YemekCtrl'
               }
           }
       })

        .state('app.ogretmenkayitliogrencilerigoruntule', {
            url: '/playlists/ogretmenkayitliogrencilerigoruntule',
            views: {
                'menuContent': {
                    templateUrl: 'templates/OgretmenKayitliOgrencileriGoruntule.html',
                    controller: 'OgretmenKayitliOgrencileriGoruntuleCtrl'
                }
            }
        })

      .state('app.ogretmendigerogretmenlerleiletisim', {
          url: '/playlists/ogretmendigerogretmenlerleiletisim',
          views: {
              'menuContent': {
                  templateUrl: 'templates/OgretmenDigerOgretmenlerIleIletisim.html',
                  controller: 'OgretmenDigerOgretmenlerleIletisimCtrl'
              }
          }
      })

     .state('app.ogretmenkarnegoruntulemeduzenleme', {
         url: '/playlists/ogretmenkarnegoruntulemeduzenleme',
         views: {
             'menuContent': {
                 templateUrl: 'templates/OgretmenKarneGoruntulemeDuzenleme.html',
                 controller: 'OgretmenKarneGoruntulemeDuzenlemeCtrl'
             }
         }
     })

      .state('app.ogretmenveliileiletisim', {
          url: '/playlists/ogretmenveliileiletisim',
          views: {
              'menuContent': {
                  templateUrl: 'templates/OgretmenVeliIleIletisim.html',
                  controller: 'OgretmenVeliIleIletisimCtrl'
              }
          }
      })

      .state('app.ogretmenetkinlikolusturmaduzenleme', {
          url: '/playlists/ogretmenetkinlikolusturmaduzenleme',
          views: {
              'menuContent': {
                  templateUrl: 'templates/OgretmenEtkinlikOlusturmaDuzenleme.html',
                  controller: 'OgretmenEtkinlikOlusturmaDuzenelemeCtrl'
              }
          }
      })

       .state('app.ogretmendersprogrami', {
           url: '/playlists/ogretmendersprogrami',
           views: {
               'menuContent': {
                   templateUrl: 'templates/OgretmenDersProgrami.html',
                   controller: 'OgretmenDersProgramiCtrl'
               }
           }
       })

       .state('app.ogretmenyemeklistesi', {
           url: '/playlists/ogretmenyemeklistesi',
           views: {
               'menuContent': {
                   templateUrl: 'templates/OgretmenYemekListesi.html',
                   controller: 'OgretmenYemekListesiCtrl'
               }
           }
       })

     .state('app.velietkinliklerigoruntule', {
         url: '/playlists/velietkinliklerigoruntule',
         views: {
             'menuContent': {
                 templateUrl: 'templates/VeliEtkinlikleriGoruntule.html',
                 controller: 'VeliEtkinlikleriGoruntuleCtrl'
             }
         }
     })

     .state('app.veliogretmenleiletisim', {
         url: '/playlists/veliogretmenleiletisim',
         views: {
             'menuContent': {
                 templateUrl: 'templates/VeliOgretmenIleIletisim.html',
                 controller: 'VeliOgretmenleIletisimCtrl'
             }
         }
     })

       .state('app.velikarnegoruntuleme', {
           url: '/playlists/velikarnegoruntuleme',
           views: {
               'menuContent': {
                   templateUrl: 'templates/VeliKarneGoruntuleme.html',
                   controller: 'VeliKarneGoruntulemeCtrl'
               }
           }
       })


     .state('app.veliyetenekyonelimgoruntule', {
         url: '/playlists/veliyetenekyonelimgoruntule',
         views: {
             'menuContent': {
                 templateUrl: 'templates/VeliYetenekYonelimGoruntule.html',
                 controller: 'VeliYetenekYonelimGoruntuleCtrl'
             }
         }
     })


       .state('app.velidersprogramigoruntule', {
           url: '/playlists/velidersprogramigoruntule',
           views: {
               'menuContent': {
                   templateUrl: 'templates/VeliDersProgramiGoruntule.html',
                   controller: 'VeliDersProgramiGoruntuleCtrl'
               }
           }
       })


     .state('app.veliyemeklistesigoruntule', {
         url: '/playlists/veliyemeklistesigoruntule',
         views: {
             'menuContent': {
                 templateUrl: 'templates/VeliYemekListesiGoruntule.html',
                 controller: 'VeliYemekListesiGoruntuleCtrl'
             }
         }
     })


     .state('app.ayarlar', {
         url: '/playlists/ayarlar',
         views: {
             'menuContent': {
                 templateUrl: 'templates/Ayarlar.html',
                 controller: 'AyarlarCtrl'
             }
         }
     })

     .state('app.login', {
         url: '/login',
         views: {
             'menuContent': {
                 templateUrl: 'templates/login.html',
                 controller: 'LoginCtrlCtrl'
             }
         }
     })
      .state('app.menu', {
          url: '/menu2',
          views: {
              'menuContent': {
                  templateUrl: 'templates/menu.html',
                  controller: 'AppCtrl'
              }
          }
      })
    
     .state('app.studentpage', {
         url: '/studentpage',
         views: {
             'menuContent': {
                 templateUrl: 'templates/StudentPage.html',
                 controller: 'StudentPageCtrl'
             }
         }
     })




    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');
});