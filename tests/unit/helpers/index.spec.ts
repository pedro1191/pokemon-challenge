import { getRandomNumberBetween, getRandomLoser } from "@/helpers";
import { faker } from "@faker-js/faker";

describe("helpers.ts", () => {
  it("generates a random number between two numbers", () => {
    // Arrange
    const min = faker.datatype.number({ min: 0, max: 10 }); // some random number between 0 and 10
    const max = faker.datatype.number({ min, max: 20 }); // some random number between min and 20

    // Act
    const randomNumber = getRandomNumberBetween(min, max);

    // Assert
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber).toBeLessThanOrEqual(max);
  });

  it("selects a random pokemon as loser", () => {
    // Arrange
    const firstPokemon = {
      name: faker.lorem.word(),
      sprites: {
        front_default: faker.internet.url(),
      },
      is_selected: faker.datatype.boolean(),
    };
    const secondPokemon = {
      name: faker.lorem.word(),
      sprites: {
        front_default: faker.internet.url(),
      },
      is_selected: faker.datatype.boolean(),
    };

    // Act
    const randomLoser = getRandomLoser(firstPokemon, secondPokemon);

    // Assert
    expect([firstPokemon, secondPokemon]).toContain(randomLoser);
  });
});
