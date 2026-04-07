# MM Auction — Setup Guide

## What you get
- `index.html` — The live auction room. All 6 players open this on their phones/laptops.
- `firebase-config.js` — Your credentials. Fill this in once.
- `README.md` — This file.

---

## Step 1: Create a Firebase project (5 min)

1. Go to **console.firebase.google.com**
2. Click **Add project** → name it "mm-auction" → click through
3. Once created, click the **web icon (</>)** to add a web app
4. Name it "mm-auction", click **Register app**
5. Copy the `firebaseConfig` object shown — you'll need it next

---

## Step 2: Enable the Realtime Database (2 min)

1. In the Firebase console left sidebar, click **Build → Realtime Database**
2. Click **Create Database**
3. Choose a location (us-central1 is fine)
4. Start in **test mode** (allows read/write for 30 days — enough for your auction)
5. Click **Enable**

---

## Step 3: Fill in your config (1 min)

Open `firebase-config.js` and replace the placeholder values with your actual Firebase config:

```js
const FIREBASE_CONFIG = {
  apiKey: "AIza...",
  authDomain: "mm-auction-xxxxx.firebaseapp.com",
  databaseURL: "https://mm-auction-xxxxx-default-rtdb.firebaseio.com",
  projectId: "mm-auction-xxxxx",
  ...
};
```

Also edit the player names if needed:
```js
const PLAYERS = ['Porter', 'Chris', 'Mush', 'Jandy', 'Slade', 'Corr'];
```

---

## Step 4: Deploy to GitHub Pages (3 min)

1. Create a new GitHub repo (e.g. `mm-auction`)
2. Upload all three files: `index.html`, `firebase-config.js`, `README.md`
3. Go to **Settings → Pages → Deploy from main branch / root**
4. Your auction URL will be: `https://YOUR_USERNAME.github.io/mm-auction/`

---

## Step 5: Run the auction

1. **One person** (the admin — first player in the PLAYERS list) opens the page and clicks **Initialize / Reset Auction**
2. Share the URL with all 6 players — everyone opens it on their phone
3. The admin (or anyone) picks a team from the **Nominate** dropdown and clicks **Go**
4. A 30-second timer starts — everyone can bid
5. Each new bid resets the timer to **10 seconds** (prevents last-second sniping)
6. When the timer hits 0, the team is automatically added to the winner's roster
7. Repeat until all teams are claimed

---

## How bidding works

- Everyone sees the same timer and current bid in real time
- You can't bid lower than the current bid
- You can't bid more than your remaining budget
- You can't outbid yourself
- Timer extends to 10 seconds on each new bid
- When timer expires → team is auto-assigned, budgets update instantly

---

## Automatic score updates

The scoreboard (`scoreboard.html` from your existing file) currently uses hardcoded game results. To make it auto-update:

**Simple option:** Keep manually updating via Claude (what you've been doing).

**Automated option:** Set up a Cloudflare Worker (free) that:
1. Fetches scores from a sports API every 60 seconds
2. Writes results to your Firebase database
3. The scoreboard reads from Firebase instead of hardcoded data

Ask Claude to build the Cloudflare Worker script if you want this for next year.

---

## Troubleshooting

**"Permission denied" errors** → Make sure your Realtime Database is in Test Mode (Firebase Console → Realtime Database → Rules → change `false` to `true` for both read/write)

**Timer is out of sync** → Firebase uses server timestamps — all clients stay in sync automatically. If it looks off, refresh the page.

**Someone bid wrong** → Admin can click "Initialize / Reset Auction" to start over (⚠ this wipes everything)
