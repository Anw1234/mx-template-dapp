import { useState } from 'react';
import { Button } from 'components/Button';
import { MxLink } from 'components/MxLink';
import { environment } from 'config';
import { logout } from 'helpers';
import { useGetIsLoggedIn } from 'hooks';
import { RouteNamesEnum } from 'localConstants';
import { useMatch } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';

const callbackUrl = `${window.location.origin}/unlock`;
const onRedirect = undefined;
const shouldAttemptReLogin = false;
const options = {
  shouldBroadcastLogoutAcrossTabs: true,
  hasConsentPopup: false,
};

export const Header = () => {
  const isLoggedIn = useGetIsLoggedIn();
  const isUnlockRoute = Boolean(useMatch(RouteNamesEnum.unlock));
  const ConnectButton = isUnlockRoute ? null : (
    <MxLink to={RouteNamesEnum.unlock} className="px-4 py-2 text-white bg-gray-800 rounded-md">
      Connect
    </MxLink>
  );

  const handleLogout = () => {
    sessionStorage.clear();
    logout(callbackUrl, onRedirect, shouldAttemptReLogin, options);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="flex items-center justify-between px-24 py-4 bg-white shadow-md">
      {/* Left Side - Logo */}
      <div className="flex items-center space-x-6">
        <Link href="/">
          <Image src="/Logo.svg" alt="TeachFi" width={150} height={40} />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li><Link href="#" className="transition hover:text-primary">Home</Link></li>
            <li><Link href="#" className="transition hover:text-primary">Vision</Link></li>
            <li><Link href="#" className="transition hover:text-primary">Statistics</Link></li>
            <li><Link href="#" className="transition hover:text-primary">Partners</Link></li>
            <li><Link href="#" className="transition hover:text-primary">Team</Link></li>
            <li><Link href="#" className="transition hover:text-primary">About</Link></li>
            <li className="relative">
              <button className="flex items-center transition hover:text-primary" onClick={toggleDropdown}>
                Applications
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.828a1 1 0 01-1.414 0l-4-4.828a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-[36rem] bg-white shadow-lg rounded-lg z-10 flex">
                  <div className="w-2/3 p-4">
                    <ul className="space-y-4">
                      {["book", "dao", "dex", "nft"].map((item) => (
                        <li key={item}>
                          <Link href="#" className="flex items-start space-x-3">
                            <Image src={`/launchpad/${item}.svg`} alt={item} width={24} height={24} />
                            <div>
                              <h4 className="font-semibold text-primary">{item.toUpperCase()}</h4>
                              <p className="text-sm text-gray-500">Short description here.</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/2 p-4 rounded-r-lg bg-gray-50">
                    <iframe width="260" height="180" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg"></iframe>
                    <h4 className="mt-4 font-semibold text-gray-700">We&apos;ve just released an update!</h4>
                    <p className="mt-2 text-sm text-center text-gray-500">Check out the all new dashboard view. Pages now load up to 3x faster.</p>
                    <div className="flex mt-4 space-x-2">
                      <button className="text-sm text-primary">Dismiss</button>
                      <Link href="#" className="text-sm font-medium text-primary">Changelog</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>

      {/* Right Side - Connect Button */}
      <div className="flex items-center space-x-4">
        {/* <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <p className="text-gray-600">{environment}</p>
        </div> */}
        {isLoggedIn ? (
          <Button onClick={handleLogout} className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
            Close
          </Button>
        ) : (
          ConnectButton
        )}
      </div>
    </header>
  );
};
