import type { ReactNode } from "react";
import logo from "../../../../public/images/icons/OFBLogo.svg";
interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-header-inner">
          <div className="logo">
            <img src={logo} alt="ofBusiness" />
          </div>
        </div>
      </header>
      <main className="app-main">{children}</main>
    </div>
  );
};

export default PageLayout;
