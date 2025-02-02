import { Button } from 'components/Button';
import { MxLink } from 'components/MxLink';
import { environment } from 'config';
import { logout } from 'helpers';
import { useGetIsLoggedIn } from 'hooks';
import { RouteNamesEnum } from 'localConstants';
import MultiversXLogo from '../../../assets/img/multiversx-logo.svg?react';
import { useMatch } from 'react-router-dom';

const callbackUrl = `${window.location.origin}/unlock`;
const onRedirect = undefined; // use this to redirect with useNavigate to a specific page after logout
const shouldAttemptReLogin = false; // use for special cases where you want to re-login after logout
const options = {
  /*
   * @param {boolean} [shouldBroadcastLogoutAcrossTabs=true]
   * @description If your dApp supports multiple accounts on multiple tabs,
   * this param will broadcast the logout event across all tabs.
   */
  shouldBroadcastLogoutAcrossTabs: true,
  /*
   * @param {boolean} [hasConsentPopup=false]
   * @description Set it to true if you want to perform async calls before logging out on Safari.
   * It will open a consent popup for the user to confirm the action before leaving the page.
   */
  hasConsentPopup: false
};

export const Header = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const isUnlockRoute = Boolean(useMatch(RouteNamesEnum.unlock));

  const ConnectButton = isUnlockRoute ? null : (
    <MxLink to={RouteNamesEnum.unlock}>Connect</MxLink>
  );

  const handleLogout = () => {
    sessionStorage.clear();
    logout(
      callbackUrl,
      /*
       * following are optional params. Feel free to remove them in your implementation
       */
      onRedirect,
      shouldAttemptReLogin,
      options
    );
  };

  return (
    <header className='flex flex-row justify-between pt-6 pl-6 pr-6 align-center'>
      <MxLink
        className='flex items-center justify-between'
        to={isLoggedIn ? RouteNamesEnum.dashboard : RouteNamesEnum.home}
      >
        <MultiversXLogo className='w-full h-6' />
      </MxLink>

      <nav className='w-full h-full text-sm sm:relative sm:left-auto sm:top-auto sm:flex sm:w-auto sm:flex-row sm:justify-end sm:bg-transparent'>
        <div className='container flex items-center justify-end gap-2 mx-auto'>
          <div className='flex items-center gap-1'>
            <div className='w-2 h-2 bg-green-500 rounded-full' />
            <p className='text-gray-600'>{environment}</p>
          </div>

          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              className='inline-block px-3 py-2 mx-0 my-0 text-center text-gray-600 rounded-lg hover:no-underline hover:bg-slate-100'
            >
              Close
            </Button>
          ) : (
            ConnectButton
          )}
        </div>
      </nav>
    </header>
  );
};
