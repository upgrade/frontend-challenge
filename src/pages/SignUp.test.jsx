import React from 'react';
import SignUp from './SignUp';
import { Provider } from 'react-redux'
import store from '../store'
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom/extend-expect";

it("Trigger form validations", async () => {
  render(<Provider store={store}><SignUp /></Provider>);
  const user = userEvent.setup();
  user.click(screen.getByText(/next/i));
  await waitFor(() => {
    expect(screen.getByText(/the first name field is required/i)).toBeInTheDocument();
  });
})
