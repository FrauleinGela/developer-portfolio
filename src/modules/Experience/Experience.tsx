function Experience() {
  return (
    <>
      <section className='flex flex-col md:gap-8 gap-6'>
        <div className='text-xl md:text-base text-primary-text flex flex-col md:grid md:grid-cols-4'>
          <div>
            <p>2025 - Current</p>
          </div>
          <div className='col-span-3'>
            <div>
              <strong>SENIOR FRONTEND DEVELOPER</strong><strong className="hidden md:inline"> - </strong><strong>Eupry</strong>
            </div>
            <p className="mt-2">
              Leadership and development of a new web application, including
              migrating multiple components from AngularJS to Vue.
            </p>
            <p className="mt-4">
              Leadership • Vue • CI/CD • ShadeCn • Design system • Angular •
              Agile • Mentoring • Docker
            </p>
          </div>
        </div>
        <div className='text-xl md:text-base text-primary-text md:grid md:grid-cols-4 flex flex-col '>
          <div>
            <p>2022 - 2025</p>
          </div>
          <div className='col-span-3'>
            <div>
              <strong>SENIOR DEVELOPER</strong><strong className="hidden md:inline"> - </strong><strong>Maersk</strong>
            </div>
            <p className="mt-2">
              Full-stack development and frontend development of multiple web
              applications about vessel allocations, vessel schedules, demand
              and utilization across ports and terminals.
            </p>
            <p className="mt-4">
              Angular • Vue • Net Core • REST API • Agile • CI/CD • Kubernetes •
              Docker • Azure • Terraform(IaC) • Messaging framework
            </p>
          </div>
        </div>
        <div className='text-xl md:text-base text-primary-text  md:grid md:grid-cols-4 flex flex-col '>
          <div>
            <p>2018 - 2022</p>
          </div>
          <div className='col-span-3'>
            <div>
              <strong>SENIOR DEVELOPER</strong><strong className="hidden md:inline"> - </strong><strong>Simcorp</strong>
            </div>
            <p className="mt-2">
              Full-stack developer focused on building an internal platform for
              managing batch jobs, monitoring, and logging. Developed a custom
              rich text editor for the content management system using
              Editor.js. Also participated in migrating on-premise applications
              to Azure cloud.
            </p>
            <p className="mt-4">
              Angular • Net Core • Design system • Azure • REST API • Saas •
              Editor.js{" "}
            </p>
          </div>
        </div>
        <div className='text-xl md:text-base text-primary-text  md:grid md:grid-cols-4 flex flex-col '>
          <div>
            <p>2016 - 2018</p>
          </div>
          <div className='col-span-3'>
            <div>
              <strong>WEB DEVELOPER </strong><strong className="hidden md:inline"> - </strong><strong>Giant Monkey Engineering, GmbH</strong>
            </div>
            <p className="mt-2">
              Creation of E-commerce responsive websites, POS(point of sale) for
              museums and cultural institutions.
            </p>
            <p className="mt-4">
              Angular • Ruby on Rails • Payments solutions with Concardis and
              Paymill{" "}
            </p>
          </div>
        </div>
        <div className='text-xl md:text-base text-primary-text md:grid md:grid-cols-4 flex flex-col '>
          <div>
            <p>2014 - 2016</p>
          </div>
          <div className='col-span-3'>
            <div>
              <strong>WEB DEVELOPER</strong><strong className="hidden md:inline"> - </strong><strong>Software and Support Media, GmbH</strong>
            </div>
            <p className="mt-2">
              Built a modern, responsive website for online developer courses,
              integrating VideoJs to enable HLS video streaming. Implemented
              custom video features such as thumbnails, adjustable playback
              speed, notes, and markers.
            </p>
            <p className="mt-4">
              Angular • VideoJs(HTML video player) • Payments solutions with
              Stripe API • NodeJs • MongoDB
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
