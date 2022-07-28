import { faker } from "@faker-js/faker";
import { generateRandomPokemon } from "../helpers";
import { getRandomNumberBetween, getRandomLoser } from "@/helpers";

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
    const firstPokemon = generateRandomPokemon();
    const secondPokemon = generateRandomPokemon();

    // Act
    const randomLoser = getRandomLoser(firstPokemon, secondPokemon);

    // Assert
    expect([firstPokemon, secondPokemon]).toContain(randomLoser);
  });
});
