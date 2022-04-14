// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAtPoCwNLAiy_VVv3CZypzB-j-SDlGYgZI",
      authDomain: "kwitter-4a8bb.firebaseapp.com",
      databaseURL: "https://kwitter-4a8bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-4a8bb",
      storageBucket: "kwitter-4a8bb.appspot.com",
      messagingSenderId: "267681042026",
      appId: "1:267681042026:web:c7047e76876b4bd1898413"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
