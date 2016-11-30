var ethan = ethan || {};

ethan.app = {
    database:variable = null,
    initPage : function() {
       var config = {
           apiKey: "AIzaSyDkEeXuSEzN3lbX92MRZcMm0KQVoCcNu38",
           authDomain: "ethanthacker-2825c.firebaseapp.com",
           databaseURL: "https://ethanthacker-2825c.firebaseio.com",
           storageBucket: "ethanthacker-2825c.appspot.com",
       };
       firebase.initializeApp(config);
       ethan.app.database = firebase.database();
       document.querySelector('app-drawer-layout').responsiveWidth="800px";
   }
};
