# 🐘 PostgreSQL + pgAdmin - Docker Compose

A multi-container setup for PostgreSQL database with pgAdmin web administration interface using Docker Compose.

## 📋 Architecture

```
┌─────────────────┐     ┌──────────────────┐
│     pgAdmin     │────▶│   PostgreSQL     │
│  (Admin Panel)  │     │   (Database)     │
│    Port 8080    │     │  Internal Only   │
└─────────────────┘     └──────────────────┘
```

## 🛠️ Services

| Service | Image | Port | Description |
|---------|-------|------|-------------|
| `db` | `postgres:15.1` | Internal | PostgreSQL 15.1 database |
| `pgAdmin` | `dpage/pgadmin4:6.17` | 8080 | Web-based PostgreSQL admin interface |

## 🚀 Usage

### Start the Application

```bash
docker compose up -d
```

### Stop the Application

```bash
docker compose down
```

### View Logs

```bash
docker compose logs -f
```

## 🌐 Access Points

- **pgAdmin**: http://localhost:8080
  - Email: `superman@google.com`
  - Password: `123456`

### Connecting to PostgreSQL from pgAdmin

1. Access pgAdmin at http://localhost:8080
2. Create a new server connection:
   - **Host**: `postgres_database` (container name)
   - **Port**: `5432`
   - **Username**: `postgres`
   - **Password**: `123456`

## 📁 Volume Configuration

This project uses **Bind Volumes** for data persistence:

| Service | Local Path | Container Path |
|---------|-----------|----------------|
| PostgreSQL | `./postgres` | `/var/lib/postgresql/data` |
| pgAdmin | `./pgadmin` | `/var/lib/pgadmin` |

> **Note**: These directories are created automatically by Docker Compose.

## 📝 Key Features

- **Bind Volumes**: Data persists in local directories for easy access
- **Service Dependencies**: pgAdmin waits for PostgreSQL to start
- **Pre-configured Credentials**: Ready-to-use authentication

## 📚 Learning Objectives

This project demonstrates:
- Docker Compose for multi-container applications
- Bind volumes vs Named volumes
- Service dependencies with `depends_on`
- Environment variable configuration for credentials
- Internal Docker networking between containers
