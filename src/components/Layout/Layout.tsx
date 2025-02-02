import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthenticatedRoutesWrapper } from 'components/sdkDappComponents';
import { RouteNamesEnum } from 'localConstants/routes';
import { routes } from 'routes/routes';
import Footer from 'components/Layout/Footer/Footer';
import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren) => {
  const { search } = useLocation();
  return (
    <div className='flex flex-col min-h-screen bg-slate-200'>
      <Header />
      <main className='flex items-stretch justify-center flex-grow'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${RouteNamesEnum.unlock}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
      <Footer />
    </div>
  );
};
