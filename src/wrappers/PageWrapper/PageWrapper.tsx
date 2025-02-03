import type { PropsWithChildren } from 'react';

export const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex items-center justify-center flex-1 bg-white rounded-xl sm:flex-row'>
      {children}
    </div>
  );
};
