# Zoo Cards

This is a demonstration of a NodeJS based GraphQL API consumed by a React application.
Dockerized and tested by Cypress.

## How to run this project to try it out?

### Prerequisites

- docker
- docker-compose

### Steps

- `sh demo.sh`
- open `http://localhost:8080` in your browser

## How to run e2e tests on this project?

### Prerequisites

- docker
- docker-compose
- node 12
- npm or yarn
- cypress

### Steps

- `sh demo.sh`
- cd ./backend and `yarn`
- cd in to ./backend/packages/api and `yarn run seed:dev`
- cd in to ./e2e
- run `yarn`
- run `yarn run cypress:open`
- pick a test and run it

## How to develop this project further?

### Prerequisites

- docker
- docker-compose
- node 12
- npm or yarn

### Steps

- `sh dev.sh`
- cd in to ./backend and run `yarn`
- cd in to ./backend/packages/api and run `yarn seed:dev` then `yarn start:dev`
- cd in to ./client and run `yarn`
- cd in to ./client/packages/app and run `yarn start`

- open `http://localhost:3000` in your browser to use the app
- open `http://localhost:5000/grapqhl` to see the playground

## Potential improvements

- better error handling (ErrorBoundaries)
- notifications and logging for mutations
- better TS in themes
- fix Docker containers

## Tech/tools used

- React
- Typescript
- Apollo
- GraphQL
- Styled Components
- MaterialUI
- React Intl
- Cypress
- Docker
- NestJS
- TypeORM
- MongoDB

## Credits

- MaterialUI team
