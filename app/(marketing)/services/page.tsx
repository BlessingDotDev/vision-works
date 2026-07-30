import Service from '@/components/services/services/Services';
import HeroSection from '@/components/services/hero/HeroSection';
import SideBar from '@/components/services/sidebar/SideBar';
import MainBar from '@/components/services/mainbar/MainBar';
import RightBar from '@/components/services/rightbar/RightBar';

export default function Services() {
  return (
      <>
        <HeroSection />
        <Service />

        <section className="p-6 grid grid-cols-1 
          lg:grid-cols-[1fr_2fr_1fr] md:grid-cols-[2fr_1fr] gap-24 md:gap-6">
          <SideBar />
          <MainBar />
          <RightBar />
        </section>
      </>
  );
}