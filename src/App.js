import Header from "./components/Header/Header";
import LeftSidebar from "./components/Sidebar/LeftSidebar/LeftSidebar.1";
import Main from "./components/Main/Main";
import RightSidebar from "./components/Sidebar/RightSidebar/RightSidebar";

function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <LeftSidebar />
        <Main />
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
