// ─────────────────────────────────────────────────────────────
//  FILL THIS IN with your Firebase project credentials
//  Get these from: Firebase Console → Project Settings → Your Apps
// ─────────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCycv-yks5KZ_gylRWtIkldp0VFCTaeFdg",
  authDomain: "mm-auction2026.firebaseapp.com",
  databaseURL: "https://mm-auction2026-default-rtdb.firebaseio.com",
  projectId: "mm-auction2026",
  storageBucket: "mm-auction2026.firebasestorage.app",
  messagingSenderId: "333764060898",
  appId: "1:333764060898:web:66cd11be1e3cca3474a0bb",
};

// ─────────────────────────────────────────────────────────────
//  Player names — edit to match your group
// ─────────────────────────────────────────────────────────────
const PLAYERS = ["Porter", "Chris", "Mush", "Jandy", "Slade", "Corr"];
const BUDGET_PER_PLAYER = 250;
const AUCTION_TIMER_SECONDS = 30;
const BID_EXTENSION_SECONDS = 10; // timer resets to this on each new bid
