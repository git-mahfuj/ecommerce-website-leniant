// File: src/app/(client)/privacy-policy/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";

const PrivacyPolicyPage = () => (
  <div className="px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto lg:mt-10">
    <div>
      <Title>Privacy Policy</Title>
      <SubText>
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Information We Collect</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li><b>Personal Information:</b> Name, address, email, phone number, and payment details when you place an order.</li>
          <li><b>Usage Data:</b> Information about how you use our website, such as pages visited and products viewed.</li>
          <li><b>Cookies:</b> We use cookies to enhance your browsing experience and analyze site traffic.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">How We Use Your Information</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>To process and fulfill your orders.</li>
          <li>To communicate with you about your orders, products, or promotions.</li>
          <li>To improve our website and services.</li>
          <li>To comply with legal obligations.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">How We Protect Your Information</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>We implement security measures to protect your data from unauthorized access.</li>
          <li>Your payment information is processed securely and is not stored on our servers.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Sharing Your Information</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>We do not sell or rent your personal information to third parties.</li>
          <li>We may share your information with trusted partners (such as payment processors and delivery services) only as necessary to fulfill your order.</li>
          <li>We may disclose information if required by law.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Your Rights</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>You can request access to, correction, or deletion of your personal information at any time.</li>
          <li>Contact us at <a href="mailto:support@leniant.xyz" className="text-leniant underline">support@leniant.xyz</a> for any privacy-related requests.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Changes to This Policy</Title>
      <SubText>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Questions?</Title>
      <SubText>
        If you have any questions about our privacy policy, please <a href="/contact-us" className="text-leniant underline">contact us</a>.
      </SubText>
    </div>
  </div>
);

export default PrivacyPolicyPage;