import React from 'react';
import Card from "./molecules/CardDetails";

const officeData = [
  {
    region: 'Asia',
    city: 'Kuala Lumpur',
    phone: '+60 3 2789 9038',
    email: 'my@growthops.asia',
    address: 'Level 11, Block B, Plaza Zurich, No. 12, Jalan Gelenggang, Bukit Damansara, 50490 Kuala Lumpur, Malaysia',
  },
  {
    region: 'Asia',
    city: 'Manila',
    phone: '+63 2 7586 4771',
    email: 'man@growthops.asia',
    address: 'KMC Solutions, 5F V Corporate Center, L.P. Leviste, Salcedo Village, Makati City 1227',
  },
  {
    region: 'Asia',
    city: 'Hong Kong',
    phone: '+852 2805 9009',
    email: 'hkg@growthops.asia',
    address: '29/F, Infinitus Plaza, 199 Des Voeux Road Central, Hong Kong',
  },
  {
    region: 'Asia',
    city: 'Singapore',
    phone: '+65 6220 8383',
    email: 'sg@growthops.asia',
    address: '1 Neil Rd, #02-02, Singapore 088804',
  },
  {
    region: 'Middle East',
    city: 'United Arab Emirates',
    phone: '',
    email: '',
    address: 'Building 1, Unit B304, Dubai Design District',
  },
];

const Office = () => {
  return (
    <section className="py-12 md:px-6 min-h-[70vh] relative z-20">
   <h1 className="text-[clamp(2rem,6vw,6rem)] font-extrabold uppercase text-center mb-20">
        Our Offices
        </h1>      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {officeData.map((office, index) => (
          <Card
            key={index}
            region={office.region}
            city={office.city}
            phone={office.phone}
            email={office.email}
            address={office.address}
          />
        ))}
      </div>
    </section>
  );
};

export default Office;
