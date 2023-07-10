import Navbar from "./components/navbar";
import SideBar from "./components/sidebar";
import Footer from "./components/footer/Footer";


function Layout({ children }:{children: JSX.Element[] | JSX.Element}) {
  return (
    <div>
      <Navbar />
      <SideBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
