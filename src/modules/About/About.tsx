function About() {
  return (
    <>
      <section className="md:text-xl py-8 px-6 rounded-lg shadow-sm border border-grey-border bg-tea-green/50 ">
      <div className='text-primary-text font-semibold'>
        <div className='flex md:flex-row flex-col gap-8'>
          <div className="text-2xl text-center md:text-left md:text-base ">
            <div>
              <h1 className='text-3xl'>A bit about me</h1>
              <p className='mt-6 md:mt-4 text-2xl md:text-xl'>
                A software engineer
                with a strong focus on frontend and UI development.
              </p>
              <p className='mt-6 md:mt-4'>
                Hi there, my name is Angela, a software developer specialized in the web, frontend and cloud development. 
                With more than 10 years of experience, I have worked in various industries including finance, shipping, and E-commerce.
              </p>
              <p className='mt-6 md:mt-4'>
                My skills stretch across Typescript, Vue, React, Angular, Css, C#, .Net Core, Azure, Docker, Kubernetes, and much more...
              </p>

              <p className='mt-6 md:mt-4'>
                In my free time, I enjoy exploring new technologies, coding, cooking, hiking, cold water swimming, and spending time with my family and partner and maybe a 🐶 soon.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
