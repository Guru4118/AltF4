import { Capabilities } from "@/components/site/capabilities";
import { Contact } from "@/components/site/cta";
import { Engagement } from "@/components/site/engagement";
import { Faq } from "@/components/site/faq";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { Stats } from "@/components/site/stats";
import { Work } from "@/components/site/work";

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:shadow-frame">Skip to content</a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Capabilities />
        <Stats />
        <Process />
        <Services />
        <Work />
        <Engagement />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
