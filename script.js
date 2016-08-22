(function() {
    var output = document.getElementById("data");
    var config = {
        apiKey: "AIzaSyBxuwWWDXsgE0myCR4lfRyDWmj5QT9o_Z8",
        authDomain: "oddbit-example-web.firebaseapp.com",
        databaseURL: "https://oddbit-example-web.firebaseio.com",
        storageBucket: "oddbit-example-web.appspot.com",
    };
    firebase.initializeApp(config);
    var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
    });
})();
