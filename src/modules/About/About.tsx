import Button from "../../common/components/Button/Button";
import profileImg from "../../assets/profile.jpg";

function AboutMe() {
  return (
    <>
      <div className='py-8 px-6 rounded-lg shadow-sm border border-grey-border flex-col bg-tea-green/50 text-primary-text font-semibold'>
        <div className='flex flex-row gap-8'>
          <picture>
            <source srcSet={profileImg} media='(orientation: portrait)' />
            <div className='ring-2 ring-secondary-hover/50 rounded-full'>
              <img className='w-35 h-30 rounded-full' src={profileImg} alt='' />
            </div>
          </picture>
          <div>
            <div>
              <h1 className='text-3xl'>Software developer</h1>
              <p className='mt-4'>
                Hi! I'm Angela, a frontend web engineer based in Copenhagen,
                with a strong focus on frontend.
              </p>
              <p className='mt-4'>
                I enjoy building web applications, designing architecture, and
                coaching developers to write better solutions.
              </p>
              <p className='mt-4'>
                Full-stack developer with expertise in UI, Typescript,
                Javascript, Vue, React, Next.js
              </p>
            </div>
            <div className='flex flex-row gap-4 mt-4'>
              <a
                href='https://github.com/FrauleinGela'
                target='_blank'
                rel='noreferrer noopener'
                title='Github'
                className='inline-flex items-center gap-2'
              >
                <Button variant='secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436c.55.096.756-.233.756-.522c0-.262-.013-1.128-.013-2.049c-2.764.509-3.479-.674-3.699-1.292c-.124-.317-.66-1.293-1.127-1.554c-.385-.207-.936-.715-.014-.729c.866-.014 1.485.797 1.691 1.128c.99 1.663 2.571 1.196 3.204.907c.096-.715.385-1.196.701-1.471c-2.448-.275-5.005-1.224-5.005-5.432c0-1.196.426-2.186 1.128-2.956c-.111-.275-.496-1.402.11-2.915c0 0 .921-.288 3.024 1.128a10.2 10.2 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371c2.104-1.43 3.025-1.128 3.025-1.128c.605 1.513.221 2.64.111 2.915c.701.77 1.127 1.747 1.127 2.956c0 4.222-2.571 5.157-5.019 5.432c.399.344.743 1.004.743 2.035c0 1.471-.014 2.654-.014 3.025c0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11'
                    />
                  </svg>
                </Button>
              </a>
              <a
                href='https://www.linkedin.com/in/angela-patino-yuli-53219333b/'
                target='_blank'
                rel='noreferrer noopener'
                title='Linkedin'
              >
                <Button variant='secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z'
                    />
                  </svg>
                </Button>
              </a>
              <a
                href='https://dev.to/angelapy'
                target='_blank'
                rel='noreferrer noopener'
                title='Dev.to'
              >
                <Button variant='secondary'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path
                      fill='currentColor'
                      d='M7.73 11.93c0 1.72-.02 1.83-.23 2.07c-.19.17-.38.23-.76.23l-.51.01l-.03-2.27l-.02-2.27h.52c.35 0 .6.07.77.21c.24.21.26.25.26 2.02M22 7.5v9c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2v-9c0-1.11.89-2 2-2h16c1.11 0 2 .89 2 2M8.93 11.73c-.03-1.84-.05-1.99-.29-2.39c-.4-.68-.85-.84-2.36-.84H5v7h1.21c1.33 0 1.89-.17 2.29-.71c.41-.53.5-.98.43-3.06m4.19-3.23h-1.48c-1.49 0-1.5 0-1.71.28S9.7 9.21 9.7 12v2.96l.27.27c.25.27.31.27 1.71.27h1.44v-1.19l-1.09-.04l-1.1-.03V12.6l.68-.03l.66-.04v-1.19h-1.39V9.7h2.24zm5.88.06c0-.06-.3-.06-.66-.06l-.68.06l-.59 2.35c-.38 1.48-.62 2.27-.67 2.13c-.08-.27-1.14-4.44-1.14-4.49s-.31-.05-.68-.05h-.69l.41 1.55c.2.87.59 2.28.81 3.15c.34 1.35.46 1.65.75 1.94c.2.22.45.36.61.36c.33 0 .76-.34.9-.73C17.5 14.5 19 8.69 19 8.56'
                    />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
