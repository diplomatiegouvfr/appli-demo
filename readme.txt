Instructions pour mettre à jour l'applitutoriel-online fullspa
* partir de l'applitutorieljs, activer les mocks et le fullspa
* Dans hornet-app supprimer les instanciations des composants LayoutSwitcher et le dropdown de langues
* s'assurer que les mocks ne sont pas exclus des fichiers à packager : cf builder.js
* Lancer prepare-package
* copier les static de lapplituto pour les mettres dans le online
* Remplacer static-5.4.X par static pour tous les fichiers du répertoir static
* Remplacer applitutorieljs par applitutoriel-online pour tous les fichiers du répertoir static
* Ajouter /static/ au création d'arbo pour les statics img, css et js
*- copier messages.json, message-en-EN.json et message-fr-FR.json (nettoyer des commentaires) dans ./appicaturiel-online/static/resources

-demarrer un apache avec la config suivante:
Alias /applitutoriel-online "/var/www/applitutoriel-online"
<Directory "/var/www/applitutoriel-online">
    Options +FollowSymLinks
    AllowOverride All
    Order deny,allow
    Allow from all
</Directory>

RewriteEngine on
RewriteRule ^/applitutoriel-online/$ /applitutoriel-online/accueil [R]
RewriteRule ^/applitutoriel-online/[^\.]*$ /applitutoriel-online/index.html [PT]

<Location "/applitutoriel-online/service">
      Header set Access-Control-Allow-Origin "*"
      ProxyPass "http://localhost:8080/application-online/"
</Location>
