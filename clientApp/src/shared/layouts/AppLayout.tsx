import { AppBar } from './AppBar';
import { NavBar } from './NavBar';
import { PageContent } from './PageContent';
import SideNav from './SideNav';

export function AppLayout() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <SideNav isVisible={false}></SideNav>
      <NavBar isVisible={false}></NavBar>
      <PageContent />
    </div>
  );
}