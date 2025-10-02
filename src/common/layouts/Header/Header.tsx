import Logo from "../../../assets/angela-logo.svg?react";

function Header() {
  return (
    <header>
      <nav className='relative bg-tea-green text-primary-text font-semibold shadow-b shadow-md text-lg'>
        <div className='mx-auto max-w-4xl lg:px-8'>
          <div className='relative flex h-19 '>
            <div className='flex gap-6'>
              <div className='m-auto'>
                <a
                  href='#'
                  aria-current='page'
                  className='px-3 border-b border-b-transparent hover:border-b-secondary-hover hover:text-secondary-hover'
                >
                  About
                </a>
              </div>
              <div className='m-auto'>
                <a
                  href='#'
                  aria-current='page'
                  className='px-3 border-b border-b-transparent hover:border-b-secondary-hover hover:text-secondary-hover'
                >
                  Skills
                </a>
              </div>
              <div className='m-auto logo__icon'>
                <a
                  href='/'
                  className='flex items-center px-3 transition-transform duration-200 hover:scale-105 hover:translate-y-[-2px] hover:text-secondary-hover'
                >
                  <Logo className='logo__icon h-18 w-40' />
                </a>
              </div>
              <div className='m-auto'>
                <a
                  href='#'
                  className='px-3 border-b border-b-transparent hover:border-b-secondary-hover hover:text-secondary-hover'
                >
                  Posts
                </a>
              </div>
              <div className='m-auto'>
                <a
                  href='#'
                  className='px-3 border-b border-b-transparent hover:border-b-secondary-hover hover:text-secondary-hover'
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
