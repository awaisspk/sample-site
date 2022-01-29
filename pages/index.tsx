import { HeroSection } from "@components/Hero";
import { Skills } from "@components/Skills";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <Skills />
    </div>
  );
};

export default Home;
