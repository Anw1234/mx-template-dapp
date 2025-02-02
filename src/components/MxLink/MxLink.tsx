import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { WithClassnameType } from 'types';

interface MxLinkPropsType extends PropsWithChildren, WithClassnameType {
  to: string;
}

export const MxLink = ({
  to,
  children,
  className = 'inline-block px-4 py-2 my-0 ml-1 mr-0 text-center text-white bg-gray-600 rounded-lg hover:no-underline hover:bg-blue-700'
}: MxLinkPropsType) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};
