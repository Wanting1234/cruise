import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Main from './Main';
import renderWithProviders from '../../test/utils';

describe('Main', () => {
  test('should render navigation and content', async () => {
    const promise = Promise.resolve();

    renderWithProviders(<Main />);

    await act(() => promise);
    expect(await screen.findByRole('main')).toBeInTheDocument();
    expect(await screen.findByRole('navigation')).toBeInTheDocument();
    expect(await screen.findByRole('region')).toBeInTheDocument();
  });

  test('should render navigation and other content page when click DASHBOARD', () => {
    renderWithProviders(<Main />);

    userEvent.click(screen.queryByText('DASHBOARD'));

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('dashboard Loading...')).toBeInTheDocument();
  });
});
