import React from 'react';

export default function TestHeader({ isLogin, userId }: { isLogin: boolean; userId?: string }) {
  return (
    <div>
      {isLogin ? (
        <h1>{userId}님 환영합니다!</h1>
      ) : (
        <h1>
          로그인 해주세요! <button>로그인</button>
        </h1>
      )}
    </div>
  );
}
