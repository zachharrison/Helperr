# Helperr

## Setup

Install dependencies withing the root, front-end and back-end folder with `npm install`.

## Creating The DB

###On back-end:

1. Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`.
2. Create a database with the command `CREATE DATABASE helperr_development;`.
3. Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

- this env example should be in the front end and root folder as just .env as well. For convience use the same content for each.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=helperr_development
PGPASSWORD=development
PGPORT=5432

REACT_APP_GOOGLE_API_KEY='PRIVATE KEY'
REACT_APP_MAPBOX_API_KEY='PRIVATE KEY'
FAST_REFRESH=false
CHOKIDAR_USEPOLLING=true
REACT_APP_WEBSOCKET_URL=ws://localhost:8001
PORT=8000
CHOKIDAR_USEPOLLING=false
```

## Seeding the DB

###On back-end:

1. Run a the development server with `npm start` in the Host environment.
2. Then either Make a `GET` request to `/api/debug/reset` with `curl http://localhost:8001/api/debug/reset`, or use the browser to navigate to `http://localhost:8001/api/debug/reset`.

## Run The Server

###On front-end:

1. Run a the server with `npm start`
