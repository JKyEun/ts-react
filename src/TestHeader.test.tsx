import { render, screen } from '@testing-library/react';
import TestHeader from './TestHeader';

test('isLogin이 true로 전달이 된 상태에서, userId가 잘 뜨는지', () => {
  render(<TestHeader isLogin={true} userId='jke' />);
  const textEl = screen.getByText(/jke님 환영합니다!/);
  expect(textEl).toBeInTheDocument();
});

test('isLogin이 false일 때, 문구와 button이 정상 출력되는지 확인', () => {
  render(<TestHeader isLogin={false} />);
  const textEl = screen.getByText(/로그인 해주세요!/);
  const btnEl = screen.getByRole('button');
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent('로그인');
});
