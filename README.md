# 🔧 ReStore - Site Web Professionnel

Site web moderne et professionnel pour ReStore, atelier de réparation, reconditionnement et vente de téléphones, ordinateurs, tablettes et consoles de jeux à Vichy (03200).

![ReStore](https://customer-assets.emergentagent.com/job_d2a7eab4-9d0e-4e8c-953b-0296df2a175a/artifacts/cmxtow5l_Design%20sans%20titre%20%282%29.png)

## 🎯 Fonctionnalités

### Pages et Sections
- ✅ **Header** : Navigation sticky avec logo et liens smooth scroll
- ✅ **Hero Section** : Slogan accrocheur avec CTA et image professionnelle
- ✅ **Services** : 4 services présentés avec cartes élégantes
- ✅ **Pourquoi ReStore** : 4 avantages compétitifs
- ✅ **Contact** : Formulaire avec validation + Google Maps
- ✅ **Footer** : Horaires, coordonnées et liens sociaux
- ✅ **WhatsApp Button** : Bouton flottant pour contact rapide

### Design
- 🎨 **Palette moderne** : Turquoise (#0097b2, #D5F7FF, #95F4D7)
- 📱 **100% Responsive** : Mobile, tablette, desktop
- ⚡ **Animations** : Micro-interactions sur tous les éléments
- 🖼️ **Images professionnelles** : Photos de qualité d'atelier de réparation
- 🔤 **Typographie Inter** : Police moderne et lisible

### Technique
- ⚛️ **React 19** : Frontend moderne avec hooks
- 🎯 **FastAPI** : Backend Python performant
- 📦 **MongoDB** : Base de données NoSQL
- 🎭 **Shadcn UI** : Composants UI élégants
- 🎨 **Tailwind CSS** : Styling utilitaire
- 📧 **Validation frontend** : Formulaire de contact fonctionnel

## 📞 Informations ReStore

**Adresse :** 10 Rue de Paris, 03200 Vichy  
**Téléphone :** 07 82 83 08 30  
**Email :** contact@restore-phone.com  
**Instagram :** [@restore_vichy](https://www.instagram.com/restore_vichy/)  
**Facebook :** [ReStore_vichy](https://www.facebook.com/people/ReStore_vichy/61551556002725/)

**Horaires d'ouverture :**
- Lundi - Vendredi : 09:45 - 19:00
- Samedi : 10:30 - 19:00
- Dimanche : Fermé

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 16+
- Python 3.10+
- MongoDB (local ou Atlas)
- Yarn

### Installation

```bash
# Frontend
cd frontend
yarn install

# Backend
cd backend
pip install -r requirements.txt
```

### Démarrage

```bash
# Terminal 1 - Frontend (port 3000)
cd frontend
yarn start

# Terminal 2 - Backend (port 8001)
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Terminal 3 - MongoDB (si local, port 27017)
mongod
```

Ouvrez http://localhost:3000 dans votre navigateur.

## 📁 Structure du Projet

```
restore-website/
├── frontend/                 # Application React
│   ├── public/              # Fichiers statiques
│   ├── src/
│   │   ├── components/      # Composants réutilisables
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── WhatsAppButton.jsx
│   │   │   └── ui/          # Composants Shadcn UI
│   │   ├── pages/           # Pages principales
│   │   │   └── Home.jsx
│   │   ├── App.js           # Composant racine
│   │   ├── App.css          # Styles globaux
│   │   └── index.css        # Styles de base + Tailwind
│   ├── package.json
│   └── .env                 # Variables d'environnement
│
├── backend/                 # API FastAPI
│   ├── server.py           # Serveur principal
│   ├── requirements.txt    # Dépendances Python
│   └── .env               # Variables d'environnement
│
├── README.md              # Ce fichier
└── DEPLOYMENT_GUIDE.md    # Guide de déploiement détaillé
```

## 🎨 Personnalisation

### Modifier les Couleurs

Fichier : `frontend/src/index.css` et composants

```css
/* Turquoise principal */
#0097b2

/* Turquoise clair */
#D5F7FF

/* Turquoise pastel */
#95F4D7
```

### Modifier les Informations de Contact

**Footer** : `frontend/src/components/Footer.jsx`
**Contact Section** : `frontend/src/pages/Home.jsx`
**WhatsApp** : `frontend/src/components/WhatsAppButton.jsx`

### Ajouter une Nouvelle Section

1. Créez un nouveau composant dans `frontend/src/components/`
2. Importez-le dans `frontend/src/pages/Home.jsx`
3. Ajoutez un lien dans le menu de navigation

## 🔧 Configuration

### Variables d'Environnement

**Frontend** (`.env`)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend** (`.env`)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=restore
```

## 📦 Build de Production

```bash
# Frontend
cd frontend
yarn build

# Les fichiers optimisés seront dans frontend/build/
```

## 🚀 Déploiement

Consultez le fichier `DEPLOYMENT_GUIDE.md` pour :
- Déploiement sur Emergent (recommandé)
- Sauvegarde sur GitHub
- Déploiement externe (Vercel, Railway, etc.)

## 🔍 SEO

Le site est optimisé pour les mots-clés :
- Réparation téléphone Vichy
- Reconditionnement Vichy
- Atelier réparation ordinateur Vichy
- ReStore Vichy

## 🛠️ Stack Technique

- **Frontend:** React 19, Tailwind CSS, Shadcn UI, Lucide React (icons)
- **Backend:** FastAPI, Python 3.10, Motor (MongoDB async)
- **Base de données:** MongoDB
- **UI/UX:** Responsive design, animations, smooth scroll
- **Forms:** React Hook Form, validation frontend

## 📄 Licence

Code propriétaire - ReStore Vichy  
Tous droits réservés © 2025

## 🆘 Support

Pour toute question ou assistance :
- Email : contact@restore-phone.com
- Téléphone : 07 82 83 08 30
- Boutique : 10 Rue de Paris, 03200 Vichy

---

Développé avec ❤️ par [Emergent](https://emergent.sh)
