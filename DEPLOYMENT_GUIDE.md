# Guide de Déploiement - Site ReStore

## 📁 Structure du Projet

```
/app
├── frontend/               # Application React
│   ├── src/
│   │   ├── components/    # Composants réutilisables
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── WhatsAppButton.jsx
│   │   │   └── ui/        # Composants Shadcn UI
│   │   ├── pages/
│   │   │   └── Home.jsx   # Page principale
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── .env              # Variables d'environnement frontend
│
├── backend/              # API FastAPI
│   ├── server.py         # Serveur principal
│   ├── requirements.txt  # Dépendances Python
│   └── .env             # Variables d'environnement backend
│
└── DEPLOYMENT_GUIDE.md  # Ce fichier

```

## 🚀 Option 1 : Déploiement sur Emergent (Recommandé)

### Avantages
- ✅ Infrastructure complète gérée (Frontend + Backend + MongoDB)
- ✅ SSL/HTTPS automatique
- ✅ Déploiement en un clic
- ✅ Domaine personnalisé possible
- 💰 Coût : 50 crédits/mois

### Étapes
1. Cliquez sur le bouton **"Deploy"** dans l'interface Emergent
2. Confirmez en cliquant sur **"Deploy Now"**
3. Attendez 10-15 minutes
4. Votre site sera accessible via l'URL fournie

### Configuration Domaine Personnalisé
1. Cliquez sur **"Link domain"**
2. Entrez votre nom de domaine (ex: restore-vichy.fr)
3. Suivez les instructions DNS
4. Supprimez tous les A records existants chez votre registrar

---

## 🔗 Option 2 : Sauvegarde sur GitHub

### Prérequis
- Compte GitHub connecté (nécessite abonnement Emergent payant)

### Étapes
1. **Connecter GitHub :**
   - Profil → "Connect GitHub"
   - Autoriser Emergent

2. **Pousser le code :**
   - Cliquez sur "Save to GitHub"
   - Choisissez/créez une branche
   - Cliquez sur "PUSH TO GITHUB"

---

## 🌐 Option 3 : Déploiement Externe

### A. Frontend React (Vercel - Gratuit)

#### Installation
```bash
npm install -g vercel
```

#### Configuration
1. Dans `/app/frontend`, créez `.env.production` :
```env
REACT_APP_BACKEND_URL=https://votre-backend-url.com
```

2. Build :
```bash
cd /app/frontend
yarn build
```

3. Déploiement :
```bash
vercel --prod
```

### B. Backend FastAPI (Railway - Gratuit)

#### Installation
```bash
npm install -g railway
```

#### Configuration
1. Dans `/app/backend`, créez `Procfile` :
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

2. Créez `runtime.txt` :
```
python-3.10
```

3. Déploiement :
```bash
cd /app/backend
railway login
railway init
railway up
```

4. Ajoutez les variables d'environnement sur Railway :
```
MONGO_URL=mongodb+srv://...
DB_NAME=restore
```

### C. MongoDB Atlas (Gratuit - 512MB)

1. Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Créez un cluster gratuit (M0)
3. Configurez l'accès réseau (0.0.0.0/0 pour autoriser tout)
4. Créez un utilisateur de base de données
5. Récupérez la connection string :
```
mongodb+srv://username:password@cluster.mongodb.net/restore
```

---

## 📝 Variables d'Environnement

### Frontend (.env)
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend (.env)
```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=restore
```

---

## 🎨 Personnalisation

### Couleurs (dans le code)
- Turquoise principal : `#0097b2`
- Turquoise clair : `#D5F7FF`
- Turquoise pastel : `#95F4D7`

### Modifier les informations
- **Adresse :** `/app/frontend/src/components/Footer.jsx` et `/app/frontend/src/pages/Home.jsx`
- **Téléphone :** Même fichiers + `WhatsAppButton.jsx`
- **Email :** Footer.jsx et Home.jsx
- **Horaires :** Footer.jsx
- **Réseaux sociaux :** Footer.jsx

### Ajouter du contenu
- **Nouvelle section :** Créez un composant dans `/app/frontend/src/components/`
- **Nouvelle page :** Ajoutez dans `/app/frontend/src/pages/`

---

## 🔧 Développement Local

### Frontend
```bash
cd /app/frontend
yarn install
yarn start
# Accessible sur http://localhost:3000
```

### Backend
```bash
cd /app/backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
# API accessible sur http://localhost:8001
```

---

## 📦 Build de Production

### Frontend
```bash
cd /app/frontend
yarn build
# Fichiers dans /app/frontend/build/
```

### Backend
```bash
# Pas de build nécessaire pour FastAPI
# Assurez-vous que requirements.txt est à jour :
pip freeze > requirements.txt
```

---

## ⚡ Optimisations SEO

Le site est déjà optimisé pour :
- Réparation téléphone Vichy
- Reconditionnement Vichy
- Atelier réparation ordinateur Vichy

### Ajouter Google Analytics (optionnel)
1. Créez un compte Google Analytics
2. Ajoutez le script dans `/app/frontend/public/index.html`

### Ajouter un sitemap.xml
Créez `/app/frontend/public/sitemap.xml` :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://votre-domaine.fr/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 🆘 Support

Pour toute question :
- **Emergent Support :** Dans l'interface, appelez le support agent
- **GitHub Issues :** Si vous avez poussé sur GitHub
- **Email :** contact@restore-phone.com (pour ReStore)

---

## 📄 Licence

Code propriétaire - ReStore Vichy
Tous droits réservés © 2025

---

**Votre site ReStore est prêt à conquérir Vichy ! 🚀**
