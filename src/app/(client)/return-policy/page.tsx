// File: src/app/(client)/return-policy/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";

const ReturnPolicyPage = () => (
  <div className="px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto lg:mt-10">
    <div>
      <Title>Return Policy</Title>
      <SubText>
        We want you to be completely satisfied with your purchase from Leniant. If you are not satisfied, you may be eligible to return your item(s) under the following conditions:
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Eligibility for Returns</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>Returns must be requested within <b>7 days</b> of receiving your order.</li>
          <li>Items must be unused, unwashed, and in their original packaging with all tags attached.</li>
          <li>Sale or discounted items are <b>not eligible</b> for return unless defective or damaged.</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">How to Initiate a Return</Title>
      <SubText>
        <ol className="list-decimal ml-5">
          <li>Contact our customer service at <a href="mailto:support@leniant.xyz" className="text-leniant underline">support@leniant.xyz</a> or via our <a href="/contact-us" className="text-leniant underline">Contact Us</a> page.</li>
          <li>Provide your order number, the item(s) you wish to return, and the reason for return.</li>
          <li>Our team will review your request and provide instructions for returning your item(s).</li>
        </ol>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Refunds</Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li>Once we receive and inspect your returned item(s), we will notify you of the approval or rejection of your refund.</li>
          <li>If approved, your refund will be processed to your original payment method within 7 business days.</li>
          <li>Shipping fees are non-refundable unless the return is due to our error (e.g., wrong or defective item).</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Exchanges</Title>
      <SubText>
        We only replace items if they are defective or damaged. If you need to exchange an item for the same product, please contact us.
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Questions?</Title>
      <SubText>
        If you have any questions about our return policy, please <a href="/contact-us" className="text-leniant underline">contact us</a>.
      </SubText>
    </div>
  </div>
);

export default ReturnPolicyPage;