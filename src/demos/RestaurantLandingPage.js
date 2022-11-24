import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import ContactUs from "pages/ContactUs";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Learn without limits <HighlightedText>Site under maintenance</HighlightedText></>}
        description="Professional Courses that offer flexible, online training designed to unlock your best version"
        imageSrc="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?cs=srgb&dl=pexels-katerina-holmes-5905709.jpg&fm=jpg"
        imageCss={imageCss}
        imageDecoratorBlob={true}
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "DATA ENGINEERING",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "DATA SCIENCE",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "CYBERSECURITY",
          }
        ]}

        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <ContactUs />
      <Footer />
    </AnimationRevealPage>
  );
}
