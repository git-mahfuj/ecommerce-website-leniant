// File: src/app/(client)/about-us/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";

const AboutUsPage = () => (
  <div className="px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto lg:mt-10">
    <div>
      <Title>About Us</Title>
      <SubText>
        Welcome to Leniant! We are passionate about helping you discover the perfect fit for your style and elevating your wardrobe with quality, fashionable products.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Our Story</Title>
      <SubText>
        Leniant was founded with a simple mission: to make stylish, high-quality fashion accessible to everyone. We carefully curate our collections to ensure you always find something unique, trendy, and comfortable.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">What We Offer</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>Wide range of traditional and modern clothing, including Sharee, Salowar Kameez, Scarves, and more.</li>
          <li>Exclusive collections for special occasions and everyday wear.</li>
          <li>Easy and secure online shopping experience.</li>
          <li>Fast delivery and dedicated customer support.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Our Commitment</Title>
      <SubText>
        We are committed to providing exceptional value, quality, and service. Your satisfaction is our top priority, and we strive to make every shopping experience with Leniant enjoyable and hassle-free.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Why Choose Leniant?</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>Curated collections with the latest trends and timeless classics.</li>
          <li>Transparent pricing and clear return/delivery policies.</li>
          <li>Responsive customer support for all your queries.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Connect With Us</Title>
      <SubText>
        We love hearing from our customers! If you have any questions, feedback, or suggestions, please <a href="/contact-us" className="text-leniant underline">contact us</a> or follow us on social media.
      </SubText>
    </div>
  </div>
);

export default AboutUsPage;