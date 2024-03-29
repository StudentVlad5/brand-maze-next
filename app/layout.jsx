"use client"
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { FooterComp } from "../src/components/Footer/Footer";
import { HeaderComp } from "../src/components/Header/Header";
import './styles.css';
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from 'next/link';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children, auth }) {
  const selectedSegment = useSelectedLayoutSegment('facebook');
  return (
    <html lang="en">
      <body style={{width:"100%", height:"100vh"}}>
        <ErrorBoundary fallback={<Error/>}>
          <HeaderComp/>
            <main style={{height:"90vh"}}>
              <Sidebar/>
              <Link style={{margin:"30px"}} href="/login">LogIN</Link>
              {children}
              <ToastContainer/>
              {auth}
            </main>
          <FooterComp/>
        </ErrorBoundary>
      </body>
    </html>
  );
};
