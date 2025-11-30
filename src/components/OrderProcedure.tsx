// File: src/app/(client)/order-procedure/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";
import NumberBox from "@/components/NumberBox";

const OrderProcedurePage = () => (
  <div className="px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto">
    <div>
      <Title>Order Procedure</Title>
      <SubText>
        Please follow these steps to place your order on Leniant.
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">1</NumberBox>
        Choose Your Product
      </Title>
      <SubText>
        Browse our <a href="/shop" className="text-leniant underline">Shop</a> and select your favorite product.
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">2</NumberBox>
        Add to Cart
      </Title>
      <SubText>
        Click the <b>Add to Cart</b> button on your chosen product.
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">3</NumberBox>
        Proceed to Checkout
      </Title>
      <SubText>
        Click the <b>Checkout</b> button, then enter:
        <ul className="list-disc ml-5">
          <li>Your Name</li>
          <li>Your Address</li>
          <li>Mobile Number</li>
          <li>Select Payment Option (<b>COD</b> / <b>BKASH</b> / <b>NAGAD</b>)</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">4</NumberBox>
        Confirm the Order
      </Title>
      <SubText>
        After submitting, you will receive an order confirmation.
      </SubText>
    </div>

    <div>
      <Title className="inline-flex gap-2 items-center">
        <NumberBox className="bg-leniant rounded-md w-8 h-8 flex items-center justify-center text-white">5</NumberBox>
        Delivery
      </Title>
      <SubText>
        <ul className="list-disc ml-5">
          <li><b>Inside Dhaka:</b> 2-3 working days</li>
          <li><b>Outside Dhaka:</b> 3-5 working days</li>
        </ul>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Questions?</Title>
      <SubText>
        If you have any questions about ordering, please <a href="/contact-us" className="text-leniant underline">contact us</a>.
      </SubText>
    </div>
  </div>
);

export default OrderProcedurePage;