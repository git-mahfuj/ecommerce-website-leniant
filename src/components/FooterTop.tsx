import React from "react";
import Container from "./Container";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";

const FooterTop = () => {
  const footertopdata = [
    {
      id: 1,
      title: "Visit Us",
      des: "123, Your Street Name, Dhaka, Bangladesh",
      icon: <MapPin />,
    },
    {
      id: 2,
      title: "Call Us",
      des: "+880 1234-567890",
      icon: <PhoneCall />,
    },
    {
      id: 3,
      title: "Working Hours",
      des: "Sat–Thu: 10:00 AM – 8:00 PM\nFriday: Closed",
      icon: <Clock />,
    },
    {
      id: 4,
      title: "Email Us",
      des: "support@leniant.xyz",
      icon: <Mail />,
    },
  ];
  return (
    <div className="border-t border-gray-200 mt-2">
      <Container className="border-b lg:w-[90%] mx-auto pb-8">
        <div className="grid grid-cols-2 justify-center items-center w-full px-7 pt-6 gap-7 md:w-[70%] mx-auto lg:grid-cols-4 md:gap-12 lg:justify-around lg:gap-23">
          {footertopdata?.map((i) => (
            <div key={i.id} className="flex items-center gap-2">
              <div>{i.icon}</div>
              <div>
                <p className="font-medium">{i.title}</p>
                <p className="">{i.des}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FooterTop;
