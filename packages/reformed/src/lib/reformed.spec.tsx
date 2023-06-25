import { render } from '@testing-library/react';

import Reformed from './reformed';

describe('Reformed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reformed />);
    expect(baseElement).toBeTruthy();
  });
});
