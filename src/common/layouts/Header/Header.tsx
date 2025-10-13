import { NavLink } from "react-router";
import Logo from "../../../assets/angela-logo.svg?react";
import clsx from "clsx";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { Menu, X } from "lucide-react";

function Header() {
  const commonLinkClasses =
    "border-b hover:border-b-secondary-hover hover:text-secondary-hover";
  const activeLinkClasses = "border-b-secondary-hover text-secondary-hover";
  const inactiveLinkClasses = "border-b-transparent";
  const commonLogoClasses =
    "flex items-center transition-transform duration-200 hover:scale-105 hover:translate-y-[-2px] hover:text-secondary-hover";
  const activeLogoClasses = "scale-105 translate-y-[-2px] text-secondary-hover";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className='shadow-md font-semibold '>
      <nav className='hidden md:flex relative bg-tea-green text-primary-text shadow-b text-lg'>
        <div className='max-w-4xl px-8 mx-auto'>
          <div className='relative flex h-19 '>
            <ul className='flex gap-6'>
              <li className='m-auto'>
                <NavLink
                  to='/about'
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? clsx(commonLinkClasses, activeLinkClasses)
                      : clsx(commonLinkClasses, inactiveLinkClasses)
                  }
                >
                  About
                </NavLink>
              </li>
              <li className='m-auto'>
                <NavLink
                  to='/skills'
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? clsx(commonLinkClasses, activeLinkClasses)
                      : clsx(commonLinkClasses, inactiveLinkClasses)
                  }
                >
                  Skills
                </NavLink>
              </li>
              <li className='m-auto'>
                <NavLink
                  to='/'
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? clsx(commonLogoClasses, activeLogoClasses)
                      : clsx(commonLogoClasses)
                  }
                >
                  <Logo className='logo__icon h-18 w-40' />
                </NavLink>
              </li>
              <li className='m-auto'>
                <NavLink
                  to='/posts'
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? clsx(commonLinkClasses, activeLinkClasses)
                      : clsx(commonLinkClasses, inactiveLinkClasses)
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li className='m-auto'>
                <NavLink
                  to='/contact'
                  className={({ isActive }: { isActive: boolean }) =>
                    isActive
                      ? clsx(commonLinkClasses, activeLinkClasses)
                      : clsx(commonLinkClasses, inactiveLinkClasses)
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={clsx("md:hidden px-3 h-30 py-2 bg-tea-green")}>
        <div
          className={clsx(
            "flex w-full items-center justify-between ",
            isMobileMenuOpen
              ? "bg-secondary shadow-md px-2 rounded-md"
              : "bg-transparent"
          )}
        >
          <div>
            <Logo className='logo__icon h-26 w-44' />
          </div>
          {isMobileMenuOpen ? (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label='Close navigation menu'
              className='pr-1'
            >
              <X color='#032E63' size="36"/>
            </button>
          ) : (
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label='Open navigation menu'
              className='pr-1'
            >
              <Menu color='#032E63' size="36"/>
            </button>
          )}
        </div>
      </div>
      <nav
        className={clsx(
          "fixed z-40 w-screen h-screen flex flex-col bg-tea-green/80 backdrop-blur-sm",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        <ul className='flex flex-col text-center gap-8 text-primary-text px-4 py-8 text-2xl'>
          <li className='w-full'>
            <NavLink
              to='/'
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? clsx(activeLinkClasses) : undefined
              }
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className='w-full'>
            <NavLink
              to='/about'
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? clsx(activeLinkClasses) : undefined
              }
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </NavLink>
          </li>
          <li className='w-full'>
            <NavLink
              to='/skills'
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? clsx(activeLinkClasses) : undefined
              }
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Experience & Skills
            </NavLink>
          </li>
          <li className='w-full'>
            <NavLink
              to='/posts'
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? clsx(activeLinkClasses) : undefined
              }
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Posts
            </NavLink>
          </li>
          <li className='w-full'>
            <NavLink
              to='/contact'
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? clsx(activeLinkClasses) : undefined
              }
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
