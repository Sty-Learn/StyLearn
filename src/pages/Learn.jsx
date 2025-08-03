import React from "react";
import { RiBook2Fill } from "react-icons/ri";
import { IoTimeSharp } from "react-icons/io5";
import { BiSolidSkipPreviousCircle } from "react-icons/bi";
import { BiSolidSkipNextCircle } from "react-icons/bi";

const Learn = () => {
  return (
    <main className="text-white w-[90%] mx-auto h-[85vh]  overflow-y-scroll flex justify-between items-baseline no-scrollbar">
      <div className="lg:w-[70%] md:w-[70%] w-[100%] py-6 pr-6">
        <div className="border-b border-white/60 py-4 flex items-center justify-between">
          <h2 className="flex items-center lg:text-[24px] md:text-[24px] text-[18px] font-Lora font-[800]">
            <RiBook2Fill className="mr-2" /> Module One
          </h2>
          <p className="flex items-center">
            <IoTimeSharp className="mr-2" /> 7 mins
          </p>
        </div>
        <h2 className="text-[18px] font-[700] my-8" id="overview">
          Overview of Layer 2 Solutions and Rollups.
        </h2>
        <p>
          Layer 2 (L2) solutions are protocols built on top of Layer 1 (L1)
          blockchains like Ethereum. They aim to address the scalability
          challenges of L1 by offloading some computational and transactional
          work while maintaining security via the main chain. Rollups are one of
          the most popular L2 solutions today.
        </p>
        <div className="my-4">
          <p className="font-bold mb-2" id="why2"> Why Layer 2 Solutions?</p>
          <p className="mb-4">
            Layer 1 blockchains, such as Ethereum, face challenges like:
          </p>
          <ul className="list-disc">
            <li className="mb-2">High Gas Fees: Due to network congestion.</li>
            <li className="mb-2">
              Low Throughput: Limited number of transactions per second (TPS).
            </li>
            <li className="mb-2">
              Scalability Bottlenecks: As demand grows, L1 cannot handle the
              load efficiently.
            </li>
          </ul>

          <p>
            Layer 2 solutions solve these problems by moving transaction
            execution off-chain while leveraging L1 for security and
            decentralization.
          </p>
        </div>
        <div className="my-4" id="types1">
          <p className="font-bold mb-2"> Types of Layer 2 Solutions</p>
          <ul className="list-disc">
            <li className="mb-2">State chains</li>
            <li className="mb-2">Side Chains</li>
            <li className="mb-2">Roll Ups</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="font-bold mb-2" id="rollup">What Are Rollups?</p>
          <p className="mb-4">
            Rollups "roll up" multiple transactions into a single batch and
            submit the result to L1. This reduces gas costs and increases
            throughput. They maintain security by posting data or cryptographic
            proofs to L1.
          </p>
          <p className="font-bold mb-2" id="type2">Types of Rollups</p>
          <p className="mb-4 font-[500]">Optimistic Rollups</p>
          <ul className="list-disc">
            <li className="mb-2">Assume transactions are valid by default.</li>
            <li className="mb-2">
              Use fraud proofs to challenge invalid transactions.
            </li>
            <li className="mb-2">Examples: Arbitrum, Optimism.</li>
          </ul>
          <p className="mb-4 font-[500]">Zero-Knowledge (ZK) Rollups</p>
          <ul className="list-disc">
            <li className="mb-2">
              Use cryptographic proofs (ZK-SNARKs or ZK-STARKs) to verify
              transactions.
            </li>
            <li className="mb-2">
              Offer faster finality but require more computational resources.
            </li>
            <li className="mb-2">Examples: zkSync, StarkNet.</li>
          </ul>
        </div>
        <div className="my-4">
          <p className="font-bold mb-2" id="why">Why Layer 2 and Rollups Matter</p>
          <ul className="list-disc">
            <li className="mb-2">
              They pave the way for Ethereum's mass adoption by solving the
              scalability trilemma (decentralization, security, scalability).
            </li>
            <li className="mb-2">
              Rollups allow dApps to handle millions of users efficiently
              without compromising security.
            </li>
            <li className="mb-2">
              Cost Efficiency: Lower gas fees per transaction.
            </li>
          </ul>
          <p className="font-bold mb-2">Conclusion</p>
          <p className="mb-4">
            Layer 2 solutions like rollups are transforming blockchain
            scalability. As a developer or enthusiast, understanding these tools
            is critical to building the future of decentralized applications.
          </p>
        </div>
        <div>
          <h2 className="lg:text-[24px] md:text-[24px] text-[18px] font-Lora font-[800] border-b border-white/60 py-4 mb-4">
            Video Links
          </h2>
          <a
            href="https://www.youtube.com/watch?v=iTKSwf6je5g"
            target="_blank"
            className="border-b border-white/70"
          >
            Youtube Link
          </a>
        </div>
        <div className="my-4 flex justify-between">
          <button className="py-3 px-6 bg-[#FF8F00] rounded-lg text-dark mr-3">
            Back
          </button>
          <button className="py-3 px-6 bg-[#00FFDD] rounded-lg text-dark">
            Next
          </button>
        </div>
      </div>
      <div className="border-l border-white/20 pl-8 flex flex-col lg:w-[25%] md:w-[25%] w-[100%]">
        <p className="font-bold text-2xl mb-6">On this page</p>
        <a href="#overview" className="my-3">
          Overview of Layer 2 Solutions and Rollups.
        </a>
        <a href="why2" className="my-3">
          Why Layer 2 Solutions?
        </a>
        <a href="#types1" className="my-3">
          Types of Layer 2 Solutions
        </a>
        <a href="#rollup" className="my-3">
          What Are Rollups?
        </a>
        <a href="#type2" className="my-3">
          Types of Rollups
        </a>
        <a href="#why" className="my-3">
          Why Layer 2 and Rollups Matter
        </a>
      </div>
    </main>
  );
};

export default Learn;
