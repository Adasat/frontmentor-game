'use client'
import Image from 'next/image';
import { useState } from 'react';
import bgTriangle from '../../public/bg-triangle.svg'

export default function Home() {
  const [score, setScore] = useState(0)
  return (
    <>
      <div className="flex flex-col justify-center items-center md:w-3/5 p-20">
        <div className="flex flex-row justify-between w-4/5 p-4 rounded-lg border-2 border-headerOutline">
          <div className="flex flex-col font-barlow font-bold text-3xl ">
            <span>ROCK</span>
            <span>PAPER</span>
            <span>SCISSORS</span>
          </div>
          <div className="flex flex-col justify-center items-center bg-white w-1/5 rounded-lg">
            <span className="text-scoreText font-barlow font-semibold text-xs">
              SCORE
            </span>
            <span className="text-darkText font-barlow font-bold text-6xl">
              {score}
            </span>
          </div>
        </div>

        <div className="w-4/5 h-4/5">
          <div
            className="flex flex-wrap justify-center items-center bg-contain bg-center bg-no-repeat mt-36"
            style={{
              backgroundImage: `url(${bgTriangle.src})`,
              height: "200px",
            }}
          >
            <div className="w-6/12 bg-yellow-100">
              <button className="bg-scissors1 p-4 rounded-full">
                {/* Contenido del botón */}
              </button>
            </div>
            <div className="w-6/12 bg-blue-100">
              <button className="bg-paper1 p-4 rounded-full">
                {/* Contenido del botón */}
              </button>
            </div>
            <div className="w-6/12 bg-red-100">
              <button className="bg-rock1 p-4 rounded-full">
                {/* Contenido del botón */}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-end">Rules</div>
      </div>

      <div className="text-md text-center ">
        Challenge by{" "}
        <a
          className="text-attribution"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-attribution" href="https://github.com/Adasat">
          Pedro Bonilla
        </a>
        .
      </div>
    </>
  );
}
