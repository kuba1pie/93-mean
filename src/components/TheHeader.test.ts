import TheHeader from "./TheHeader.vue";
import { mount } from "@vue/test-utils";

import { describe, test, expect } from "vitest";

describe("The header match snapshot", () => {
  test("The header match snapshot", () => {
    const wrapper = mount(TheHeader);
    expect(wrapper).toMatchSnapshot();
  });
});
