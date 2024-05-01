import { fireEvent, render, screen } from "@testing-library/react"
import Modal from "."

describe("Modal tests", () => {
  beforeEach(() => {
    render(<Modal onAccept={() => console.log("casd")} />)
  })
  test("Should show the modal when clicking the button",async () => {
  
    const btn = screen.getByTestId("generic-modal-open-btn")
    fireEvent.click(btn)
    const wrapper = screen.getByTestId("generic-modal-wrapper")
    expect(wrapper.style.display === "block").toBeTruthy()
  })
  
  test("Should open the modal and close it when clicking the wrapper", () => {
    
    const btn = screen.getByTestId("generic-modal-open-btn")
    fireEvent.click(btn)
    const wrapper = screen.getByTestId("generic-modal-wrapper")
    
    fireEvent.click(wrapper)

    expect(wrapper.style.display === "none").toBeTruthy()
  })

  test("Should not close the modal when clicking the modal content", () => {
    const btn =  screen.getByTestId("generic-modal-open-btn")
    fireEvent.click(btn)
    
    const wrapper = screen.getByTestId("generic-modal-wrapper")
    const content = screen.getByTestId("generic-modal-content")

    fireEvent.click(content)

    expect(wrapper.style.display === "block").toBeTruthy()
  })

  test("Should not trigger the close function when clicking accept btn",async () => {
    const btn = await screen.findByText("Open modal")
    fireEvent.click(btn)
    
    // screen.findby

    const acceptBtn = screen.getByTestId("generic-modal-open-btn")
    const wrapper = screen.getByTestId("generic-modal-wrapper")
    fireEvent.click(acceptBtn)

    expect(wrapper.style.display === "block").toBeTruthy()
  })

  // test("Should trigger properly the onAccept() function when clicking",async () => {
  //   const { container } = render(<Modal
  //     onAccept={() => console.log("Successfully btn pressed")}
  //   />)
  //   const btn = await screen.findByText("Open modal")
  //   fireEvent.click(btn)
    
  //   const onAccept = container.querySelector(".modal-wrapper")
  //   const content = container.querySelector(".modal-content")

  //   fireEvent.click(content)

  //   expect(wrapper.style.display === "block").toBeTruthy()
  // })
})