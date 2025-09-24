import './App.css'
import profileImg from './assets/profile.jpg'; 

function App() {

  return (
    <>
    <main>
      <div className="container">
        <div className='card card--primary block-row'>
          <div>
            <picture className="profile--image"> 
              <source
                srcSet={profileImg}
                media="(orientation: portrait)" />
              <img src={profileImg} alt="" />
            </picture>
          </div>
          <div className='block'>
            <h1>Software developer</h1>
            <p>
              Hi! I'm Angela, a frontend web engineer based in Copenhagen, with a strong focus on frontend.
            </p>
            <p>
              I enjoy building web applications, designing architecture,
              and coaching developers to write better solutions.
            </p>

            <p>
              My expertise is Typescript, Javascript, Vue, React, Next.js.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
