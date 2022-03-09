import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Governance',
    text: 'Pandora token holders have complete control over the protocol. All privileges, which on other platforms are exclusive to miners, will be given to the Relay Chain participants ($PAND holders), including managing exceptional events such as protocol upgrades and fixes.',
  },
  {
    title: 'Staking',
    text: 'Game theory incentivizes token holders to behave in honest ways. Good actors are rewarded by this mechanism whilst bad actors will lose their stake in the network. This ensures the network stays secure.',
  },
  {
    title: 'Developers',
    text: 'Pandora supports the most popular programming languages, flexible tools, and comes with clear and canonical documentation. You can quickly start and deploy your application on a blockchain designed with real use in mind.',
  },
  {
    title: 'Smarter Smart Contracts.',
    text: 'Pandora smart contracts can use formal verification, allowing them to be mathematically verified, reliable, and secure.',
  },
];

const Features = () => {
  return (
    <div className="pandora__features section__padding" id="features">
      <div className="pandora__features-heading">
        <h1 className="gradient__text">
          A community governed, ever-evolving technological vision.
        </h1>
      </div>
      <div pandora__features-container>
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
