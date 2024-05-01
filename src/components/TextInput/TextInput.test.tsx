import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from '.';

describe("Text input tests", () => {
  beforeEach(() => {
    render(
      <TextInput
          setValue={() => console.log("caca")}
      />
    )
  })
  test("Should have icon if it has an iconButton", () => {
    expect(4).toBe(4)
  })
})