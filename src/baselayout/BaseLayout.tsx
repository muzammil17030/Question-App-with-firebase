import { Outlet } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import HeaderNavBar from "../components/HeaderNavBar";
import { Box } from "@mui/material";
// import AllQuestions from "../pages/AllQuestions";

function BaseLayout() {
  return (
    <>
      <header >
        <HeaderNavBar />
      </header>
<h1 className="text-center bg-black text-warning pb-2 pt-3">Question App</h1>
      <main>
       <Box className='container'><Outlet /></Box> 
      </main>

      <footer>
        <FooterBar />
      </footer>
    </>
  );
}

export default BaseLayout;
