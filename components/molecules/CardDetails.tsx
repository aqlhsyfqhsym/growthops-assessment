import React from "react";
import Image from "next/image";

interface CardProps {
  region: string;
  city: string;
  phone: string;
  email: string;
  address: string;
}

const Card: React.FC<CardProps> = ({ region, city, phone, email, address }) => {
  return (
    <div className="rounded-3xl border border-gray-800 md:px-8 :py-6 p-6 text-white max-w-sm w-full bg-black/80  transition-colors md:my-6">
      <p className="text-sm uppercase font-semibold md:text-gray-400 text-cyan-400">
        {region}
      </p>
      <h3 className="text-lg font-bold text-cyan-400 mb-4">{city}</h3>

      {phone && (
        <div className="flex items-start gap-2 mb-2">
          <Image
            src="/icons/mobile-mobile.svg"
            alt="Phone Mobile"
            width={24}
            height={24}
            className="block sm:hidden"
          />
          <Image
            src="/icons/mobile.svg"
            alt="Phone Web"
            width={24}
            height={24}
            className="hidden sm:block"
          />
          <p className="text-base font-normal">{phone}</p>
        </div>
      )}

      {email && (
        <div className="flex items-start gap-2 mb-2">
          <Image
            src="/icons/email-mobile.svg"
            alt="Email Mobile"
            width={24}
            height={24}
            className="block sm:hidden"
          />
          <Image
            src="/icons/email.svg"
            alt="Email"
            width={24}
            height={24}
            className="hidden sm:block"
          />
          <p className="text-base font-normal">{email}</p>
        </div>
      )}

      <div className="flex items-start gap-2">
        <Image
          src="/icons/pin-mobile.svg"
          alt="pin Mobile"
          width={24}
          height={24}
          className="block sm:hidden"
        />
        <Image
          src="/icons/pin.svg"
          alt="pin"
          width={24}
          height={24}
          className="hidden sm:block"
        />
        <p className="text-base font-normal">{address}</p>
      </div>
    </div>
  );
};

export default Card;
