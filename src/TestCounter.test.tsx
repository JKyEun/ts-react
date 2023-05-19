import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import TestCounter from './TestCounter';

test('버튼의 온클릭 함수 작동하는지', () => {
  render(<TestCounter />);
  const btn = screen.getByRole('button');
  expect(btn).toHaveTextContent('현재 숫자: 0');
  userEvent.click(btn);
  expect(btn).toHaveTextContent('현재 숫자: 1');
});
