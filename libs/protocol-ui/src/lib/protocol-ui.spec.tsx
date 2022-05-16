import { render } from '@testing-library/react';

import ProtocolUi from './protocol-ui';

describe('ProtocolUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProtocolUi />);
    expect(baseElement).toBeTruthy();
  });
});
