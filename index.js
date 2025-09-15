import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase,ref,onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

const appSettings={
   databaseURL: "https://playground-117b1-default-rtdb.asia-southeast1.firebasedatabase.app/";
}

const app=intializeApp(appSettings);
const database=getDatabase(app);
const storebooks=ref(database,"books");