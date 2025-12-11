# 📝 Liste Complète des Fichiers - Site ReStore

## 🎨 Frontend React (/app/frontend)

### Fichiers Principaux
- `src/App.js` - Composant racine de l'application
- `src/App.css` - Styles globaux et scrollbar personnalisée
- `src/index.js` - Point d'entrée de l'application
- `src/index.css` - Styles de base, Tailwind CSS et typographie Inter

### Pages (/app/frontend/src/pages)
- `Home.jsx` - Page d'accueil complète avec toutes les sections (Hero, Services, Pourquoi ReStore, Contact)

### Composants (/app/frontend/src/components)
- `Header.jsx` - En-tête avec navigation sticky et menu mobile
- `Footer.jsx` - Pied de page avec horaires et liens sociaux
- `WhatsAppButton.jsx` - Bouton flottant WhatsApp

### Composants UI Shadcn (/app/frontend/src/components/ui)
- `button.jsx` - Boutons stylisés
- `input.jsx` - Champs de saisie
- `textarea.jsx` - Zone de texte
- `card.jsx` - Cartes
- `dialog.jsx` - Modales
- `toast.jsx` - Notifications
- `sonner.jsx` - Système de toasts
- `accordion.jsx` - Accordéons
- `avatar.jsx` - Avatars
- `badge.jsx` - Badges
- `calendar.jsx` - Calendrier
- `checkbox.jsx` - Cases à cocher
- `dropdown-menu.jsx` - Menus déroulants
- `label.jsx` - Labels de formulaire
- `popover.jsx` - Popovers
- `select.jsx` - Sélecteurs
- `separator.jsx` - Séparateurs
- `switch.jsx` - Interrupteurs
- `tabs.jsx` - Onglets
- `tooltip.jsx` - Info-bulles
- ... et plus de 30 autres composants UI

### Hooks (/app/frontend/src/hooks)
- `use-toast.js` - Hook pour les notifications toast

### Configuration
- `package.json` - Dépendances et scripts npm
- `tailwind.config.js` - Configuration Tailwind CSS
- `craco.config.js` - Configuration CRACO pour personnaliser Create React App
- `.env` - Variables d'environnement (REACT_APP_BACKEND_URL)

### Build
- `public/index.html` - Template HTML
- `public/manifest.json` - Manifeste PWA
- `public/robots.txt` - Configuration SEO pour robots

## 🔧 Backend FastAPI (/app/backend)

### Fichiers Principaux
- `server.py` - Serveur FastAPI avec routes API et connexion MongoDB
- `requirements.txt` - Dépendances Python
- `.env` - Variables d'environnement (MONGO_URL, DB_NAME)

## 📚 Documentation

- `/app/README.md` - Documentation principale du projet
- `/app/DEPLOYMENT_GUIDE.md` - Guide de déploiement détaillé
- `/app/FILES_LIST.md` - Ce fichier (liste complète des fichiers)

## 🔑 Fichiers de Configuration Racine

- `/app/.gitignore` - Fichiers à ignorer par Git
- `/app/supervisord.conf` - Configuration supervisor pour dev

## 📦 Fichiers Générés (Ne pas modifier)

### Frontend
- `frontend/node_modules/` - Dépendances npm
- `frontend/build/` - Build de production
- `frontend/yarn.lock` - Versions exactes des dépendances

### Backend
- `backend/__pycache__/` - Cache Python
- `backend/.pytest_cache/` - Cache pytest

## 🎯 Fichiers Importants à Personnaliser

### Si vous voulez modifier :

**Les textes et contenus :**
- `frontend/src/pages/Home.jsx` (tout le contenu)
- `frontend/src/components/Footer.jsx` (horaires, liens)

**Les couleurs :**
- `frontend/src/index.css` (variables CSS)
- `frontend/tailwind.config.js` (thème Tailwind)

**Le numéro WhatsApp :**
- `frontend/src/components/WhatsAppButton.jsx`

**Les informations de contact :**
- `frontend/src/components/Footer.jsx`
- `frontend/src/pages/Home.jsx` (section contact)

**L'URL du backend :**
- `frontend/.env` (REACT_APP_BACKEND_URL)

**La base de données :**
- `backend/.env` (MONGO_URL, DB_NAME)

## 📂 Arborescence Complète

```
/app/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── button.jsx
│   │   │   │   ├── input.jsx
│   │   │   │   ├── textarea.jsx
│   │   │   │   ├── card.jsx
│   │   │   │   ├── toast.jsx
│   │   │   │   ├── sonner.jsx
│   │   │   │   └── ... (30+ composants)
│   │   │   │
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   ├── tailwind.config.js
│   ├── craco.config.js
│   └── yarn.lock
│
├── backend/
│   ├── server.py
│   ├── requirements.txt
│   └── .env
│
├── README.md
├── DEPLOYMENT_GUIDE.md
├── FILES_LIST.md
└── supervisord.conf
```

## 💾 Taille Approximative des Fichiers

- **Frontend (sans node_modules)** : ~500 KB
- **Frontend (avec node_modules)** : ~450 MB
- **Backend** : ~10 KB
- **Total projet** : ~450 MB

## 🔐 Fichiers Sensibles (Ne jamais partager)

- `frontend/.env` - Contient l'URL du backend
- `backend/.env` - Contient les credentials MongoDB
- `frontend/node_modules/` - Dépendances (à régénérer avec yarn install)

## ✅ Fichiers Essentiels pour le Déploiement

**Minimum requis :**
1. `frontend/src/` (tous les fichiers)
2. `frontend/public/`
3. `frontend/package.json`
4. `frontend/tailwind.config.js`
5. `frontend/craco.config.js`
6. `backend/server.py`
7. `backend/requirements.txt`

**Variables d'environnement à configurer :**
- `REACT_APP_BACKEND_URL` (frontend)
- `MONGO_URL` (backend)
- `DB_NAME` (backend)

---

**Note :** Cette liste peut évoluer si vous ajoutez de nouvelles fonctionnalités au site.
