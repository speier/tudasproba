# 🧠 Tudáspróba

Interaktív kvíz gyakorló gyerekeknek – paklikba rendezett kérdésekkel, tantárgyanként.

## ✨ Jellemzők

- 📚 **Tematikus paklik** – tantárgyanként csoportosítva (történelem, stb.)
- ❓ **Többféle kérdéstípus** – személyek, dátumok, fogalmak
- 🏆 **XP & rangok** – Újonctól a Fővezérig
- 🔥 **Napi sorozat** – streak rendszer a rendszeres tanulásért
- 🎖️ **12 kitüntetés** – gyűjtögetős rendszer
- 📱 **PWA** – telepíthető mobilra
- 🌙 **Sötét mód**
- 📊 **Eredmények megosztása** – egyetlen kattintással

## ➕ Új pakli hozzáadása

1. Hozz létre egy fájlt: `src/data/decks/<tantárgy>/<id>.js`
2. Importáld a `src/data/decks/index.js`-ben

Minden pakli egy egyszerű JS fájl, semmilyen admin felület vagy adatbázis nem kell.

## 🚀 Fejlesztés

```bash
npm install
npm run dev
```

## 📦 Build & Deploy

```bash
npm run build
npx wrangler pages deploy dist --project-name tudasproba
```

## 🛠️ Tech stack

React · Vite · Tailwind CSS · Cloudflare Pages

## 📄 Licenc

MIT
