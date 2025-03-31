import Header from "@/app/components/header"
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/../public/placeholder.jpg";

export default function About() {
  return (
    <>
    <Header></Header>
      <div className="text-white py-16 flex gap-16" id="about">
        <div className="md:grid  grid-cols-2  [&>*]:rounded-xl [&>*]:border-solid gap-4 [&>*]:border-2 [&>*]:border-white h-0 hidden  ">
          <Image className="" src={Placeholder} alt="" width={660}></Image>
          <Image className="" src={Placeholder} alt="" width={660}></Image>
          <Image
            className="col-span-2"
            src={Placeholder}
            alt=""
            width={660}
          ></Image>
        </div>
        <div className="flex flex-col md:px-0 px-4">
          <h1 className=" text-4xl mb-5 font-bold ">Hello World! 👋🌍</h1>
          <p>
          Passionate and skilled game programmer with a strong foundation in game development, quality assurance, and software engineering. Currently completing a Master’s degree in Games (Technology Track) at IT University of Copenhagen, graduating in June 2025. Experienced in game programming, AI systems, graphics, and testing methodologies. Worked as a QA intern at SYBO Games, contributing to the quality and stability of Subway Surfers. Has a keen interest in game design methodologies, having explored how early game prototypes refine both the final game and the development process in a master’s thesis. Adept at problem-solving, debugging, and collaborating with multidisciplinary teams. Seeking a role as a game developer or tester to apply technical expertise and analytical skills to innovative projects.
          </p>
          <div
            className={`flex p-1 px-2 mb-4 bg-white rounded-md mt-6 mr-auto `}
          >
            <a
              className="text-black m-auto font-light"
              href={"Resume.pdf"}
              rel="noopener noreferrer"
              target="_blank"
              download
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}