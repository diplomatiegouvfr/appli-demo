Instructions pour mettre à jour l'applitutoriel-online fullspa
* partir de l'applitutorieljs et lancer prepare-package (s'assurer que les mocks ne sont pas exclus des fichiers à packager : cf builder.js )
* copier les static/js de lapplituto avec les .map et les coller dans ./application-online/static/js
* prendre les derniers themes intranet et copier le contenu dans ./application-online/static/hornet-themes/
* supprimer dans le fichier client.js les lignes de création des eléments de changement de langue et d'agrandissement/réduction de l'écran
*- copier messages.json, message-en-EN.json et message-fr-FR.json (nettoyer des commentaires) dans ./appicaturiel-online/static/resources

-manip occassionnelles:
* prendre les css de l'appliturieljs et copier les fichier auth.css et theme.css dans ./application-online/static/css/
* mettre à jour les pages d'erreur si elles ont changé 404.html ./html/error/error_404.html et error_500.html
* mettre à jour les images si elle ont evolué.


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
