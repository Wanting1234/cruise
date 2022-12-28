import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import AgentView from './AgentView';
import renderWithProviders from '../../../test/utils';

describe('AgentView', () => {
  test('should render overview and agent list', async () => {
    const promise = Promise.resolve();
    renderWithProviders(
      <AgentView />,
    );
    await act(() => promise);
    expect(screen.getByTestId('overview')).toBeInTheDocument();
    expect(screen.getByTestId('agent-list')).toBeInTheDocument();
  });
});
