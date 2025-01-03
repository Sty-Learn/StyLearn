import React from "react";

const Curriculum = () => {
  return (
    <section className="absolute top-24 bg-dark py-12 px-10 lg:w-[70%] md:w-[80%] right-24 z-50 rounded-lg ">
      <div className="flex justify-between border-t border-white pt-8">
        <div className="lg:w-[30%] md:w-[30%] w-[100%]">
          <h2 className="mb-4 font-[700] font-lora">
            Module 1: Fundamentals of Arbitrum and Stylus
          </h2>
          <p className="my-2 font-[700] font-Lora">
            Introduction to Arbitrum Ecosystem
          </p>
          <ul className="list-disc text-[14px]">
            <li>Overview of Layer 2 solutions and rollups.</li>
            <li>Arbitrum One, Nova, and Orbit explained.</li>
            <li>
              Why Stylus? Benefits of WASM (WebAssembly) in smart contracts.
            </li>
          </ul>
          <p className="my-2 font-[700] font-Lora">WASM Basics</p>
          <ul className="list-disc text-[14px]">
            <li>Install dependencies (Rust, C, or Go toolchains for WASM).</li>
            <li>Set up an Arbitrum node or connect to an existing one.</li>
            <li>Explore Arbitrum Stylus documentation.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">Technical Setup</p>
          <ul className="list-disc text-[14px]">
            <li>What is WASM, and why does it matter?</li>
            <li>
              Overview of languages compatible with WASM (e.g., Rust, C, C++).
            </li>
            <li>Compile a basic Rust or Go program to WASM.</li>
          </ul>
        </div>
        <div className="lg:w-[30%] md:w-[30%] w-[100%]">
          <h2 className="mb-4 font-[700] font-lora">
            Module 2: Developing Smart Contracts with Stylus
          </h2>
          <p className="my-2 font-[700] font-Lora">Writing Stylus Contracts</p>
          <ul className="list-disc text-[14px]">
            <li>Syntax differences between Stylus and Solidity.</li>
            <li>Build your first Stylus smart contract.</li>
            <li>Test deployment on the Arbitrum testnet.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">
            Integrating WASM into Contracts
          </p>
          <ul className="list-disc text-[14px]">
            <li>
              Create a WASM module and integrate it into a Stylus contract.
            </li>
            <li>Optimize for performance.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">Contract Testing</p>
          <ul className="list-disc text-[14px]">
            <li>
              Use testing tools like Hardhat, Foundry, or Arbitrum's native
              tools.
            </li>
            <li>Write unit tests for Stylus contracts.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">
            Interoperability with Solidity{" "}
          </p>
          <ul className="list-disc text-[14px]">
            <li>
              Call Stylus contracts from Solidity contracts and vice versa.
            </li>
            <li>Handle cross-language contract data.</li>
          </ul>
        </div>
        <div className="lg:w-[30%] md:w-[30%] w-[100%]">
          <h2 className="mb-4 font-[700] font-lora">
            Module 3: Developing Smart Contracts with Stylus
          </h2>
          <p className="my-2 font-[700] font-Lora">Writing Stylus Contracts</p>
          <ul className="list-disc text-[14px]">
            <li>Syntax differences between Stylus and Solidity.</li>
            <li>Build your first Stylus smart contract.</li>
            <li>Test deployment on the Arbitrum testnet.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">
            Integrating WASM into Contracts
          </p>
          <ul className="list-disc text-[14px]">
            <li>
              Create a WASM module and integrate it into a Stylus contract.
            </li>
            <li>Optimize for performance.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">Contract Testing</p>
          <ul className="list-disc text-[14px]">
            <li>
              Use testing tools like Hardhat, Foundry, or Arbitrum's native
              tools.
            </li>
            <li>Write unit tests for Stylus contracts.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">
            Interoperability with Solidity{" "}
          </p>
          <ul className="list-disc text-[14px]">
            <li>
              Call Stylus contracts from Solidity contracts and vice versa.
            </li>
            <li>Handle cross-language contract data.</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <div className="lg:w-[30%] md:w-[30%] w-[100%]">
          <h2 className="mb-4 font-[700] font-lora">
            Module 4: Real-World Applications
          </h2>
          <p className="my-2 font-[700] font-Lora">Build a Stylus DApp</p>
          <ul className="list-disc text-[14px]">
            <li>Create a simple DeFi app (e.g., token swap) using Stylus.</li>
            <li>Deploy and test it on Arbitrum One.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">
            High-Performance Smart Contracts
          </p>
          <ul className="list-disc text-[14px]">
            <li>
              Build a high-frequency trading bot or on-chain game using Stylus.
            </li>
          </ul>
          <p className="my-2 font-[700] font-Lora">
            Integration with Frontends
          </p>
          <ul className="list-disc text-[14px]">
            <li>
              Connect your Stylus contracts to a React or Next.js frontend.
            </li>
            <li>Test user interactions.</li>
          </ul>
        </div>
        <div className="lg:w-[30%] md:w-[30%] w-[100%]">
          <h2 className="mb-4 font-[700] font-lora">
            Module 5: Advanced Topics
          </h2>
          <p className="my-2 font-[700] font-Lora">Arbitrum Nova and Orbit</p>
          <ul className="list-disc text-[14px]">
            <li>Deploy Stylus contracts on Nova.</li>
            <li>Explore Orbit for customized chains.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">ZK-Proofs with Stylus</p>
          <ul className="list-disc text-[14px]">
            <li>Leverage Stylus for zk-enabled dApps.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">Security Best Practices</p>
          <ul className="list-disc text-[14px]">
            <li>Audit Stylus contracts using established tools.</li>
            <li>Common pitfalls and how to avoid them.</li>
          </ul>
        </div>
        <div className="lg:w-[30%] md:w-[30%] w-[100%]">
          <h2 className="mb-4 font-[700] font-lora">
            Module 6: Community Engagement and Contributions
          </h2>
          <p className="my-2 font-[700] font-Lora">
            Participate in Ecosystem Events
          </p>
          <ul className="list-disc text-[14px]">
            <li>Join Arbitrum hackathons and workshops.</li>
            <li>Engage with Stylus developer communities.</li>
          </ul>
          <p className="my-2 font-[700] font-Lora">Contribute to Open Source</p>
          <ul className="list-disc text-[14px]">
            <li>
              Identify areas in Arbitrum or Stylus projects to contribute.
            </li>
            <li>Build and publish a Stylus template for the community.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
