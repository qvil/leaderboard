import { useEffect } from "react";
import firebase from "firebase";

const gmail = () => {
  useEffect(() => {
    firebase
      .auth()
      .getRedirectResult()
      .then(function(result) {
        if (result.credential) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          console.log("TCL: gmail -> token", token);
          // ...
        }
        // The signed-in user info.
        var user = result.user;
        console.log("TCL: gmail -> user", user);
      })
      .catch(function(error) {
        console.log("TCL: gmail -> error", error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }, []);
  const authentication = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  };
  return (
    <div>
      gmail
      <button onClick={authentication}>Auth</button>
    </div>
  );
};

export default gmail;
