Laboratorio Inicio Seccion para ver diferencias entre montar una app multicontenedor con su red y su almacenamiento y montar una app multicontenedor con docker compose.
https://gist.github.com/Klerith/8cfc637868212cfb888333ecaa6080e1 

docker volume create postgres-db

docker container run `
-d `
--name postgres-db `
-e POSTGRES_PASSWORD=123456 `
-v postgres-db:/var/lib/postgresql/data `
postgres:15.1

    -v postgres-db:/var/lib/postgresql/data esta linea dice la ruta interna de la contenedor (linux) donde se almacen los datos quiero q este enlazada con el volumen que cree antes. Aunq s borre el contenedor, los datos sigen estando

docker container run `
--name pgAdmin `
-e PGADMIN_DEFAULT_PASSWORD=123456 `
-e PGADMIN_DEFAULT_EMAIL=superman@google.com `
-dp 8080:80 `
dpage/pgadmin4:6.17

    usar los comandos de poweshell en la terminal warp

Intentamos conectarnos a la bbdd de Postgres desde PGAdmin y no nos deja pq no puede resolver el nombre de la bbdd a una ip. Ya que los dos contenedores no estan en la misma red.
Por lo tanto vamos a crear la red.
Aunq le podiamos a ver asignado una red a los contenedores desde el primer momento al crear el contenedor. Pero hay veces que no se sabe.

docker network create postgres-net

docker container ls

docker network connect postgres-net 40ccf1a9b5cb
docker network connect postgres-net 12a98c067bbe