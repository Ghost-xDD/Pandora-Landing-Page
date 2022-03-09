import React from 'react';
import { Feature } from '../../components';
import './whatPandora.css';

const whatPandora = () => {
  return (
    <div className="pandora__whatpandora section__margin" id="wpandora">
      <div className="pandora__whatpandora-feature">
        <Feature
          title="What is the Pandora Blockchain?"
          text="Pandora is an open-source platform that addresses key barriers facing blockchain adoption for assets and applications backed by a global community of validators, researchers, and builders. By design, Pandora embraces long-term upgradability, open participation, collaboration, and smart contract safety."
        />
      </div>
      <div className="pandora__whatpandora-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="pandora__whatpandora-container">
        <Feature
          title="An Energy-Efficient Algorithm."
          text="Unlike Proof-of-Work blockchains like Bitcoin or Ethereum, Pandora’ Proof-of-Stake requires significantly less energy and cost to operate, making it an ideal alternative platform for building blockchain applications that are eco-friendly."
        />
        <Feature
          title="Pandora VM"
          text="The Pandora Virtual Machine is a dedicated smart contract execution engine built on WASM. It expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript. This means you can write smart contracts in whichever language you’re familiar with, compile it of WASM and easily debug its WAT human readable format."
        />
        <Feature
          title="Institutional Grade Security."
          text="We designed Pandora to provide the safety and code correctness required for assets and other high value use cases at both the protocol and application layers by leveraging languages OCaml and Michelson, which facilitate formal verification, a practice commonly used in mission-critical industries, spanning from nuclear and aerospace to semiconductor and others."
        />
      </div>

      <div className="pandora__whatpandora-container">
        <Feature
          title="Powerfully Scalable."
          text="Pandora is built to remain state-of-the-art. Its modular architecture and formal upgrade mechanism minimizes disruptions while offering regular upgradability and enhanced functionality over time."
        />
        <Feature
          title="Adaptive state sharding"
          text="The optimal approach to blockchain sharding needs to take into consideration advantages from all three sharding types: State, Transactions & Network. Pandora's’s approach to increased throughput, called “Adaptive State Sharding”, combines all three sharding types into a solution that improves communication inside the shards and dramatically increases performance through parallel processing."
        />
        <Feature
          title="User-driven governance"
          text="Pandora has a sophisticated governance system where all stakeholders have a voice. Network upgrades are coordinated on-chain and enacted autonomously and without forking the network, ensuring that Pandora’s development remains future-proof and community-driven."
        />
      </div>
    </div>
  );
};

export default whatPandora;
