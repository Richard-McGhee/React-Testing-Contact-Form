import React from 'react'
import ContactForm from './ContactForm'
import { render, fireEvent, waitFor } from '@testing-library/react'

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });

test("finds First Name Input", () => {
    const { getByText } = render(<ContactForm />)
    const firstNameForm = getByText(/first name/i)
    expect(firstNameForm).toBeInTheDocument()
})
test("Finds First Name placeholder text", ( () => {
    const { getByPlaceholderText } = render(<ContactForm />)
    const fnamePHText = getByPlaceholderText(/edd/i)
    expect(fnamePHText).toBeInTheDocument()
}))
test("First Name Iput only allows 3 characters", async () => {
    const { getByLabelText, getAllByText, getByRole } = render(<ContactForm />)
    const fnameInput = getByLabelText(/first name/i)
    const submitButton = getByRole("button")
    // expect(submitButton).toBeInTheDocument
    fireEvent.change(fnameInput, {target: {value: "12345"}})
    fireEvent.click(submitButton)
    // expect(fnameInput.value).toBe("12345")
    
    await waitFor(() => {
        getAllByText(/Looks like there was an error/i)
    })
})