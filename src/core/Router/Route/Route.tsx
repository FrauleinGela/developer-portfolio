import { Outlet } from "react-router";
import Header from "../../../common/layouts/Header/Header";

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
          <p className="text-center text-sm">Designed & Developed by Angela Patino © 2025</p>
        </footer>
      </>
    );
  };
  
export default Route;