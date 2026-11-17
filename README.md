# 📖 Kisah 25 Rasul — Stories of the 25 Messengers

A free, interactive web ebook for children under 12, in **Bahasa Melayu** and **English** (switch with the BM/EN button).

## What's inside
- **25 story pages**, one for each rasul, from Nabi Adam a.s. to Nabi Muhammad ﷺ. Each page has short sentences, a big Andika font, and a 🌱 lesson.
- **Interactive surprises**: 19 pages have an activity (quiz, true/false, a flip card for du'a, tap-to-help games, or putting events in order). Every page also hides a secret ⭐.
- **Star collection** (44 stars), a contents page that marks pages a child has finished, and a **printable certificate** at the end.
- **Easy on the eyes**: warm paper colours, a night mode 🌙, three text sizes (Aa), and 🔊 read-aloud using the browser's voice.
- **No pictures of prophets or people.** Scenes use nature and object emoji only.
- 💝 **Donation button** that shows your QR code.
- 📲 **Works like an app**: install it to the home screen with its own icon. It opens full screen, works **offline** after the first visit, and the phone's back button turns back a page.

## 📲 Install on a phone or tablet
- **Android (Chrome):** tap **📲 Pasang Aplikasi / Install App** on the cover, then tap **Install**.
- **iPhone / iPad (Safari):** tap **Share ⬆️**, then **Add to Home Screen ➕**. (The Install button on the cover shows these steps.)

## Sources (authenticity policy)
Every story is told **only** from:
1. **Al-Quran**, with surah:ayat references that link to quran.com
2. **Sahih Muslim**, with hadith numbers (Fuad 'Abdul Baqi numbering) that link to sunnah.com
3. **Sahih al-Bukhari**, but only where Sahih Muslim has no matching narration (Ismail/Zamzam and Ishaq)

Popular details from weak reports or Isra'iliyyat are left out on purpose, for example Nabi Idris "inventing the pen", or long stories about Zulkifli and Ilyasa'. The pages for Zulkifli and Ilyasa' explain to the child that the Quran gives only a short mention of them.

> Recommended: ask an ustaz or ustazah to review `data.js` before you share the ebook widely.

## ➕ Add your donation QR
Your QR is at **`assets/qr-donation.jpg`**. To change it, replace that file (keep the same name). To use another file name, change `DONATE_QR` at the top of `app.js`.

## 🌐 Publish for free (GitHub Pages)
1. On GitHub, go to **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**. Pick the branch and the `/ (root)` folder, then click **Save**.
3. After about a minute, the ebook is live at `https://<username>.github.io/<repo>/`.

## Edit the stories
All the text is in `data.js`, one block per rasul, with both `ms` and `en` versions. The interface text is in `app.js` (object `T`).

Files: `index.html`, `style.css`, `app.js`, `data.js`, `manifest.webmanifest` (app name and icons), `sw.js` (offline), `icons/`, `assets/`. No build step is needed.

> **After you change any file**, open `sw.js` and bump `VERSION` (for example `k25r-v1` → `k25r-v2`). This makes installed apps pick up your changes.
