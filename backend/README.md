# 🐳 Docker Guide - Mon Projet

_Ce document explique comment containeriser mon application avec Docker, du build au déploiement._

---

## **📌 1. Structure du Projet**

Mon projet utilise deux services distincts :

- **`/backend`** : API Node.js (Dockerfile dédié)
- **`/frontend`** : Application React/Vue/Static (servie par Nginx)
- **`docker-compose.yml`** : Pour lancer l'ensemble en dev
