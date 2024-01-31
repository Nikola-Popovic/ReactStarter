import { useSidebar } from '../../hooks/useSidebar';
import { AppBar } from './AppBar';
import { NavBar } from './NavBar';
import { PageContent } from './PageContent';
import SideNav from './SideNav';

export function AppLayout() {
  const { isOpen, toggleSidebar } = useSidebar();
  return (
    <div className="App">
      <AppBar toggleSidebar={toggleSidebar} showSidebar={false}></AppBar>
      <SideNav isVisible={isOpen}></SideNav>
      <NavBar isVisible={false}></NavBar>
      <PageContent />
    </div>
  );
}