import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Cristina Catana Buca',
    position: 'Founder & CEO',
    image: '/members/member1.png',
    description: 'Founder of K-12 school, specialized in management, with over 20 years of experience in education and project management, handling budgets of over $30M.',
  },
  {
    name: 'DrDelphi',
    position: 'CTO',
    image: '/members/member2.png',
    description: 'Entrepreneur and software developer for crypto market.',
  },
  {
    name: 'Anthony Capitancescu',
    position: 'CFO',
    image: '/members/member3.png',
    description: 'Graduated of a prestigious Swiss university, with 7 years of active investments in the crypto sector, and the developer of an educational program for investors.',
  },
  {
    name: 'Cora Gabriela Sanda',
    position: 'Pilot Franchise CEO',
    image: '/members/member4.png',
    description: 'History teacher and co-founder of the Romanian-British School in Craiova. Dedicated to modern education, Sanda continues to teach history, linking past lessons to present challenges, and preparing students for the future.',
  },
  {
    name: 'Bogdan Paraschiv',
    position: 'COO',
    image: '/members/member5.png',
    description: 'Specialist in operational scaling and franchise management.',
  },
  {
    name: 'Alin Mecheanci',
    position: 'Cybersecurity',
    image: '/members/member6.png',
    description: 'Entrepreneur and cybersecurity enthusiast, the founder of CHENIST Cybersecurity, a startup focused on building secure platforms and fostering strong teams and cultures.',
  },
  {
    name: 'Sever Moldovean',
    position: 'Advisor',
    image: '/members/member7.png',
    description: 'IT professional with 20 years of experience in service delivery. He worked in IT leadership roles at OMV Petrom before joining the MultiversX Network as a Project Manager, focusing on blockchain technology.',
  },
  {
    name: 'Petri Marin-Voicu',
    position: 'Advisor',
    image: '/members/member8.png',
    description: 'Co-Founder of Seed Captain, serial entrepreneur, advisor in top-notch projects using AI and blockchain, angel investor.',
  },
  {
    name: 'Horatiu Popescu',
    position: 'Advisor',
    image: '/members/member9.png',
    description: 'CEO at SIADYR, the first crypto donations platform on the blockchain, entrepreneur and crypto investor.',
  },
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container px-6 mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-primary">
          Meet Our Team
        </h2>
        <p className="mb-12 text-center text-gray-600">
          Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 bg-[#FAFAFA] rounded-lg shadow-md text-center h-[28rem] w-full max-w-xs mx-auto">
              <img
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 text-lg font-semibold text-primary">
                {member.name}
              </h3>
              <p className="font-medium text-gray-600">{member.position}</p>
              <p className="mt-4 text-sm text-gray-500">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
