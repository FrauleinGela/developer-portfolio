import { Outlet } from "react-router";
import Header from "../../../common/layouts/Header/Header";
import Button from "../../../common/components/Button/Button";

function Route() {
  return (
      <>
        <Header>
        </Header>
        <main className='mx-auto max-w-4xl px-4 py-6'>
          <div className='mx-auto max-w-4xl'>
            <Outlet />
          </div>
        </main>
        <footer className="mx-auto py-6 max-w-4xl">
          <a
            href="mailto:angelapatyu@gmail.com"
            className="block mx-auto mb-2 w-fit"
          >
            <Button variant="primary">
              Contact Me
            </Button>
          </a>
          <p className="text-center text-sm">Designed & Developed by Angela Patino © 2025</p>
        </footer>
      </>
    );
  };
  
export default Route;