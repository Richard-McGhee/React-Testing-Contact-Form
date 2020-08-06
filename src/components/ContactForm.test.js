import React from 'react'
import ContactForm from './ContactForm'
import { render } from '@testing-library/react'

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