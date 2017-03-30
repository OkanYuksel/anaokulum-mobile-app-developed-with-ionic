angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        $state.go("app");
        //$state.go("profile");
        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        //$timeout(function() {
        //  $scope.closeLogin();
        //}, 1000);
    };
})

.controller('PlaylistsCtrl', function ($scope, $state) {
    //$scope.playlists = [
    //  { title: 'Karne', id: 1 },
    //  { title: 'Etkinlikler', id: 2 },
    //  { title: 'Yemek Lisesi', id: 3 },
    //  { title: 'Akademik Takvim', id: 4 },
    //  { title: 'Ogretmene Mesaj', id: 5 },
    //  { title: 'Gelistirici Ekip', id: 6 },
    //  { title: 'Ders Programi', id: 7 },
    //  { title: 'Ayarlar', id: 8 },
    //  { title: 'Yetenek Yonelim', id: 9 }
    //];

    $scope.karnegec = function () {
        $state.go('app.karne');
    }


    $scope.etkinlikgec = function () {
        $state.go('app.etkinlik');
    }


    $scope.yemekgec = function () {
        $state.go('app.yemek');
    }

    $scope.ogretmenkayitliogrencilerigoruntulegec = function () {
        $state.go('app.ogretmenkayitliogrencilerigoruntule');
    }

    $scope.ogretmendigerogretmenlerleiletisimgec = function () {
        $state.go('app.ogretmendigerogretmenlerleiletisim');
    }

    $scope.ogretmenkarnegoruntulemeduzenlemegec = function () {
        $state.go('app.ogretmenkarnegoruntulemeduzenleme');
    }
    $scope.ogretmenveliileiletisimgec = function () {
        $state.go('app.ogretmenveliileiletisim');
    }
    $scope.ogretmenetkinlikolusturmaduzenlemegec = function () {
        $state.go('app.ogretmenetkinlikolusturmaduzenleme');
    }
    $scope.ogretmendersprogramigec = function () {
        $state.go('app.ogretmendersprogrami');
    }
    $scope.ogretmenyemeklistesigec = function () {
        $state.go('app.ogretmenyemeklistesi');
    }

    $scope.velietkinliklerigoruntulegec = function () {
        $state.go('app.velietkinliklerigoruntule');
    }

    $scope.veliogretmenleiletisimgec = function () {
        $state.go('app.veliogretmenleiletisim');
    }

    $scope.velikarnegoruntulemegec = function () {
        $state.go('app.velikarnegoruntuleme');
    }

    $scope.veliyetenekyonelimgoruntulegec = function () {
        $state.go('app.veliyetenekyonelimgoruntule');
    }

    $scope.velidersprogramigoruntulegec = function () {
        $state.go('app.velidersprogramigoruntule');
    }


    $scope.veliyemeklistesigoruntulegec = function () {
        $state.go('app.veliyemeklistesigoruntule');
    }

    $scope.ayarlargec = function () {
        $state.go('app.ayarlar');
    }

    $scope.logingec = function () {
        $state.go('app.login');
    }

    $scope.menugec = function () {
        $state.go('app');
    }
    $scope.studentpagegec = function () {
        $state.go('app.studentpage');
    }
    $scope.LoginPopup = function (title) {
        $ionicPopup.alert({
            content: title,
            cssClass: 'custom-class',
            buttons: [{

                text: '<b>Tamam</b>',

                type: 'button-positive',


            }, ],

        })
    }
})

    .controller('KarneCtrl', function ($scope, $state) {

    })

     .controller('EtkinlikCtrl', function ($scope, $state) {

     })

     .controller('YemekCtrl', function ($scope, $state) {

     })

     .controller('OgretmenKayitliOgrencileriGoruntuleCtrl', function ($scope, $state, $ionicPopup) {

         var url = "http://localhost/AnaOkulumBeta/anaokulumwebservices.asmx/getStudents";
         $.ajax({
             url: url,
             type: 'POST',
             dataType: 'text',
             success: function (data) {

                 var replace1 = data.substring(data.lastIndexOf("["), data.lastIndexOf("]") + 1);
                 var jsonData = JSON.parse(replace1);

                 $scope.students = jsonData;
             },
             error: function (x, y, z) {
                 alert(x + "/" + y + "/" + z);
                 $scope.hide();
             }
         });

         $scope.studentpagegec = function () {
             $state.go('app.studentpage');
         }

         $scope.gonder = function () {

             alert("okan");

             //var token = "";
             //var options = {
             //    method: 'POST',
             //    url: 'http://api.ionic.io/push/notifications',
             //    headers: {
             //        'content-type': 'application/json',
             //        'authorization': 'Bearer ' + token
             //    },
             //    data: {
             //        "profile": "okan",
             //        "send_to_all": true,
             //        "notification": {
             //            "title": "okan",
             //            "android": {
             //                "message": "mesaj",
             //                "image": "http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-8/128/Accept-icon.png"
             //            }
             //        }
             //    }
             //}

             //$http(options).then(function (res) {
             //    $ionicPopup.alert({
             //        title: "Uyarý !",
             //        template: 'Bildirim baþarý ile gönderildi.',
             //        okText: 'Tamam',
             //        okType: 'button-positive'
             //    })

             //})

         };

         $scope.getID = function () {

             var ID = window.localStorage.getItem("key");
             alert(ID.valueOf());
         }

         // Triggered on a button click, or some other target
         $scope.showPopup = function () {
             $scope.data = {};

             // An elaborate, custom popup
             var myPopup = $ionicPopup.show({
                 template: '<input type="password" ng-model="data.wifi">',
                 title: 'Enter Wi-Fi Password',
                 subTitle: 'Please use normal things',
                 scope: $scope,
                 buttons: [
                   { text: 'Cancel' },
                   {
                       text: '<b>Save</b>',
                       type: 'button-positive',
                       onTap: function (e) {
                           if (!$scope.data.wifi) {
                               //don't allow the user to close unless he enters wifi password
                               e.preventDefault();
                           } else {
                               return $scope.data.wifi;
                           }
                       }
                   }
                 ]
             });

             myPopup.then(function (res) {
                 console.log('Tapped!', res);
             });

             $timeout(function () {
                 myPopup.close(); //close the popup after 3 seconds for some reason
             }, 3000);
         };

         // A confirm dialog
         $scope.showConfirm = function () {
             var confirmPopup = $ionicPopup.confirm({
                 title: 'Consume Ice Cream',
                 template: 'Are you sure you want to eat this ice cream?'
             });

             confirmPopup.then(function (res) {
                 if (res) {
                     console.log('You are sure');
                 } else {
                     console.log('You are not sure');
                 }
             });
         };

         // An alert dialog
         $scope.showAlert = function () {
             var alertPopup = $ionicPopup.alert({
                 title: 'Don\'t eat that!',
                 template: 'It might taste good'
             });

             alertPopup.then(function (res) {
                 console.log('Thank you for not eating my delicious ice cream cone');
             });
         };



     })
     .controller('OgretmenDigerOgretmenlerleIletisimCtrl', function ($scope, $state) {

         var url = "http://localhost/AnaOkulumBeta/anaokulumwebservices.asmx/getTeachers";
         $.ajax({
             url: url,
             type: 'POST',
             dataType: 'text',
             success: function (data) {

                 var replace1 = data.substring(data.lastIndexOf("["), data.lastIndexOf("]") + 1);
                 var jsonData = JSON.parse(replace1);

                 $scope.teachers = jsonData;
             },
             error: function (x, y, z) {
                 alert(x + "/" + y + "/" + z);
                 $scope.hide();
             }
         });


         $scope.ogretmendigerogretmenlerleiletisimgec = function () {
             $state.go('app.ogretmendigerogretmenlerleiletisim');
         }


     })

     .controller('OgretmenKarneGoruntulemeDuzenlemeCtrl', function ($scope, $state) {

     })

     .controller('OgretmenVeliIleIletisimCtrl', function ($scope, $state, $location, $anchorScroll, $http) {

         var url = "http://localhost/AnaOkulumBeta/anaokulumwebservices.asmx/getMessages";
         $.ajax({
             url: url,
             type: 'POST',
             dataType: 'text',
             success: function (data) {

                 //alert(data);

                 var replace1 = data.substring(data.lastIndexOf("["), data.lastIndexOf("]") + 1);
                 var jsonData = JSON.parse(replace1);

                 //if (replace1 != null && replace1 != "") {

                 //    for (var i = 0; i < replace1.length; i++) {
                 //        item = {
                 //            ID: replace1[i].ID,
                 //            Me: replace1[i].Message,
                 //        }
                 //        $scope.cities.push(item);
                 //        if (city == replace1[i].ID)
                 //            $scope.selectCity = item;
                 //    }
                 //}

                 $scope.messages = jsonData;
             },
             error: function (x, y, z) {
                 alert(x + "/" + y + "/" + z);
                 $scope.hide();
             }
         });


         $scope.sendMessage = function () {
             var message = $scope.chat_message;
             //alert(message);

             var parameters = "{'Message':'" + message + "'}";
             var url = "http://localhost/AnaOkulumBeta/anaokulumwebservices.asmx/sendMessage";

             $.ajax({
                 url: url,
                 data: "Message=" + message ,
                 type: 'POST',
                 dataType: 'text',
                 success: function (data) {
                     alert("Mesaj Gonderildi!");

                 },
                 error: function (x, y, z) {
                     alert(x + "/" + y + "/" + z);
                     $scope.hide();
                 }
             });

         };



         $scope.scrollTo = function (countryName) {
             $location.hash(countryName);
             $anchorScroll();
         }

     })

     .controller('OgretmenEtkinlikOlusturmaDuzenelemeCtrl', function ($scope, $state) {

     })

    .controller('OgretmenDersProgramiCtrl', function ($scope, $state) {
        $scope.ogretmendersprogramigec = function () {
            $state.go('app.ogretmendersprogrami');
        }

    })

     .controller('OgretmenYemekListesiCtrl', function ($scope, $state) {

     })

     .controller('VeliEtkinlikleriGoruntuleCtrl', function ($scope, $state) {

     })

       .controller('VeliOgretmenleIletisimCtrl', function ($scope, $state) {

       })

    .controller('VeliKarneGoruntulemeCtrl', function ($scope, $state) {

    })

     .controller('VeliYetenekYonelimGoruntuleCtrl', function ($scope, $state) {

     })

    .controller('VeliDersProgramiGoruntuleCtrl', function ($scope, $state) {

    })

     .controller('VeliYemekListesiGoruntuleCtrl', function ($scope, $state) {

     })

     .controller('AyarlarCtrl', function ($scope, $state) {

     })
    .controller('LoginCtrlCtrl', function ($scope, $state) {
        $scope.doLogin = function () {






            var username = $scope.username;
            var password = $scope.password;


            if (username == null || username == "")
                return false;

            var parameters = "{'username':'" + username + "','password':'" + password + "'}";
            var url = "http://localhost/AnaOkulumBeta/anaokulumwebservices.asmx/getUser";

            $.ajax({
                url: url,
                data: "username=" + username + "&password=" + password,
                type: 'POST',
                dataType: 'text',
                success: function (data) {
                    if (data != null && data != "") {

                        var ID = data.substring(data.lastIndexOf("&lt;UserID&gt;") + 14, data.lastIndexOf("&lt;/UserID&gt;"));

                        window.localStorage.setItem("key", ID);
                        $state.go("app.playlists");
                    }
                    else
                        alert("Kullanýcý bulunamadý");

                },
                error: function (x, y, z) {
                    alert(x + "/" + y + "/" + z);
                    $scope.hide();
                }
            });




            //$state.go("profile");
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            //$timeout(function() {
            //  $scope.closeLogin();
            //}, 1000);
        };

    })
       .controller('StudentPageCtrl', function ($scope, $state) {

           var url = "http://localhost/AnaOkulumBeta/anaokulumwebservices.asmx/getLessons";
           $.ajax({
               url: url,
               type: 'POST',
               dataType: 'text',
               success: function (data) {

                   var replace1 = data.substring(data.lastIndexOf("["), data.lastIndexOf("]") + 1);
                   var jsonData = JSON.parse(replace1);

                   $scope.lessons = jsonData;
               },
               error: function (x, y, z) {
                   alert(x + "/" + y + "/" + z);
                   $scope.hide();
               }
           });

           $scope.studentpagegec = function () {
               $state.go('app.studentpage');
           }

       })


    .controller('PlaylistCtrl', function ($scope, $state) {

    });
