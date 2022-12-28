import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('should render footer', () => {
    render(<Footer />);

    expect(screen.getByRole('contentinfo')).toHaveTextContent('© Copyright 2022 ThoughtWorks');
  });
});
