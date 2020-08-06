import React from 'react'
import ContactForm from './ContactForm'
import { render } from '@testing-library/react'

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });