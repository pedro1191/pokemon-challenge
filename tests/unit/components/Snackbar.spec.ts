import { faker } from "@faker-js/faker";
import { mount } from "@vue/test-utils";
import Snackbar from "@/components/Snackbar.vue";

describe("Snackbar.vue", () => {
  it("renders properly", () => {
    // Arrange
    const defaultContent = faker.lorem.words();
    const wrapper = mount(Snackbar, {
      slots: {
        default: defaultContent,
      },
    });

    // Act
    const wrapperText = wrapper.text();

    // Assert
    expect(wrapperText).toBe(defaultContent);
  });

  it("emits the onClose event", async () => {
    // Arrange
    const wrapper = mount(Snackbar);

    // Act
    await wrapper.trigger("click");

    // Assert
    expect(wrapper.emitted().onClose).toBeTruthy();
  });
});
