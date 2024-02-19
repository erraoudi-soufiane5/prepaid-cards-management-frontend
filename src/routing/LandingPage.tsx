import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";

import ContactSection from "../components/ContactSection";
import FaqSection from "../components/FeqSection";
import ProcessSection from "../components/ProcessSection";
import AboutUsSection from "../components/AboutUsSection";
import BenefitsSection from "../components/BenefitsSection";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <Box>
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        {/* <AboutUsSection /> */}
        <BenefitsSection />
        <FaqSection />
        <ContactSection />
      </Box>
    </>
  );
};

export default LandingPage;
