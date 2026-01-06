# 🐱 Pokemon App - Multi-Container Application

A multi-container application demonstrating Docker Compose with MongoDB, Mongo Express, and a NestJS Pokemon API.

## 📋 Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│    poke-app     │────▶│     MongoDB      │◀────│  Mongo Express  │
│  (NestJS API)   │     │    (Database)    │     │  (Admin Panel)  │
│    Port 3000    │     │  Internal Only   │     │    Port 8080    │
└─────────────────┘     └──────────────────┘     └─────────────────┘
```

## 🛠️ Services

| Service | Image | Port | Description |
|---------|-------|------|-------------|
| `db` | `mongo:6.0` | Internal | MongoDB database with authentication |
| `mongo-express` | `mongo-express:1.0.0-alpha.4` | 8080 | Web-based MongoDB admin interface |
| `poke-app` | `klerith/pokemon-nest-app:1.0.0` | 3000 | NestJS Pokemon REST API |

## ⚙️ Configuration

Create a `.env` file in the project root:

```env
MONGO_DB_NAME=pokedb
MONGO_USERNAME=mongoadmin
MONGO_PASSWORD=your_secure_password
```

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

- **Pokemon API**: http://localhost:3000
- **Mongo Express (Admin)**: http://localhost:8080

## 📝 Key Features

- **Named Volume**: `poke-vol` for MongoDB data persistence
- **Internal Network**: MongoDB port not exposed externally for security
- **Automatic Restart**: All services configured with `restart: always`
- **Environment Variables**: Secure credential management via `.env` file

## 📚 Learning Objectives

This project demonstrates:
- Multi-container orchestration with Docker Compose
- Service dependencies (`depends_on`)
- Named volumes for data persistence
- Environment variable configuration
- Internal Docker networking for security
