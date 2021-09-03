# Kingkiller API

**Table of Contents**
- [Purpose](#purpose)
- [Description](#description)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Challenges](#challenges)
- [Possible Improvements](#possible-improvements)

## Purpose
The primary purpose of developing this API was to investigate Deno, a new modern JavaScript runtime.

## Description
The intention of this API is to provide a few endpoints for information in the universe of the Kingkiller Chronicles by Patrick Rothfuss, similar to how SWAPI does for the Star Wars universe. However, as the intent was primarily to explore Deno I only ever created one working endpoint and never filled the database thoroughly with information. Perhaps one day if the series gets a TV show or gains vast amounts of popularity in the wider community I will revisit and expand this project.

## Tech Stack
- [Deno](https://deno.land/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Oak](https://oakserver.github.io/oak/)
- [MongoDB](https://www.mongodb.com/)

## Getting Started
Clone the repository locally and navigate into the folder. You will need to create an env file with the following values to connect to a MongoDB instance, DATABASE, HOST, PORT, USERNAME and PASSWORD. The flaw here being that your instance will not contain any information.

To run the API run the command `deno run app.ts` and Deno will take care of downloading the correct dependencies in this step (that being said you must also make sure to install Deno).

## Challenges
As Deno is a fairly new technology finding documentation and libraries proved to be much more difficult than in the more expansive land of Node. Similarly, it was next to impossible to find answers to specific problems that you could usually depend on Stack Overflow for.

## Possible Improvements

### Adding Information and Endpoints
This would be vital for its usefulness I'd say

### Crowd Sourcing
I would be very intrigued if the community and popularity for the series grew if there were methods to allow others to correctly add data into the API without too much work in validating it.