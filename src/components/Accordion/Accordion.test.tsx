import { describe, expect, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '.';

describe('Accordion tests', () => {
  
  beforeEach(() => {
    render(
      <Accordion title="Component">
        <h3>Este Elemento</h3>
      </Accordion>
    );
  }) 
  test('Should show the accordion', () => {
    expect(screen.getByText("Component")).toBeDefined()
  });

  test("Should show the accordion title always", () => {
    expect(screen.getByText("Component")).toBeDefined()
  })

  test("Should not show the content at the start", () => {
    expect(screen.queryByText(/elemento/i)).toBeNull()
  })

  test("Should show the content when the button is clicked", () => {
    const button = screen.getByText("Open the accordion");
    fireEvent.click(button)
    // fireEvent.click(button)
    expect(screen.getByText("Este Elemento")).toBeDefined()
  })

  test("Should hide the content when the button is clicked", () => { 
    const button = screen.getByText("Open the accordion");
    fireEvent.click(button)
    fireEvent.click(button)
    // fireEvent.click(button)
    expect(screen.queryByText("Este Elemento")).toBeNull()
   
  })

});
