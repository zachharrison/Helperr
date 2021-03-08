# Hand on Demand

Hand on Demand is an a full stack application using React, Express, PSQL and the google maps API. Users can create, read, update, and delete jobs. When a new job is created a pin will be dropped on the map, and other users can apply to any job and hop over into the chat to arrange all of the details. When searching for a job users can also filter through all of the job listings based on location as well as the jobs category.

### Posting a job
![Post](/front-end/public/post-job.gif)

### Filtering jobs
![Filtering](/front-end/public/filter-jobs.gif)

### Chat with other users
![Chat](/front-end/public/chat.gif)

## Stack

### Frontend:

- React, JS, CSS, Material UI

### Backend:

- Node, Express, PSQL, Socket.io, Google maps API

## Setup

Install dependencies withing the root, front-end and back-end folder with `npm install`.

## Creating The DB

On back-end:

1. Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`.
2. Create a database with the command `CREATE DATABASE handondemand_development;`.
3. Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

- this env example should be in the front end and root folder as just .env as well. For convience use the same content for each.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=handondemand_development
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

On back-end:

1. Run a the development server with `npm start` in the Host environment.
2. Then either Make a `GET` request to `/api/debug/reset` with `http://localhost:8001/api/debug/reset`, or seed directly in psql with
```psql
\i src/db/schema/create.sql
\i src/db/schema/development.sql
```

## Run The Server

On front-end:

1. Run a the server with `npm start`
