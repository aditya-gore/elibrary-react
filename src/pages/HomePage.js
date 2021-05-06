import React from "react";
import { FeaturedBooks, Hero, Services, Contact } from "../components";
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <Services />
    </main>
  );
};

export default HomePage;
