# Pokémon Game!

Hello and welcome to the Pokémon Game!

This is a Web Application built using [Vue.js](https://vuejs.org/). It consumes the open RESTful API [PokéAPI](https://pokeapi.co/docs/v2) to load the pokémons.

The following technologies are being used:
- [commitlint](https://github.com/conventional-changelog/commitlint) and [husky](https://github.com/typicode/husky): to control commit messages
- [cypress](https://www.cypress.io/): for end-to-end testing
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch): to consume the [PokéAPI](https://pokeapi.co/docs/v2)
- [jest](https://jestjs.io/): for unit testing
- [vue-gtag](https://github.com/MatteoGabriele/vue-gtag): to send event data to Google Analytics

## How to play
Select two pokémons from the list and press the **Fight!** button. A winner will be chosen randomly, and the loser will be removed from the list. Keep selecting two pokémons and pressing the **Fight!** button until there is only one pokémon left, which will be the champion. 


## Live demo
Please visit [https://pokemongame.pedrohsalmeida.com/](https://pokemongame.pedrohsalmeida.com/) for a live demo.


## Project setup
### Install dependencies
```
npm install
```

### Create a **.env.local** file from **.env.example** and set the environment variable values
```
cp .env.example .env.local
```

- **PORT**: optional. The port in which the application should run
- **VUE_APP_GA_ID**: optional. The Google Analytics Measurement ID
- **VUE_APP_POKEMON_API_URL**: mandatory. It should point to a running instance of the [PokéAPI](https://pokeapi.co/docs/v2)

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Runs unit tests
```
npm run test:unit
```

### Runs end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```