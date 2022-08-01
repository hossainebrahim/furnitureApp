import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAnnqJkJaut_IXcZDRc1ti2Uk1jj_YQEM",
  authDomain: "furniture-ecommerce-5d626.firebaseapp.com",
  projectId: "furniture-ecommerce-5d626",
  storageBucket: "furniture-ecommerce-5d626.appspot.com",
  messagingSenderId: "984987515659",
  appId: "1:984987515659:web:15200d45ac4e8b7b8b400e",
};

const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const auth = app.auth();
export { auth };
