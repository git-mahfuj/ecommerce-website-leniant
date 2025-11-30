// File: src/app/(client)/delivery-rules/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";
import NumberBox from "@/components/NumberBox";

const DeliveryRulesPage = () => (
  <div className="mt-10 px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto">
    <div>
      <Title>Delivery Rules</Title>
      <SubText>
        Please read our delivery rules carefully before placing your order. Delivery times and charges may vary depending on your location.
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">1</NumberBox>
        Delivery Time
      </Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li><b>Inside Dhaka:</b> 2-3 working days</li>
          <li><b>Outside Dhaka:</b> 3-5 working days</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">2</NumberBox>
        Delivery Charges
      </Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li><b>Inside Dhaka:</b> BDT 80</li>
          <li><b>Outside Dhaka:</b> BDT 130</li>
        </ul>
        <span className="text-xs text-gray-500">* Delivery charges are non-refundable unless the order is canceled by us.</span>
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">3</NumberBox>
        Important Notes
      </Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>Delivery times may vary during holidays or due to unforeseen circumstances.</li>
          <li>We use trusted courier services for all deliveries.</li>
          <li>Please ensure your address and contact number are correct to avoid delivery delays.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Questions?</Title>
      <SubText>
        If you have any questions about our delivery rules, please <a href="/contact-us" className="text-leniant underline">contact us</a>.
      </SubText>
    </div>
  </div>
);

export default DeliveryRulesPage;