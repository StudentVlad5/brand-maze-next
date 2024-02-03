import { Sidebar } from "@/components/Sidebar/Sidebar";
import { FooterComp } from "../src/components/Footer/Footer";
import { HeaderComp } from "../src/components/Header/Header";
import './styles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{width:"100%", height:"100vh"}}>
        <HeaderComp/>
          <main style={{height:"90vh"}}>
            <Sidebar/>
            {children}
          </main>
        <FooterComp/>
      </body>
    </html>
  );
};
