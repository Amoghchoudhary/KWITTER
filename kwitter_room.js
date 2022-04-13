
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDuAP83kKO5PP3AF1up4x1ftf08c__zYz4",
      authDomain: "tic-tac-toe-c9e0f.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-c9e0f-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-c9e0f",
      storageBucket: "tic-tac-toe-c9e0f.appspot.com",
      messagingSenderId: "798929944736",
      appId: "1:798929944736:web:9768a481d1413e19ce49c5"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
