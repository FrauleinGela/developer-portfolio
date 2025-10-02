import AboutMe from "./modules/About/About";
import "./App.css";
import Posts from "./modules/Posts/Posts";
import Header from "./common/layouts/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className='mx-auto max-w-4xl px-4 py-6'>
        <div className='mx-auto max-w-4xl'>
          <section className='mb-10'>
            <AboutMe />
          </section>
          <Posts />
        </div>
      </main>
    </>
  );
}

export default App;
