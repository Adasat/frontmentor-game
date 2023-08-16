'use client'
import Image from 'next/image';
import { useState } from 'react';
import bgTriangle from '../../public/bg-triangle.svg'
import paperIcon from '../../public/icon-paper.svg'

export default function Home() {
  const [score, setScore] = useState(0)
  return (
    <>
      <div className="flex flex-col justify-center items-center sm:w-full md:w-3/5 p-20">
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

          <div
            className="flex flex-wrap w-4/5 h-4/5 justify-center  bg-contain bg-center bg-no-repeat mt-36"
            style={{
              backgroundImage: `url(${bgTriangle.src})`,
              height: "200px",
            }}
          >
            <div className="flex justify-center items-center w-6/12 rounded-xl bg-paper1">
              <Image src={paperIcon} width={100} height={100} alt='Paper icon' />
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
