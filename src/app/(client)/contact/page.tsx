// File: src/app/(client)/contact-us/page.tsx

import React from "react";
import { Title, SubText } from "@/components/ui/text";
import SocialIcons from "@/components/SocialIcons";

const ContactUsPage = () => (
  <div className="px-3 py-2 flex flex-col gap-4 w-full lg:w-[80%] mx-auto lg:mt-10 lg:flex lg:flex-row lg:gap-5">
    <div>
      <div>
        <Title>Contact Us</Title>
        <SubText>
          We’re here to help! If you have any questions, feedback, or need
          assistance, please reach out to us using any of the methods below.
        </SubText>
      </div>

      <div>
        <Title className="text-lg">Customer Support</Title>
        <SubText>
          <ul className="list-disc ml-5">
            <li>
              <b>Email:</b>{" "}
              <a
                href="mailto:support@leniant.xyz"
                className="text-leniant underline"
              >
                support@leniant.xyz
              </a>
            </li>
            <li>
              <b>Phone:</b>{" "}
              <a href="tel:+8801234567890" className="text-leniant underline">
                +880 1234-567890
              </a>
            </li>
          </ul>
        </SubText>
      </div>

      <div>
        <Title className="text-lg">Business Hours</Title>
        <SubText>
          <ul className="list-disc ml-5">
            <li>Saturday – Thursday: 10:00 AM – 8:00 PM</li>
            <li>Friday: Closed</li>
          </ul>
        </SubText>
      </div>

      <div>
        <Title className="text-lg">Visit Us</Title>
        <SubText>
          <ul className="list-disc ml-5">
            <li>
              <b>Address:</b> 123, Your Street Name, Dhaka, Bangladesh
            </li>
          </ul>
        </SubText>
      </div>
    </div>

    <div><div>
      <Title className="text-lg">Send Us a Message</Title>
      <SubText>
        <form className="flex flex-col gap-3 mt-2 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border rounded px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="border rounded px-3 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-leniant hovereffect cursor-pointer font-medium text-white px-4 py-2 rounded hover:-translate-y-0.5"
            disabled
            title="Form submission coming soon"
          >
            Send Message
          </button>
          <span className="text-xs text-gray-500">
            * Direct form submission coming soon. Please use email for urgent
            queries.
          </span>
        </form>
      </SubText>
    </div>

    <div>
      <Title className="text-lg">Social Media</Title>
      <SocialIcons
        className="mt-0"
        iconClassname="text-leniant"
        tooltipClassname="bg-leniant text-white"
      />
    </div></div>
  </div>
);

export default ContactUsPage;
