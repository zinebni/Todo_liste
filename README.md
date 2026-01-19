# 📝 My Todo App - Application de Gestion de Tâches

[![Angular](https://img.shields.io/badge/Angular-20.3.0-red?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Mon premier projet Angular** - Une application de gestion de tâches (To-Do List) développée pour apprendre les fondamentaux d'Angular.

---

## 📋 Table des Matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Technologies Utilisées](#-technologies-utilisées)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Structure du Projet](#-structure-du-projet)
- [Concepts Angular Appris](#-concepts-angular-appris)
- [Captures d'Écran](#-captures-décran)
- [Améliorations Futures](#-améliorations-futures)

---

## 🎯 À Propos

Ce projet est ma première application développée avec **Angular 20**. Il s'agit d'une application de gestion de tâches (To-Do List) qui permet aux utilisateurs de créer, modifier, filtrer et supprimer des tâches. Les données sont persistées dans le **localStorage** du navigateur.

### Objectifs du Projet

- Apprendre les bases d'Angular (composants, directives, services)
- Comprendre le data binding et la gestion d'état
- Manipuler les formulaires avec Angular Forms
- Persister les données avec localStorage
- Implémenter une interface utilisateur interactive

---

## ✨ Fonctionnalités

### Gestion des Tâches

- ✅ **Ajouter une tâche** : Créer une nouvelle tâche avec un titre et un statut
- ✅ **Marquer comme complétée** : Toggle le statut d'une tâche (complétée/non complétée)
- ✅ **Supprimer une tâche** : Retirer une tâche individuelle de la liste
- ✅ **Supprimer les tâches complétées** : Nettoyer toutes les tâches terminées en un clic

### Filtrage et Affichage

- 🔍 **Filtrer les tâches** : Afficher toutes les tâches, seulement les actives ou les complétées
- 📊 **Statistiques en temps réel** : 
  - Nombre de tâches non complètes
  - Nombre de tâches complètes
  - Total des tâches
- 🎨 **Interface visuelle** : Indication visuelle des tâches complétées (style différent)

### Validation et UX

- ⚠️ **Validation des entrées** : 
  - Le titre ne peut pas être vide
  - Limite de 20 caractères pour le titre
  - Messages d'erreur temporaires (2 secondes)
- ⏳ **Simulation de chargement** : Loader au démarrage (2 secondes) pour simuler une API
- 💾 **Persistance automatique** : Sauvegarde dans localStorage à chaque modification
- 🔄 **Toggle d'affichage** : Bouton pour afficher/masquer la liste complète

---

## 🛠️ Technologies Utilisées

| Technologie | Version | Description |
|------------|---------|-------------|
| **Angular** | 20.3.0 | Framework principal |
| **TypeScript** | 5.x | Langage de programmation |
| **Angular Forms** | 20.3.0 | Gestion des formulaires |
| **CommonModule** | 20.3.0 | Directives Angular (*ngIf, *ngFor, etc.) |
| **RxJS** | 7.8.0 | Programmation réactive |
| **LocalStorage API** | - | Persistance des données |

### DevDependencies

- Angular CLI 20.3.2
- Jasmine & Karma (Tests unitaires)
- TypeScript Compiler
- Express (SSR support)

---

## 📦 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18.x ou supérieure) - [Télécharger](https://nodejs.org/)
- **npm** (version 9.x ou supérieure) - Installé avec Node.js
- **Angular CLI** (version 20.x) - Installer avec `npm install -g @angular/cli`

Vérifiez les installations :

```bash
node --version
npm --version
ng version
```

---

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone <URL_DU_REPOSITORY>
cd my-todo-app
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le serveur de développement

```bash
ng serve
```

ou

```bash
npm start
```

### 4. Accéder à l'application

Ouvrez votre navigateur et accédez à :

```
http://localhost:4200/
```

L'application se rechargera automatiquement à chaque modification du code source.

---

## 💻 Utilisation

### Ajouter une Tâche

1. Entrez le titre de la tâche dans le champ "Titre"
2. Cochez "Completed" si la tâche est déjà terminée (optionnel)
3. Cliquez sur le bouton **"Ajouter"**

> ⚠️ **Note** : Le titre doit contenir entre 1 et 20 caractères

### Filtrer les Tâches

Utilisez le menu déroulant pour filtrer :
- **Toutes** : Affiche toutes les tâches
- **Actives** : Affiche uniquement les tâches non complétées
- **Complétées** : Affiche uniquement les tâches terminées

### Marquer une Tâche

Cochez/décochez la case à côté de chaque tâche pour changer son statut.

### Supprimer des Tâches

- **Supprimer une tâche** : Cliquez sur le bouton "Supprimer" à côté de la tâche
- **Supprimer toutes les tâches complétées** : Cliquez sur le bouton rouge "Supprimer les tâches complétées"

---

## 📁 Structure du Projet

```
my-todo-app/
├── src/
│   ├── app/
│   │   ├── todo-list-component/
│   │   │   ├── todo-list-component.ts       # Logique du composant
│   │   │   ├── todo-list-component.html     # Template HTML
│   │   │   ├── todo-list-component.css      # Styles CSS
│   │   │   └── todo-list-component.spec.ts  # Tests unitaires
│   │   ├── app.ts                           # Composant racine
│   │   ├── app.html                         # Template principal
│   │   ├── app.css                          # Styles globaux
│   │   ├── app.config.ts                    # Configuration de l'app
│   │   └── app.routes.ts                    # Routing (si nécessaire)
│   ├── index.html                            # Page HTML principale
│   ├── main.ts                               # Point d'entrée de l'app
│   └── styles.css                            # Styles globaux
├── public/                                    # Assets statiques
├── angular.json                              # Configuration Angular
├── package.json                              # Dépendances npm
├── tsconfig.json                             # Configuration TypeScript
└── README.md                                 # Ce fichier
```

---

## 🎓 Concepts Angular Appris

Ce projet m'a permis d'apprendre et de mettre en pratique plusieurs concepts fondamentaux d'Angular :

### 1. **Composants (Components)**
- Création de composants standalone
- Communication entre composants (parent-enfant)
- Lifecycle hooks : `ngOnInit()` et `ngOnDestroy()`

```typescript
export class TodoListComponent implements OnInit, OnDestroy {
  ngOnInit(): void { /* Chargement des données */ }
  ngOnDestroy(): void { /* Nettoyage */ }
}
```

### 2. **Data Binding**
- **Interpolation** : `{{ title }}`
- **Property Binding** : `[disabled]="condition"`
- **Event Binding** : `(click)="method()"`
- **Two-Way Binding** : `[(ngModel)]="property"`

### 3. **Directives Structurelles**
- `*ngIf` : Affichage conditionnel
- `*ngFor` : Boucles et listes
- `*ngClass` : Classes CSS dynamiques
- `@if` : Nouvelle syntaxe de contrôle Angular 20

### 4. **Formulaires (Template-Driven Forms)**
- Utilisation de `FormsModule`
- Validation des formulaires
- Gestion de l'état du formulaire avec `NgForm`

### 5. **Services et Persistance**
- Utilisation de l'API localStorage du navigateur
- Sauvegarde et récupération de données JSON
- Gestion de l'état local de l'application

### 6. **Signals (Angular 20)**
- Utilisation de `signal()` pour la réactivité
- Lecture de signals avec `title()`

### 7. **Styling**
- Styles scopés au composant
- Styles conditionnels
- Styles inline dynamiques

---

## 📸 Captures d'Écran

### Interface Principale
```
┌─────────────────────────────────────┐
│        my-todo-app                  │
│  [Bascule la valeur de showTodoList]│
├─────────────────────────────────────┤
│  Mes Tâches                         │
│  ┌───────────────────────────────┐  │
│  │ Ajouter une tâche             │  │
│  │ Titre: [____________]         │  │
│  │ Completed: [ ]                │  │
│  │ [Ajouter]                     │  │
│  └───────────────────────────────┘  │
│                                     │
│  Liste des tâches                   │
│  [Toutes ▾]                         │
│  ┌───────────────────────────────┐  │
│  │ id │ nom      │ action        │  │
│  │ 1  │ Tâche 1  │ [✓] [Suppr]  │  │
│  │ 2  │ Tâche 2  │ [ ] [Suppr]  │  │
│  └───────────────────────────────┘  │
│  [Supprimer les tâches complétées]  │
│                                     │
│  Résumé des tâches                  │
│  Non complètes: 1                   │
│  Complètes: 1                       │
│  Total: 2                           │
└─────────────────────────────────────┘
```

---

## 🚧 Améliorations Futures

Voici quelques idées pour améliorer ce projet :

- [ ] Ajouter un système de catégories/tags pour les tâches
- [ ] Implémenter la modification d'une tâche existante
- [ ] Ajouter des dates d'échéance et des rappels
- [ ] Créer un backend avec une API REST (Node.js/Express)
- [ ] Ajouter l'authentification utilisateur
- [ ] Implémenter le drag & drop pour réorganiser les tâches
- [ ] Ajouter des animations avec Angular Animations
- [ ] Rendre l'application responsive (mobile-friendly)
- [ ] Ajouter un mode sombre/clair
- [ ] Exporter/Importer les tâches (JSON, CSV)
- [ ] Ajouter des tests unitaires complets
- [ ] Implémenter la recherche de tâches
- [ ] Ajouter des notifications push

---

## 🏗️ Commandes Utiles

### Développement

```bash
# Lancer le serveur de développement
ng serve

# Lancer avec un port spécifique
ng serve --port 4300

# Ouvrir automatiquement dans le navigateur
ng serve --open
```

### Build

```bash
# Build de production
ng build

# Build avec optimisation
ng build --configuration production

# Build avec analyse du bundle
ng build --stats-json
```

### Tests

```bash
# Lancer les tests unitaires
ng test

# Tests avec couverture de code
ng test --code-coverage

# Tests en mode headless
ng test --browsers=ChromeHeadless --watch=false
```

### Code Scaffolding

```bash
# Générer un nouveau composant
ng generate component nom-composant

# Générer un service
ng generate service nom-service

# Générer une directive
ng generate directive nom-directive
```

---

## 📝 Notes de Développement

### LocalStorage

Les tâches sont stockées dans le localStorage avec la clé `tasks_from_tp2`. Structure des données :

```json
[
  {
    "id": 1,
    "title": "Ma première tâche",
    "completed": false
  },
  {
    "id": 2,
    "title": "Apprendre Angular",
    "completed": true
  }
]
```

### Délai de Chargement

Un délai de 2 secondes est simulé au démarrage pour imiter une requête API :

```typescript
ngOnInit(): void {
  setTimeout(() => {
    this.tasksLoading();  
    this.isLoading = false;
  }, 2000);
}
```

---

## 🤝 Contribution

Ce projet est un TP personnel, mais les suggestions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous la licence [MIT](LICENSE).

---

## 👨‍💻 Auteur

**Votre Nom**

- 🎓 Premier projet Angular
- 📧 Email : zineb.bennanigabsi@gmail.com
- 🔗 GitHub : [@zinebni](https://github.com/zinebni)

---

## 🙏 Remerciements

- Documentation officielle d'Angular
- Communauté Angular
- Mes formateurs et collègues

---

## 📚 Ressources Utiles

- [Documentation Angular](https://angular.dev/)
- [Angular CLI](https://angular.dev/tools/cli)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [RxJS Documentation](https://rxjs.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

---
