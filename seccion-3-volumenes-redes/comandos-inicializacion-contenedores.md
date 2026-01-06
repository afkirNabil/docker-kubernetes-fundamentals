
<!-- Volumes -->
docker container run `
-dp 3306:3306 `
--name world-db `
-e MARIADB_USER=example-user `
-e MARIADB_PASSWORD=user-password `
-e MARIADB_ROOT_PASSWORD=root-secret-password `
-e MARIADB_DATABASE=world-db `
--volume world-db:/var/lib/mysql:Z `
--network world-app `
mariadb:jammy

<!-- Network -->
docker container run `
--name phpmyadmin `
-e PMA_ARBITRARY=1 `
-dp 8080:80 `
--network world-app `
phpmyadmin:5.2.3-apache