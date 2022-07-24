import { faker } from "@faker-js/faker";

export const generateRandomPokemon = () => {
  return {
    name: faker.lorem.word(),
    sprites: {
      front_default: faker.internet.url(),
    },
    is_selected: faker.datatype.boolean(),
  };
};
