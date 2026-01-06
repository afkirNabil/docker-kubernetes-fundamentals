# 🚀 NestJS GraphQL App - Docker Development

A NestJS GraphQL application running in a Docker container with hot-reload development support.

## 📋 Architecture

```
┌─────────────────────────────────────────┐
│           Docker Container              │
│  ┌───────────────────────────────────┐  │
│  │     NestJS GraphQL Application    │  │
│  │          node:18-alpine3.16       │  │
│  │           Port 3000               │  │
│  └───────────────────────────────────┘  │
│                   ▲                     │
│                   │ Bind Mount          │
└───────────────────│─────────────────────┘
                    ▼
          ┌─────────────────┐
          │  Local Source   │
          │     Code        │
          └─────────────────┘
```

## 🛠️ Technology Stack

| Component | Version | Description |
|-----------|---------|-------------|
| Node.js | 18-alpine3.16 | Lightweight Node runtime |
| NestJS | - | Progressive Node.js framework |
| GraphQL | - | Query language for APIs |

## 🚀 Usage

### Start Development Container

Navigate to the `nest-graphql` directory and run:

```powershell
docker container run `
--name nest-app `
-w /app `
-dp 3000:3000 `
-v "${PWD}:/app" `
node:18-alpine3.16 `
sh -c "yarn install && yarn start:dev"
```

### Stop Container

```bash
docker container stop nest-app
```

### Remove Container

```bash
docker container rm nest-app
```

### View Logs

```bash
docker logs -f nest-app
```

## 🌐 Access Points

- **GraphQL Playground**: http://localhost:3000/graphql

## 📝 Command Breakdown

| Flag | Description |
|------|-------------|
| `--name nest-app` | Container name for easy reference |
| `-w /app` | Sets working directory inside container |
| `-dp 3000:3000` | Detached mode + port mapping |
| `-v "${PWD}:/app"` | Bind mount: local files ↔ container |
| `sh -c "..."` | Commands to run on container start |

## 📚 Learning Objectives

This project demonstrates:
- Running Node.js applications in Docker without local Node installation
- Bind mounts for live code synchronization
- Development workflow with hot-reload
- Alpine Linux for minimal container images
- PowerShell syntax for Docker commands on Windows
