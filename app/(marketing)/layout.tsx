import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileHeader from "@/components/layout/MoblileHeader";
import { ReactNode } from "react"

function MarketingLayout({children}: {children: ReactNode}) {
  return (
    <>
      <Header />

      {children}
      
      <Footer />
      <MobileHeader />
    </>
  )
}

export default MarketingLayout;