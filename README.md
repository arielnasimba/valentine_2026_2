# 💝 Proposition Saint-Valentin

Un projet React amusant pour demander à quelqu'un d'être votre Valentine!

## ✨ Fonctionnalités

- Bouton "Oui" qui grandit à chaque fois que le bouton "Non" est cliqué
- Bouton "Non" qui rétrécit et change de position à chaque clic
- Messages amusants qui apparaissent quand on essaie de dire non
- Animation de célébration quand "Oui" est cliqué

## 🚀 Déploiement sur Vercel

1. **Créer un compte Vercel** (si vous n'en avez pas)
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec GitHub, GitLab ou votre email

2. **Préparer le projet**
   - Créez un nouveau repository sur GitHub
   - Uploadez tous les fichiers de ce projet dans le repository

3. **Déployer**
   - Connectez-vous à Vercel
   - Cliquez sur "New Project"
   - Importez votre repository GitHub
   - Vercel détectera automatiquement que c'est un projet Next.js
   - Cliquez sur "Deploy"

4. **C'est tout!** 
   - Vercel vous donnera une URL (ex: votre-projet.vercel.app)
   - Partagez cette URL avec votre Valentine ❤️

## 📝 Personnalisation

Pour modifier le texte principal, éditez le fichier `app/valentine.jsx` :

```javascript
<h1 style={{...}}>
  Veux-tu être ma Valentine? 💝  // ← Modifiez ce texte ici
</h1>
```

Pour changer les phrases quand on clique sur "Non", modifiez le tableau `phrases` dans la fonction `getNoButtonText()`.

## 🎨 Couleurs

Les dégradés de fond sont personnalisables :
- Écran principal : `linear-gradient(135deg, #f093fb 0%, #f5576c 100%)`
- Écran de succès : `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`

## 📦 Structure du projet

```
valentine-proposal/
├── app/
│   ├── layout.js       # Layout Next.js
│   ├── page.js         # Page principale
│   └── valentine.jsx   # Composant principal
├── package.json        # Dépendances
└── README.md          # Ce fichier
```

Bonne Saint-Valentin! 💕
# valentine_2026_2
