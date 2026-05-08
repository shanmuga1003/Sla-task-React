import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div>
      <Header head="Welcome to my Website" />

      <main>
        {props.children}
      </main>
      <br />
      <Footer foot="© 2026 My Website" />
    </div>
  );
}

export default Layout;