// File: src/app/(client)/terms-condition/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";

const TermsConditionPage = () => (
  <div className="px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto lg:mt-10">
    <div>
      <Title>Terms and Conditions</Title>
      <SubText>
        By making a purchase from us, you agree to the following terms and conditions. Please read them carefully.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Intellectual Property</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>
            All content on Leniant, including text, graphics, logos, and software, is the property of Leniant and is protected by copyright laws.
          </li>
          <li>
            The information provided on this site may only be used for personal and non-commercial purposes.
          </li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">User Conduct</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>
            You agree not to use Leniant for any unlawful purpose or to engage in any activity that disrupts the service.
          </li>
          <li>
            You must not attempt to gain unauthorized access to any part of the website or its systems.
          </li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Disclaimer</Title>
      <SubText>
        Leniant is provided "as is" without warranty of any kind. We do not guarantee that the website will be error-free or uninterrupted.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Limitation of Liability</Title>
      <SubText>
        Leniant will not be liable for any damages arising from the use or inability to use the website or its products.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Governing Law</Title>
      <SubText>
        These terms are governed by the laws of Bangladesh. Any disputes will be resolved in accordance with local laws.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Changes to Terms</Title>
      <SubText>
        We reserve the right to modify these terms at any time. Changes will be posted on this page and are effective immediately.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Questions?</Title>
      <SubText>
        If you have any questions about our terms and conditions, please <a href="/contact-us" className="text-leniant underline">contact us</a>.
      </SubText>
    </div>
  </div>
);

export default TermsConditionPage;