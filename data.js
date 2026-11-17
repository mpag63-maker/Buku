/*
 * Kisah 25 Rasul — content
 * ------------------------------------------------------------------
 * Every story is told only from:
 *   q = Al-Quran (Surah name, surah:ayat)
 *   m = Sahih Muslim (hadith numbering by Muhammad Fuad 'Abdul Baqi, as on sunnah.com)
 *   b = Sahih al-Bukhari (used only where Sahih Muslim has no matching narration)
 * Popular details that come from weak reports or Israiliyyat are left out on purpose.
 *
 * Activity types: quiz | tf (true/false) | reveal | tap | order | null
 */
window.RASUL = [
  {
    n: "Adam", ar: "آدم", scene: "🌍🌳🍎✨", color: "#cfe8c4",
    story: {
      ms: [
        "Allah mencipta Nabi Adam a.s. daripada tanah liat, lalu meniupkan roh kepadanya. Baginda manusia yang pertama.",
        "Allah mengajar Nabi Adam nama-nama semua benda. Para malaikat diperintah sujud hormat kepadanya, dan mereka taat.",
        "Tetapi Iblis enggan kerana sombong. Katanya, \"Aku lebih baik daripadanya!\"",
        "Nabi Adam dan Hawa tinggal di syurga. Mereka dilarang mendekati sebatang pokok. Syaitan membisikkan godaan, lalu mereka termakan buahnya.",
        "Mereka segera menyesal dan memohon ampun. Allah Maha Penerima taubat, lalu mengampunkan mereka."
      ],
      en: [
        "Allah created Prophet Adam (peace be upon him) from clay and breathed the soul into him. He was the very first human.",
        "Allah taught Adam the names of all things. The angels were commanded to bow in respect to him, and they obeyed.",
        "But Iblis refused because he was proud. He said, \"I am better than him!\"",
        "Adam and Hawa lived in Paradise. They were told not to go near one tree. Shaytan whispered to them, and they ate from it.",
        "They felt sorry right away and asked for forgiveness. Allah, the Accepter of repentance, forgave them."
      ]
    },
    lesson: {
      ms: "Bila buat salah, cepat-cepat minta maaf dan bertaubat. Jangan sombong seperti Iblis.",
      en: "When we make a mistake, we say sorry and repent quickly. Never be proud like Iblis."
    },
    refs: [
      { k: "q", r: "Al-Baqarah 2:30–37" }, { k: "q", r: "Al-A'raf 7:11–23" }, { k: "q", r: "Sad 38:71–76" },
      { k: "m", r: "854", d: { ms: "Hari Jumaat — hari Nabi Adam diciptakan", en: "Friday — the day Adam was created" } }
    ],
    act: {
      type: "reveal",
      q: { ms: "Apakah doa Nabi Adam dan Hawa ketika bertaubat? Ketuk kad untuk lihat!", en: "What did Adam and Hawa pray when they repented? Tap the card to see!" },
      ar: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
      a: { ms: "\"Wahai Tuhan kami, kami telah menzalimi diri kami. Jika Engkau tidak mengampuni dan merahmati kami, pasti kami termasuk orang yang rugi.\" (Al-A'raf 7:23)", en: "\"Our Lord, we have wronged ourselves. If You do not forgive us and have mercy on us, we will surely be among the losers.\" (Al-A'raf 7:23)" }
    }
  },
  {
    n: "Idris", ar: "إدريس", scene: "⭐🌌✨🌙", color: "#d9d4f2",
    story: {
      ms: [
        "Nabi Idris a.s. ialah seorang nabi yang sangat jujur dan benar dalam kata-katanya.",
        "Allah memuji baginda sebagai orang yang sabar dan soleh.",
        "Allah mengangkat Nabi Idris ke kedudukan yang sangat tinggi.",
        "Ketika peristiwa Israk Mikraj, Nabi Muhammad ﷺ bertemu Nabi Idris di langit keempat. Nabi Idris menyambut baginda dengan doa kebaikan."
      ],
      en: [
        "Prophet Idris (peace be upon him) was a prophet who was very truthful in everything he said.",
        "Allah praised him as patient and righteous.",
        "Allah raised Prophet Idris to a very high place.",
        "On the Night Journey (Isra' Mi'raj), Prophet Muhammad ﷺ met Prophet Idris in the fourth heaven. Idris welcomed him and prayed for good for him."
      ]
    },
    lesson: { ms: "Sentiasa bercakap benar. Orang yang jujur dimuliakan oleh Allah.", en: "Always tell the truth. Allah honours people who are truthful." },
    refs: [
      { k: "q", r: "Maryam 19:56–57" }, { k: "q", r: "Al-Anbiya' 21:85–86" },
      { k: "m", r: "162", d: { ms: "Israk Mikraj — bertemu Nabi Idris di langit keempat", en: "Night Journey — meeting Idris in the fourth heaven" } }
    ],
    act: {
      type: "quiz",
      q: { ms: "Di langit ke berapakah Nabi Muhammad ﷺ bertemu Nabi Idris?", en: "In which heaven did Prophet Muhammad ﷺ meet Prophet Idris?" },
      opts: [{ ms: "Pertama", en: "First" }, { ms: "Keempat", en: "Fourth" }, { ms: "Ketujuh", en: "Seventh" }],
      ans: 1
    }
  },
  {
    n: "Nuh", ar: "نوح", scene: "🚢🌊🌧️🕊️", color: "#c8e3f3",
    story: {
      ms: [
        "Nabi Nuh a.s. menyeru kaumnya supaya menyembah Allah sahaja. Baginda berdakwah selama 950 tahun!",
        "Baginda menyeru siang dan malam, secara terang dan secara rahsia. Tetapi hanya sedikit yang beriman.",
        "Allah memerintahkan Nabi Nuh membina sebuah bahtera besar. Kaumnya mengejek setiap kali lalu di situ.",
        "Kemudian banjir besar datang. Nabi Nuh membawa orang beriman dan haiwan berpasang-pasangan ke dalam bahtera.",
        "Anak baginda sendiri enggan naik dan tenggelam. Bahtera itu akhirnya berlabuh dengan selamat di Bukit Judi."
      ],
      en: [
        "Prophet Nuh (peace be upon him) called his people to worship Allah alone. He called them for 950 years!",
        "He called them day and night, openly and in private. But only a few believed.",
        "Allah commanded Nuh to build a huge ark. His people mocked him every time they walked past.",
        "Then the great flood came. Nuh brought the believers and animals in pairs into the ark.",
        "His own son refused to board and drowned. The ark finally came to rest safely on Mount Judi."
      ]
    },
    lesson: { ms: "Jangan cepat putus asa ketika membuat kebaikan, walaupun orang mengejek.", en: "Never give up doing good, even when others make fun of you." },
    refs: [
      { k: "q", r: "Hud 11:25–48" }, { k: "q", r: "Al-'Ankabut 29:14" }, { k: "q", r: "Nuh 71:1–28" },
      { k: "m", r: "194", d: { ms: "Nabi Nuh — rasul pertama yang diutus kepada penduduk bumi", en: "Nuh — the first messenger sent to the people of the earth" } }
    ],
    act: {
      type: "tap", items: ["🐘", "🦒", "🐑", "🐄", "🐪", "🐓"], target: "🚢",
      q: { ms: "Tolong Nabi Nuh! Ketuk setiap haiwan untuk naik ke bahtera.", en: "Help Prophet Nuh! Tap each animal to board the ark." },
      done: { ms: "Semua haiwan selamat di dalam bahtera! 🎉", en: "All the animals are safe on the ark! 🎉" }
    }
  },
  {
    n: "Hud", ar: "هود", scene: "🏜️🏛️🌪️💨", color: "#f3e0c2",
    story: {
      ms: [
        "Nabi Hud a.s. diutus kepada kaum 'Ad. Mereka kuat dan pandai membina bangunan tinggi.",
        "Tetapi mereka sombong dan berkata, \"Siapakah yang lebih kuat daripada kami?\"",
        "Nabi Hud menasihati mereka supaya menyembah Allah dan bersyukur. Mereka tetap ingkar.",
        "Suatu hari mereka nampak awan dan gembira, menyangka hujan akan turun. Rupa-rupanya ia angin yang sangat kencang!",
        "Angin itu bertiup selama tujuh malam dan lapan hari. Allah menyelamatkan Nabi Hud dan orang yang beriman."
      ],
      en: [
        "Prophet Hud (peace be upon him) was sent to the people of 'Ad. They were strong and built tall buildings.",
        "But they were proud and said, \"Who is stronger than us?\"",
        "Hud advised them to worship Allah and be thankful. They still refused.",
        "One day they saw a cloud and were happy, thinking rain was coming. But it was a terrible wind!",
        "The wind blew for seven nights and eight days. Allah saved Hud and the believers."
      ]
    },
    lesson: { ms: "Kekuatan datang daripada Allah. Jangan sombong dengan apa yang kita ada.", en: "All strength comes from Allah. Never be proud of what we have." },
    refs: [
      { k: "q", r: "Hud 11:50–60" }, { k: "q", r: "Fussilat 41:15" }, { k: "q", r: "Al-Ahqaf 46:21–25" }, { k: "q", r: "Al-Haqqah 69:6–8" },
      { k: "m", r: "900", d: { ms: "Kaum 'Ad dibinasakan dengan angin barat (dabur)", en: "'Ad were destroyed by the west wind (dabur)" } }
    ],
    act: {
      type: "tf",
      q: { ms: "Kaum 'Ad menyangka awan itu membawa hujan.", en: "The people of 'Ad thought the cloud would bring rain." },
      ans: true,
      why: { ms: "Betul! Tetapi ia sebenarnya angin yang kencang. (Al-Ahqaf 46:24)", en: "Correct! But it was really a fierce wind. (Al-Ahqaf 46:24)" }
    }
  },
  {
    n: "Salih", ar: "صالح", scene: "⛰️🐪💧🌄", color: "#f2d6c9",
    story: {
      ms: [
        "Nabi Salih a.s. diutus kepada kaum Thamud. Mereka memahat rumah di dalam gunung batu.",
        "Mereka meminta satu mukjizat. Allah mendatangkan seekor unta betina sebagai tanda.",
        "Nabi Salih berpesan: air perigi dikongsi — satu hari untuk unta, satu hari untuk mereka. Jangan sakiti unta itu.",
        "Tetapi orang yang paling jahat di antara mereka membunuh unta itu.",
        "Allah menurunkan azab kepada mereka, dan menyelamatkan Nabi Salih serta orang yang beriman."
      ],
      en: [
        "Prophet Salih (peace be upon him) was sent to the people of Thamud. They carved homes inside rocky mountains.",
        "They asked for a miracle. Allah sent a she-camel as a sign.",
        "Salih told them: share the well water — one day for the camel, one day for you. Do not harm her.",
        "But the most wicked man among them killed the camel.",
        "Allah punished them, and saved Salih and the believers."
      ]
    },
    lesson: { ms: "Sayangi haiwan dan tunaikan janji. Berkongsi itu indah.", en: "Be kind to animals and keep your promises. Sharing is beautiful." },
    refs: [
      { k: "q", r: "Al-A'raf 7:73–79" }, { k: "q", r: "Asy-Syu'ara' 26:141–158" }, { k: "q", r: "Asy-Syams 91:11–15" },
      { k: "m", r: "2980", d: { ms: "Nabi ﷺ melalui bekas negeri Thamud (al-Hijr)", en: "The Prophet ﷺ passing the ruins of Thamud (al-Hijr)" } }
    ],
    act: {
      type: "quiz",
      q: { ms: "Apakah mukjizat yang Allah berikan kepada kaum Thamud?", en: "What miracle did Allah send to the people of Thamud?" },
      opts: [{ ms: "🐪 Unta betina", en: "🐪 A she-camel" }, { ms: "🐋 Ikan besar", en: "🐋 A big fish" }, { ms: "🐦 Burung", en: "🐦 A bird" }],
      ans: 0
    }
  },
  {
    n: "Ibrahim", ar: "إبراهيم", scene: "🔥❄️🕋🌸", color: "#ffd9b8",
    story: {
      ms: [
        "Sejak muda, Nabi Ibrahim a.s. bertanya kepada kaumnya, \"Mengapa kamu menyembah patung yang tidak boleh mendengar?\"",
        "Ketika mereka keluar, baginda memecahkan patung-patung itu kecuali yang paling besar.",
        "Mereka marah dan bertanya siapa yang melakukannya. Nabi Ibrahim berkata, \"Tanyalah patung-patung itu, jika mereka boleh bercakap!\"",
        "Mereka mencampakkan baginda ke dalam api yang besar. Allah berfirman, \"Wahai api, jadilah sejuk dan selamat untuk Ibrahim!\"",
        "Kemudian, Nabi Ibrahim dan anaknya Nabi Ismail membina Kaabah di Makkah."
      ],
      en: [
        "Even as a young man, Prophet Ibrahim (peace be upon him) asked his people, \"Why do you worship statues that cannot hear?\"",
        "When they went out, he broke the idols, except the biggest one.",
        "They were angry and asked who did it. Ibrahim said, \"Ask them, if they can speak!\"",
        "They threw him into a huge fire. Allah said, \"O fire, be cool and safe for Ibrahim!\"",
        "Later, Ibrahim and his son Ismail built the Ka'bah in Makkah."
      ]
    },
    lesson: { ms: "Allah sentiasa melindungi orang yang bertawakal kepada-Nya.", en: "Allah always protects those who put their trust in Him." },
    refs: [
      { k: "q", r: "Al-Anbiya' 21:51–70" }, { k: "q", r: "Al-Baqarah 2:127" }, { k: "q", r: "Maryam 19:41–48" },
      { k: "m", r: "162", d: { ms: "Israk Mikraj — Nabi Ibrahim di langit ketujuh", en: "Night Journey — Ibrahim in the seventh heaven" } }
    ],
    act: {
      type: "reveal",
      q: { ms: "Apakah firman Allah kepada api? Ketuk kad!", en: "What did Allah say to the fire? Tap the card!" },
      ar: "يَا نَارُ كُونِي بَرْدًا وَسَلَامًا عَلَىٰ إِبْرَاهِيمَ",
      a: { ms: "\"Wahai api, jadilah engkau sejuk dan selamat bagi Ibrahim.\" (Al-Anbiya' 21:69) ❄️", en: "\"O fire, be coolness and safety for Ibrahim.\" (Al-Anbiya' 21:69) ❄️" }
    }
  },
  {
    n: "Lut", ar: "لوط", scene: "🌃🏘️🌠🌄", color: "#e6d3e8",
    story: {
      ms: [
        "Nabi Lut a.s. beriman kepada dakwah Nabi Ibrahim, lalu diutus kepada sebuah kaum.",
        "Kaum itu melakukan perbuatan yang sangat buruk yang tidak pernah dilakukan oleh sesiapa sebelum mereka, dan mereka menyamun orang di jalanan.",
        "Nabi Lut menasihati mereka dengan sabar, tetapi mereka mahu menghalau baginda.",
        "Malaikat datang dan berpesan: \"Keluarlah pada waktu malam bersama keluargamu, dan jangan menoleh ke belakang.\"",
        "Isteri baginda tidak beriman dan tertinggal. Negeri itu diterbalikkan, dan Nabi Lut diselamatkan."
      ],
      en: [
        "Prophet Lut (peace be upon him) believed in Ibrahim's message and was sent to a nation.",
        "That nation did very shameful deeds that no one before them had done, and they robbed people on the roads.",
        "Lut advised them patiently, but they wanted to drive him out.",
        "Angels came and told him: \"Leave at night with your family, and do not look back.\"",
        "His wife did not believe and stayed behind. The town was overturned, and Lut was saved."
      ]
    },
    lesson: { ms: "Berani menegur perkara salah dengan cara yang baik.", en: "Be brave in speaking up against wrong, in a good way." },
    refs: [
      { k: "q", r: "Hud 11:77–83" }, { k: "q", r: "Al-'Ankabut 29:26–35" }, { k: "q", r: "Al-A'raf 7:80–84" },
      { k: "m", r: "151", d: { ms: "\"Semoga Allah merahmati Lut...\"", en: "\"May Allah have mercy on Lut...\"" } }
    ],
    act: null
  },
  {
    n: "Ismail", ar: "إسماعيل", scene: "🐏🕋🏜️💧", color: "#d6ecd9",
    story: {
      ms: [
        "Nabi Ismail a.s. ialah anak Nabi Ibrahim. Baginda seorang anak yang taat dan sabar.",
        "Nabi Ibrahim bermimpi diperintah Allah untuk menyembelih Ismail. Mimpi para nabi adalah wahyu.",
        "Ismail menjawab, \"Wahai ayahku, lakukanlah apa yang diperintahkan. Insya-Allah ayah akan dapati aku orang yang sabar.\"",
        "Ketika mereka berdua berserah, Allah menggantikan Ismail dengan seekor sembelihan yang besar. Dari sinilah datangnya ibadah korban.",
        "Nabi Ismail juga membantu ayahnya membina Kaabah. Allah memuji baginda sebagai orang yang menepati janji."
      ],
      en: [
        "Prophet Ismail (peace be upon him) was the son of Ibrahim. He was obedient and patient.",
        "Ibrahim saw in a dream that Allah commanded him to sacrifice Ismail. The dreams of prophets are revelation.",
        "Ismail answered, \"O my father, do as you are commanded. You will find me, if Allah wills, among the patient.\"",
        "When they both submitted, Allah replaced Ismail with a great sacrifice. This is where the Qurban comes from.",
        "Ismail also helped his father build the Ka'bah. Allah praised him for always keeping his promises."
      ]
    },
    lesson: { ms: "Taat kepada Allah dan ibu bapa, dan sentiasa menepati janji.", en: "Obey Allah and your parents, and always keep your promises." },
    refs: [
      { k: "q", r: "As-Saffat 37:100–111" }, { k: "q", r: "Al-Baqarah 2:127–129" }, { k: "q", r: "Maryam 19:54–55" },
      { k: "b", r: "3364", d: { ms: "Kisah Hajar dan air Zamzam", en: "The story of Hajar and the water of Zamzam" } }
    ],
    act: {
      type: "quiz",
      q: { ms: "Bagaimanakah sikap Nabi Ismail ketika diuji?", en: "How did Prophet Ismail behave when he was tested?" },
      opts: [{ ms: "😠 Marah", en: "😠 Angry" }, { ms: "🏃 Lari", en: "🏃 Ran away" }, { ms: "😊 Sabar dan taat", en: "😊 Patient and obedient" }],
      ans: 2
    }
  },
  {
    n: "Ishaq", ar: "إسحاق", scene: "🌟🏡🌿💛", color: "#fbe7b5",
    story: {
      ms: [
        "Nabi Ibrahim dan isterinya Sarah sudah sangat tua dan belum mempunyai anak bersama.",
        "Suatu hari, tetamu datang. Mereka sebenarnya malaikat yang membawa berita gembira.",
        "\"Kamu akan mendapat seorang anak bernama Ishaq, dan selepas Ishaq, Ya'qub!\" Sarah sangat hairan dan gembira.",
        "Nabi Ishaq a.s. membesar menjadi seorang nabi yang soleh. Allah memberkati baginda dan Nabi Ibrahim."
      ],
      en: [
        "Prophet Ibrahim and his wife Sarah were very old and had no child together.",
        "One day, guests arrived. They were really angels bringing good news.",
        "\"You will have a son named Ishaq, and after Ishaq, Ya'qub!\" Sarah was amazed and happy.",
        "Prophet Ishaq (peace be upon him) grew up to be a righteous prophet. Allah blessed him and Ibrahim."
      ]
    },
    lesson: { ms: "Jangan berhenti berdoa. Tiada apa yang mustahil bagi Allah.", en: "Never stop making du'a. Nothing is impossible for Allah." },
    refs: [
      { k: "q", r: "Hud 11:69–73" }, { k: "q", r: "As-Saffat 37:112–113" }, { k: "q", r: "Al-An'am 6:84" },
      { k: "b", r: "3390", d: { ms: "\"Yang mulia, anak yang mulia...\" — Yusuf bin Ya'qub bin Ishaq bin Ibrahim", en: "\"The honourable, son of the honourable...\" — Yusuf son of Ya'qub son of Ishaq son of Ibrahim" } }
    ],
    act: null
  },
  {
    n: "Ya'qub", ar: "يعقوب", scene: "🌙🏕️💛🐑", color: "#f5dcc6",
    story: {
      ms: [
        "Nabi Ya'qub a.s. ialah anak Nabi Ishaq. Baginda mempunyai dua belas orang anak lelaki, termasuk Yusuf.",
        "Abang-abang Yusuf cemburu, lalu membawa Yusuf pergi dan kembali tanpanya.",
        "Nabi Ya'qub sangat sedih, tetapi berkata, \"Fasabrun jamil\" — kesabaran yang indah.",
        "Baginda menangis sehingga matanya menjadi putih, tetapi tidak pernah berputus asa daripada rahmat Allah.",
        "Sebelum wafat, baginda bertanya anak-anaknya, \"Apa yang kamu sembah selepasku?\" Mereka menjawab, \"Kami menyembah Tuhanmu, Allah yang Esa.\""
      ],
      en: [
        "Prophet Ya'qub (peace be upon him) was the son of Ishaq. He had twelve sons, including Yusuf.",
        "Yusuf's older brothers were jealous. They took Yusuf away and came back without him.",
        "Ya'qub was very sad, but said, \"Fasabrun jamil\" — beautiful patience.",
        "He cried until his eyes turned white, but he never lost hope in Allah's mercy.",
        "Before he passed away, he asked his sons, \"What will you worship after me?\" They said, \"We will worship your God, the One God.\""
      ]
    },
    lesson: { ms: "Bila sedih, bersabar dan jangan putus harapan kepada Allah.", en: "When we are sad, be patient and never lose hope in Allah." },
    refs: [ { k: "q", r: "Yusuf 12:18, 12:83–87" }, { k: "q", r: "Al-Baqarah 2:132–133" } ],
    act: {
      type: "tf",
      q: { ms: "Nabi Ya'qub berputus asa apabila kehilangan Yusuf.", en: "Prophet Ya'qub lost all hope when Yusuf was gone." },
      ans: false,
      why: { ms: "Salah! Baginda berkata: \"Jangan berputus asa daripada rahmat Allah.\" (Yusuf 12:87)", en: "False! He said: \"Do not despair of the mercy of Allah.\" (Yusuf 12:87)" }
    }
  },
  {
    n: "Yusuf", ar: "يوسف", scene: "⭐☀️🌙🌾", color: "#fff0b3",
    story: {
      ms: [
        "Semasa kecil, Nabi Yusuf a.s. bermimpi melihat sebelas bintang, matahari dan bulan sujud kepadanya.",
        "Abang-abangnya cemburu dan mencampakkannya ke dalam perigi. Baginda dijumpai lalu dijual di Mesir.",
        "Walaupun dipenjara kerana fitnah, Nabi Yusuf tetap sabar dan berdakwah di dalam penjara.",
        "Baginda mentafsir mimpi raja tentang tujuh ekor lembu gemuk dan tujuh ekor lembu kurus. Lalu baginda dilantik menjaga gudang makanan Mesir.",
        "Apabila abang-abangnya datang meminta makanan, Nabi Yusuf memaafkan mereka: \"Tiada cercaan ke atas kamu pada hari ini.\""
      ],
      en: [
        "As a child, Prophet Yusuf (peace be upon him) dreamt that eleven stars, the sun and the moon bowed to him.",
        "His brothers were jealous and threw him into a well. He was found and sold in Egypt.",
        "Even when he was put in prison unfairly, Yusuf stayed patient and taught about Allah in prison.",
        "He explained the king's dream of seven fat cows and seven thin cows. Then he was put in charge of Egypt's food stores.",
        "When his brothers came asking for food, Yusuf forgave them: \"No blame on you today.\""
      ]
    },
    lesson: { ms: "Memaafkan orang lain adalah akhlak yang sangat mulia.", en: "Forgiving others is a truly noble manner." },
    refs: [
      { k: "q", r: "Yusuf 12:4–100" },
      { k: "m", r: "162", d: { ms: "Israk Mikraj — Nabi Yusuf di langit ketiga, dikurniakan separuh kecantikan", en: "Night Journey — Yusuf in the third heaven, given half of beauty" } }
    ],
    act: {
      type: "tap", items: ["⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐", "⭐"], target: "count",
      q: { ms: "Kira bintang dalam mimpi Nabi Yusuf! Ketuk setiap bintang.", en: "Count the stars in Yusuf's dream! Tap each star." },
      done: { ms: "Sebelas bintang! ⭐ Ditambah matahari ☀️ dan bulan 🌙. (Yusuf 12:4)", en: "Eleven stars! ⭐ Plus the sun ☀️ and the moon 🌙. (Yusuf 12:4)" }
    }
  },
  {
    n: "Ayyub", ar: "أيوب", scene: "💧🌱🌤️🌿", color: "#d4eee6",
    story: {
      ms: [
        "Nabi Ayyub a.s. diuji oleh Allah dengan penyakit dan kehilangan keluarga serta harta.",
        "Walaupun begitu, baginda tetap sabar dan terus mengingati Allah.",
        "Baginda berdoa dengan lembut, \"Sesungguhnya aku ditimpa kesusahan, dan Engkaulah yang paling Penyayang.\"",
        "Allah berfirman, \"Hentakkan kakimu!\" Lalu keluar air yang sejuk untuk mandi dan minum, dan baginda sembuh.",
        "Allah mengembalikan keluarganya, malah lebih ramai lagi. Allah memuji baginda: \"Sebaik-baik hamba!\""
      ],
      en: [
        "Prophet Ayyub (peace be upon him) was tested by Allah with illness and the loss of his family and wealth.",
        "Even so, he stayed patient and kept remembering Allah.",
        "He prayed gently, \"Harm has touched me, and You are the Most Merciful of the merciful.\"",
        "Allah said, \"Strike the ground with your foot!\" Cool water came out to wash and drink, and he was healed.",
        "Allah gave his family back, and even more. Allah praised him: \"What an excellent servant!\""
      ]
    },
    lesson: { ms: "Bila sakit atau susah, bersabar dan berdoa kepada Allah.", en: "When we are sick or in trouble, be patient and make du'a to Allah." },
    refs: [ { k: "q", r: "Al-Anbiya' 21:83–84" }, { k: "q", r: "Sad 38:41–44" } ],
    act: {
      type: "reveal",
      q: { ms: "Apakah doa Nabi Ayyub? Ketuk kad!", en: "What was Prophet Ayyub's du'a? Tap the card!" },
      ar: "أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
      a: { ms: "\"Sesungguhnya aku ditimpa kesusahan, dan Engkaulah Yang Maha Penyayang di antara semua yang penyayang.\" (Al-Anbiya' 21:83)", en: "\"Harm has touched me, and You are the Most Merciful of the merciful.\" (Al-Anbiya' 21:83)" }
    }
  },
  {
    n: "Syu'aib", ar: "شعيب", scene: "⚖️🏪🌳🍇", color: "#e2ecc0",
    story: {
      ms: [
        "Nabi Syu'aib a.s. diutus kepada penduduk Madyan. Mereka ialah peniaga.",
        "Tetapi mereka suka menipu dalam sukatan dan timbangan — mereka mengurangkan barang yang dijual.",
        "Nabi Syu'aib berpesan, \"Sempurnakanlah sukatan dan timbangan, dan jangan merugikan orang lain.\"",
        "Mereka mengejek baginda dan tetap menipu.",
        "Akhirnya Allah menurunkan gempa sebagai azab, dan menyelamatkan Nabi Syu'aib serta orang yang beriman."
      ],
      en: [
        "Prophet Shu'aib (peace be upon him) was sent to the people of Madyan. They were traders.",
        "But they cheated with measures and scales — giving people less than they paid for.",
        "Shu'aib told them, \"Give full measure and weight, and do not cheat people of their things.\"",
        "They mocked him and kept on cheating.",
        "In the end Allah sent an earthquake as punishment, and saved Shu'aib and the believers."
      ]
    },
    lesson: { ms: "Sentiasa jujur dan adil, walaupun dalam perkara kecil.", en: "Always be honest and fair, even in small things." },
    refs: [ { k: "q", r: "Al-A'raf 7:85–93" }, { k: "q", r: "Hud 11:84–95" }, { k: "q", r: "Asy-Syu'ara' 26:176–191" } ],
    act: {
      type: "quiz",
      q: { ms: "Ali membayar untuk 1 kg epal. Apakah yang adil?", en: "Ali paid for 1 kg of apples. What is fair?" },
      opts: [{ ms: "⚖️ Beri tepat 1 kg", en: "⚖️ Give exactly 1 kg" }, { ms: "🤫 Beri ½ kg sahaja", en: "🤫 Give only ½ kg" }, { ms: "🍂 Beri epal busuk", en: "🍂 Give rotten apples" }],
      ans: 0
    }
  },
  {
    n: "Musa", ar: "موسى", scene: "🌊🐍🔥⛰️", color: "#c9def5",
    story: {
      ms: [
        "Firaun memerintah Mesir dengan zalim. Allah mengilhamkan ibu Nabi Musa a.s. supaya meletakkan bayinya dalam peti dan menghanyutkannya di sungai.",
        "Bayi Musa dijumpai keluarga Firaun. Dengan izin Allah, baginda dikembalikan kepada ibunya untuk disusukan.",
        "Apabila dewasa, Allah berkata-kata dengan Nabi Musa di Bukit Tur. Tongkatnya menjadi ular, dan tangannya bersinar putih.",
        "Nabi Musa dan Nabi Harun pergi kepada Firaun. Ahli-ahli sihir Firaun kalah, lalu mereka beriman kepada Allah.",
        "Firaun mengejar Bani Israil. Nabi Musa memukul laut dengan tongkat, laut terbelah, dan mereka selamat. Firaun tenggelam."
      ],
      en: [
        "Fir'aun ruled Egypt cruelly. Allah inspired the mother of Prophet Musa (peace be upon him) to place her baby in a chest and set it on the river.",
        "Baby Musa was found by Fir'aun's family. By Allah's will, he was returned to his own mother to be nursed.",
        "When he grew up, Allah spoke to Musa at Mount Tur. His staff became a snake, and his hand shone white.",
        "Musa and Harun went to Fir'aun. Fir'aun's magicians were beaten, and they believed in Allah.",
        "Fir'aun chased the Children of Israel. Musa struck the sea with his staff, the sea split, and they were saved. Fir'aun drowned."
      ]
    },
    lesson: { ms: "Allah sentiasa bersama orang yang benar, walaupun musuhnya kuat.", en: "Allah is always with those who are right, even when the enemy is strong." },
    refs: [
      { k: "q", r: "Al-Qasas 28:7–35" }, { k: "q", r: "Taha 20:9–79" }, { k: "q", r: "Asy-Syu'ara' 26:52–67" },
      { k: "m", r: "1130", d: { ms: "Puasa 'Asyura — hari Allah menyelamatkan Nabi Musa", en: "Fasting on 'Ashura — the day Allah saved Musa" } }
    ],
    act: {
      type: "order",
      q: { ms: "Susun kisah Nabi Musa mengikut urutan! Ketuk 1, 2, 3.", en: "Put Musa's story in order! Tap 1, 2, 3." },
      steps: [
        { ms: "🧺 Bayi dihanyutkan di sungai", en: "🧺 Baby placed on the river" },
        { ms: "⛰️ Allah berkata-kata di Bukit Tur", en: "⛰️ Allah speaks at Mount Tur" },
        { ms: "🌊 Laut terbelah", en: "🌊 The sea splits" }
      ]
    }
  },
  {
    n: "Harun", ar: "هارون", scene: "🤝💬🌄⭐", color: "#ead9f5",
    story: {
      ms: [
        "Nabi Harun a.s. ialah abang Nabi Musa.",
        "Nabi Musa berdoa, \"Ya Allah, jadikanlah saudaraku Harun sebagai pembantuku. Dia lebih fasih bercakap daripadaku.\" Allah mengabulkan doa itu.",
        "Allah berpesan kepada mereka berdua: \"Berkatalah kepada Firaun dengan kata-kata yang lembut, mudah-mudahan dia ingat atau takut.\"",
        "Nabi Harun menjaga kaumnya ketika Nabi Musa pergi ke Bukit Tur. Baginda menasihati mereka supaya mengikut perintah Allah.",
        "Ketika Israk Mikraj, Nabi Muhammad ﷺ bertemu Nabi Harun di langit kelima."
      ],
      en: [
        "Prophet Harun (peace be upon him) was the older brother of Prophet Musa.",
        "Musa prayed, \"O Allah, make my brother Harun my helper. He speaks more clearly than me.\" Allah answered his prayer.",
        "Allah told them both: \"Speak to Fir'aun with gentle words, so perhaps he will remember or fear.\"",
        "Harun looked after the people when Musa went to Mount Tur. He reminded them to follow Allah's command.",
        "On the Night Journey, Prophet Muhammad ﷺ met Harun in the fifth heaven."
      ]
    },
    lesson: { ms: "Tolong-menolong sesama adik-beradik, dan bercakap dengan lembut.", en: "Help your brothers and sisters, and always speak gently." },
    refs: [
      { k: "q", r: "Taha 20:29–36, 20:43–44, 20:90" }, { k: "q", r: "Al-Qasas 28:34–35" },
      { k: "m", r: "162", d: { ms: "Israk Mikraj — Nabi Harun di langit kelima", en: "Night Journey — Harun in the fifth heaven" } }
    ],
    act: null
  },
  {
    n: "Zulkifli", ar: "ذو الكفل", scene: "📿🌿🕊️⭐", color: "#d9eccd",
    story: {
      ms: [
        "Al-Quran menyebut nama Nabi Zulkifli a.s. sebanyak dua kali.",
        "Allah memuji baginda sebagai salah seorang yang sabar.",
        "Allah juga memasukkan baginda ke dalam rahmat-Nya, dan menyebut baginda antara orang-orang yang terbaik.",
        "💡 Tahukah kamu? Al-Quran tidak menceritakan kisah panjang tentang Nabi Zulkifli. Banyak cerita yang tersebar tentang baginda tidak datang daripada sumber yang sahih. Jadi kita hanya percaya apa yang Allah beritahu!"
      ],
      en: [
        "The Quran mentions the name of Prophet Dhul-Kifl (peace be upon him) two times.",
        "Allah praises him as one of the patient.",
        "Allah also brought him into His mercy, and named him among the very best.",
        "💡 Did you know? The Quran does not tell a long story about Dhul-Kifl. Many stories people tell about him do not come from authentic sources. So we only believe what Allah tells us!"
      ]
    },
    lesson: { ms: "Belajar dari sumber yang sahih, dan jadilah orang yang sabar.", en: "Learn from authentic sources, and be someone who is patient." },
    refs: [ { k: "q", r: "Al-Anbiya' 21:85–86" }, { k: "q", r: "Sad 38:48" } ],
    act: null
  },
  {
    n: "Daud", ar: "داود", scene: "🛡️⛰️🐦📜", color: "#f0dfc8",
    story: {
      ms: [
        "Semasa muda, Nabi Daud a.s. berada dalam tentera Talut. Dengan izin Allah, baginda mengalahkan Jalut yang gagah.",
        "Allah mengurniakan baginda kerajaan, hikmah, dan kitab Zabur.",
        "Bila Nabi Daud bertasbih, gunung-ganang dan burung-burung turut bertasbih bersamanya.",
        "Allah melembutkan besi untuk baginda, lalu baginda membuat baju besi untuk melindungi manusia.",
        "Nabi ﷺ bersabda, puasa yang paling disukai Allah ialah puasa Nabi Daud — sehari berpuasa, sehari tidak."
      ],
      en: [
        "As a young man, Prophet Dawud (peace be upon him) was in Talut's army. By Allah's will, he defeated the mighty Jalut.",
        "Allah gave him a kingdom, wisdom, and the holy book Zabur (Psalms).",
        "When Dawud glorified Allah, the mountains and birds glorified Allah with him.",
        "Allah made iron soft for him, so he made coats of armour to protect people.",
        "The Prophet ﷺ said the fasting most loved by Allah is the fasting of Dawud — fasting one day and not the next."
      ]
    },
    lesson: { ms: "Rajin bekerja dan banyakkan zikir kepada Allah.", en: "Work hard and remember Allah often." },
    refs: [
      { k: "q", r: "Al-Baqarah 2:251" }, { k: "q", r: "Saba' 34:10–11" }, { k: "q", r: "Sad 38:17–20" }, { k: "q", r: "An-Nisa' 4:163" },
      { k: "m", r: "1159", d: { ms: "Puasa dan solat Nabi Daud paling disukai Allah", en: "The fasting and prayer of Dawud are most loved by Allah" } }
    ],
    act: {
      type: "quiz",
      q: { ms: "Apakah kitab yang diturunkan kepada Nabi Daud?", en: "Which holy book was given to Prophet Dawud?" },
      opts: [{ ms: "Taurat", en: "Tawrah" }, { ms: "Zabur", en: "Zabur (Psalms)" }, { ms: "Injil", en: "Injil (Gospel)" }],
      ans: 1
    }
  },
  {
    n: "Sulaiman", ar: "سليمان", scene: "🐜🐦👑💨", color: "#f7e4b0",
    story: {
      ms: [
        "Nabi Sulaiman a.s. ialah anak Nabi Daud. Allah mengajarnya bahasa burung, dan angin tunduk kepadanya.",
        "Suatu hari, tentera baginda melalui sebuah lembah semut. Seekor semut berkata, \"Wahai semut-semut, masuklah ke rumah kamu supaya kamu tidak terpijak!\"",
        "Nabi Sulaiman tersenyum mendengarnya dan berdoa, \"Ya Allah, jadikanlah aku orang yang bersyukur.\"",
        "Burung hud-hud membawa berita tentang Ratu Saba' yang menyembah matahari. Akhirnya ratu itu beriman kepada Allah.",
        "Nabi ﷺ juga menceritakan bagaimana Nabi Sulaiman bijak menghakimi pertelingkahan dua orang ibu, sehingga ibu yang benar dapat dikenali."
      ],
      en: [
        "Prophet Sulaiman (peace be upon him) was the son of Dawud. Allah taught him the language of birds, and the wind obeyed him.",
        "One day, his army passed a valley of ants. An ant said, \"O ants, go into your homes so you are not crushed!\"",
        "Sulaiman smiled when he heard it and prayed, \"O Allah, make me thankful.\"",
        "The hoopoe bird brought news of the Queen of Saba' who worshipped the sun. In the end, the queen believed in Allah.",
        "The Prophet ﷺ also told how Sulaiman wisely judged between two mothers, so that the true mother was found."
      ]
    },
    lesson: { ms: "Bersyukur atas nikmat Allah, dan sayangi makhluk yang kecil.", en: "Be thankful for Allah's gifts, and care for even the smallest creatures." },
    refs: [
      { k: "q", r: "An-Naml 27:15–44" }, { k: "q", r: "Al-Anbiya' 21:78–82" },
      { k: "m", r: "1720", d: { ms: "Penghakiman Nabi Sulaiman antara dua orang ibu", en: "Sulaiman's judgement between two mothers" } }
    ],
    act: {
      type: "tap", items: ["🐜", "🐜", "🐜", "🐜", "🐜"], target: "🕳️",
      q: { ms: "Bantu semut-semut pulang ke rumah! Ketuk setiap semut.", en: "Help the ants get home! Tap each ant." },
      done: { ms: "Semua semut selamat! Nabi Sulaiman tersenyum. 😊 (An-Naml 27:18–19)", en: "All the ants are safe! Sulaiman smiled. 😊 (An-Naml 27:18–19)" }
    }
  },
  {
    n: "Ilyas", ar: "إلياس", scene: "🏔️🗿❌🌄", color: "#e3dccf",
    story: {
      ms: [
        "Nabi Ilyas a.s. ialah salah seorang rasul yang diutus Allah.",
        "Kaumnya menyembah sebuah berhala bernama Ba'l dan meninggalkan Allah, Pencipta yang terbaik.",
        "Nabi Ilyas bertanya, \"Mengapa kamu tidak bertakwa? Allah ialah Tuhan kamu dan Tuhan nenek moyang kamu.\"",
        "Kebanyakan mereka mendustakan baginda, kecuali hamba-hamba Allah yang ikhlas.",
        "Allah memuliakan baginda: \"Salam sejahtera ke atas Ilyas!\""
      ],
      en: [
        "Prophet Ilyas (peace be upon him) was one of the messengers sent by Allah.",
        "His people worshipped an idol called Ba'l and left Allah, the Best of creators.",
        "Ilyas asked, \"Will you not fear Allah? Allah is your Lord and the Lord of your forefathers.\"",
        "Most of them called him a liar, except Allah's sincere servants.",
        "Allah honoured him: \"Peace be upon Ilyas!\""
      ]
    },
    lesson: { ms: "Hanya Allah yang layak disembah.", en: "Only Allah deserves to be worshipped." },
    refs: [ { k: "q", r: "As-Saffat 37:123–132" }, { k: "q", r: "Al-An'am 6:85" } ],
    act: {
      type: "tf",
      q: { ms: "Kaum Nabi Ilyas menyembah berhala bernama Ba'l.", en: "The people of Ilyas worshipped an idol called Ba'l." },
      ans: true,
      why: { ms: "Betul! (As-Saffat 37:125)", en: "Correct! (As-Saffat 37:125)" }
    }
  },
  {
    n: "Ilyasa'", ar: "اليسع", scene: "🌾🕊️✨🌿", color: "#dcefd0",
    story: {
      ms: [
        "Nabi Ilyasa' a.s. disebut dua kali di dalam al-Quran.",
        "Allah menyebut baginda bersama Nabi Ismail, Nabi Yunus dan Nabi Lut, dan berfirman bahawa mereka semua dilebihkan di atas umat pada zaman mereka.",
        "Allah juga menyebut baginda antara orang-orang yang terbaik.",
        "💡 Al-Quran tidak menceritakan kisah panjang tentang Nabi Ilyasa'. Kita tetap beriman dan menghormati baginda sebagai nabi pilihan Allah."
      ],
      en: [
        "Prophet Al-Yasa' (peace be upon him) is mentioned two times in the Quran.",
        "Allah names him together with Ismail, Yunus and Lut, and says that all of them were favoured above the people of their time.",
        "Allah also names him among the very best.",
        "💡 The Quran does not tell a long story about Al-Yasa'. We still believe in him and respect him as a prophet chosen by Allah."
      ]
    },
    lesson: { ms: "Kita beriman kepada semua nabi tanpa membeza-bezakan mereka.", en: "We believe in all the prophets without making a difference between them." },
    refs: [ { k: "q", r: "Al-An'am 6:86" }, { k: "q", r: "Sad 38:48" }, { k: "q", r: "Al-Baqarah 2:285" } ],
    act: null
  },
  {
    n: "Yunus", ar: "يونس", scene: "🐋🌊⛵🌿", color: "#c4e4ec",
    story: {
      ms: [
        "Nabi Yunus a.s. berdakwah kepada kaumnya, tetapi mereka tidak mahu mendengar.",
        "Baginda pergi meninggalkan mereka dalam keadaan marah, sebelum diizinkan Allah, lalu menaiki sebuah kapal.",
        "Di tengah laut, baginda dicampakkan ke laut dan ditelan oleh seekor ikan yang besar.",
        "Dalam gelap di perut ikan, baginda berdoa: \"Tiada Tuhan selain Engkau, Maha Suci Engkau, sesungguhnya aku termasuk orang yang zalim.\"",
        "Allah menyelamatkan baginda ke pantai dan menumbuhkan pokok labu. Kaumnya pula beriman — lebih seratus ribu orang!"
      ],
      en: [
        "Prophet Yunus (peace be upon him) called his people to Allah, but they would not listen.",
        "He left them in anger, before Allah allowed him to, and boarded a ship.",
        "Out at sea, he was thrown overboard and swallowed by a big fish.",
        "In the darkness inside the fish, he prayed: \"There is no god but You, glory be to You, I was among the wrongdoers.\"",
        "Allah saved him onto the shore and grew a gourd plant for him. His people believed — more than a hundred thousand of them!"
      ]
    },
    lesson: { ms: "Di mana-mana pun kita berada, Allah mendengar doa kita.", en: "Wherever we are, Allah hears our du'a." },
    refs: [
      { k: "q", r: "Al-Anbiya' 21:87–88" }, { k: "q", r: "As-Saffat 37:139–148" }, { k: "q", r: "Yunus 10:98" },
      { k: "m", r: "2376", d: { ms: "\"Janganlah seseorang berkata aku lebih baik daripada Yunus bin Matta\"", en: "\"No one should say I am better than Yunus son of Matta\"" } }
    ],
    act: {
      type: "reveal",
      q: { ms: "Hafal doa Nabi Yunus! Ketuk kad.", en: "Learn Prophet Yunus's du'a! Tap the card." },
      ar: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
      a: { ms: "\"Tiada Tuhan selain Engkau, Maha Suci Engkau, sesungguhnya aku termasuk orang yang zalim.\" (Al-Anbiya' 21:87) 🐋", en: "\"There is no god but You, glory be to You, I was among the wrongdoers.\" (Al-Anbiya' 21:87) 🐋" }
    }
  },
  {
    n: "Zakaria", ar: "زكريا", scene: "🪚🕌🍇🤲", color: "#f1e0cf",
    story: {
      ms: [
        "Nabi Zakaria a.s. menjaga Maryam di tempat ibadahnya. Setiap kali masuk, baginda menemui makanan di sisi Maryam.",
        "\"Dari mana datangnya ini?\" tanya baginda. Maryam menjawab, \"Ia daripada Allah.\"",
        "Nabi Zakaria sudah tua dan belum mempunyai anak. Baginda berdoa dengan suara yang perlahan, memohon seorang anak yang soleh.",
        "Allah memberi berita gembira: seorang anak bernama Yahya! Sebagai tanda, baginda tidak bercakap dengan manusia selama tiga malam.",
        "Nabi ﷺ memberitahu bahawa Nabi Zakaria bekerja sebagai tukang kayu."
      ],
      en: [
        "Prophet Zakariyya (peace be upon him) looked after Maryam in her place of worship. Every time he came in, he found food with her.",
        "\"Where did this come from?\" he asked. Maryam answered, \"It is from Allah.\"",
        "Zakariyya was old and had no children. He prayed in a quiet voice for a righteous child.",
        "Allah gave him good news: a son named Yahya! As a sign, he did not speak to people for three nights.",
        "The Prophet ﷺ told us that Zakariyya worked as a carpenter."
      ]
    },
    lesson: { ms: "Berdoalah dengan penuh harapan, dan bekerja dengan tangan sendiri itu mulia.", en: "Make du'a with full hope — and earning with your own hands is honourable." },
    refs: [
      { k: "q", r: "Ali 'Imran 3:37–41" }, { k: "q", r: "Maryam 19:2–11" },
      { k: "m", r: "2379", d: { ms: "Nabi Zakaria seorang tukang kayu", en: "Zakariyya was a carpenter" } }
    ],
    act: {
      type: "tf",
      q: { ms: "Nabi Zakaria bekerja sebagai tukang kayu.", en: "Prophet Zakariyya worked as a carpenter." },
      ans: true,
      why: { ms: "Betul! 🪚 (Sahih Muslim 2379)", en: "Correct! 🪚 (Sahih Muslim 2379)" }
    }
  },
  {
    n: "Yahya", ar: "يحيى", scene: "📖🌱💚🕊️", color: "#d3ecd4",
    story: {
      ms: [
        "Nabi Yahya a.s. ialah anak Nabi Zakaria. Allah sendiri memberikan namanya — tiada orang sebelumnya yang bernama Yahya.",
        "Allah berfirman, \"Wahai Yahya, peganglah kitab itu dengan bersungguh-sungguh.\" Baginda diberi hikmah sejak kecil.",
        "Baginda penyayang, bersih hatinya, dan bertakwa.",
        "Baginda sangat berbuat baik kepada ibu bapanya, dan tidak sombong atau derhaka.",
        "Ketika Israk Mikraj, Nabi ﷺ bertemu Nabi Yahya bersama sepupunya, Nabi Isa, di langit kedua."
      ],
      en: [
        "Prophet Yahya (peace be upon him) was the son of Zakariyya. Allah Himself chose his name — no one before him was called Yahya.",
        "Allah said, \"O Yahya, hold on to the Book with strength.\" He was given wisdom while still a child.",
        "He was kind, pure-hearted and mindful of Allah.",
        "He was very good to his parents, and was never proud or disobedient.",
        "On the Night Journey, the Prophet ﷺ met Yahya with his cousin Isa in the second heaven."
      ]
    },
    lesson: { ms: "Berbuat baiklah kepada ibu bapa dan rajin belajar sejak kecil.", en: "Be good to your parents and love learning from a young age." },
    refs: [
      { k: "q", r: "Maryam 19:7, 19:12–15" }, { k: "q", r: "Ali 'Imran 3:39" },
      { k: "m", r: "162", d: { ms: "Israk Mikraj — Nabi Yahya dan Nabi Isa di langit kedua", en: "Night Journey — Yahya and Isa in the second heaven" } }
    ],
    act: null
  },
  {
    n: "Isa", ar: "عيسى", scene: "🕊️🌴⭐📖", color: "#d6e6f5",
    story: {
      ms: [
        "Malaikat Jibril datang kepada Maryam membawa berita gembira: dia akan mendapat seorang anak lelaki yang suci.",
        "Nabi Isa a.s. dilahirkan tanpa bapa, dengan kekuasaan Allah — sama seperti Nabi Adam yang dicipta tanpa ibu dan bapa.",
        "Ketika masih bayi dalam buaian, baginda bercakap: \"Sesungguhnya aku hamba Allah. Dia memberiku Kitab dan menjadikan aku nabi.\"",
        "Dengan izin Allah, baginda membentuk burung daripada tanah yang lalu terbang, dan menyembuhkan orang buta dan orang sakit. Allah menurunkan kitab Injil kepadanya.",
        "Musuh ingin membunuh baginda, tetapi mereka tidak membunuhnya dan tidak menyalibnya. Allah mengangkat baginda kepada-Nya."
      ],
      en: [
        "The angel Jibril came to Maryam with good news: she would have a pure son.",
        "Prophet Isa (peace be upon him) was born without a father, by the power of Allah — just as Adam was created without a mother or father.",
        "While still a baby in the cradle, he spoke: \"I am the servant of Allah. He has given me the Book and made me a prophet.\"",
        "By Allah's permission, he shaped a bird from clay that flew, and healed the blind and the sick. Allah gave him the Injil.",
        "Enemies wanted to kill him, but they did not kill him nor crucify him. Allah raised him up to Himself."
      ]
    },
    lesson: { ms: "Semua mukjizat berlaku dengan izin Allah. Nabi Isa ialah hamba dan rasul Allah.", en: "Every miracle happens by Allah's permission. Isa is Allah's servant and messenger." },
    refs: [
      { k: "q", r: "Maryam 19:16–36" }, { k: "q", r: "Ali 'Imran 3:45–59" }, { k: "q", r: "Al-Ma'idah 5:110" }, { k: "q", r: "An-Nisa' 4:157–158" },
      { k: "m", r: "2365", d: { ms: "\"Aku orang yang paling dekat dengan Isa bin Maryam\"", en: "\"I am the closest of people to Isa son of Maryam\"" } }
    ],
    act: {
      type: "quiz",
      q: { ms: "Apakah kata-kata pertama bayi Nabi Isa?", en: "What did baby Isa say first?" },
      opts: [{ ms: "\"Aku hamba Allah\"", en: "\"I am the servant of Allah\"" }, { ms: "\"Aku lapar\"", en: "\"I am hungry\"" }, { ms: "\"Aku raja\"", en: "\"I am a king\"" }],
      ans: 0
    }
  },
  {
    n: "Muhammad ﷺ", ar: "محمد ﷺ", scene: "🕋📖🌙⛰️", color: "#cdeccf", last: true,
    story: {
      ms: [
        "Nabi Muhammad ﷺ dilahirkan di Makkah. Kaumnya mengenali baginda sebagai orang yang tidak pernah berbohong.",
        "Di Gua Hira', Malaikat Jibril datang membawa wahyu pertama: \"Iqra'!\" — Bacalah!",
        "Baginda menyeru manusia menyembah Allah yang Esa, dengan sabar dan penuh kasih sayang, walaupun disakiti.",
        "Allah mengutus baginda sebagai rahmat untuk seluruh alam.",
        "Baginda ialah nabi yang terakhir. Baginda bersabda, para nabi seperti sebuah bangunan yang indah, dan bagindalah batu bata terakhir yang melengkapkannya."
      ],
      en: [
        "Prophet Muhammad ﷺ was born in Makkah. His people knew him as someone who never lied.",
        "In the Cave of Hira', the angel Jibril brought the first revelation: \"Iqra'!\" — Read!",
        "He called people to worship the One God, with patience and great kindness, even when people hurt him.",
        "Allah sent him as a mercy to all the worlds.",
        "He is the last prophet. He said the prophets are like a beautiful building, and he is the final brick that completes it."
      ]
    },
    lesson: { ms: "Ikutlah sunnah Nabi ﷺ dan banyakkan selawat ke atas baginda.", en: "Follow the Sunnah of the Prophet ﷺ and send many salawat upon him." },
    refs: [
      { k: "q", r: "Al-'Alaq 96:1–5" }, { k: "q", r: "Al-Ahzab 33:40" }, { k: "q", r: "Al-Anbiya' 21:107" },
      { k: "m", r: "160", d: { ms: "Permulaan wahyu di Gua Hira'", en: "The beginning of revelation in Hira'" } },
      { k: "m", r: "208", d: { ms: "\"Kami tidak pernah mendapati kamu berdusta\"", en: "\"We have never known you to lie\"" } },
      { k: "m", r: "2286", d: { ms: "Perumpamaan bangunan dan batu bata terakhir", en: "The parable of the building and the final brick" } }
    ],
    act: {
      type: "quiz",
      q: { ms: "Apakah perkataan pertama wahyu yang diturunkan?", en: "What was the first word of revelation?" },
      opts: [{ ms: "📖 Iqra' (Bacalah)", en: "📖 Iqra' (Read)" }, { ms: "🌙 Qul (Katakanlah)", en: "🌙 Qul (Say)" }, { ms: "🤲 Rabbana", en: "🤲 Rabbana" }],
      ans: 0
    }
  }
];
