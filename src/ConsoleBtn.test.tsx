import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ConsoleBtn from './ConsoleBtn';

test('버튼의 온클릭 함수 작동하는지', () => {
  render(<ConsoleBtn />);
  const btn = screen.getByText('Click me!');
  userEvent.click(btn);
});
