import Image from "next/image";
import hallur1 from "@/../public/hallur_cat.jpg";
import hallur2 from "@/../public/OnStairs.jpg";
import hallur3 from "@/../public/OnAHike.jpg";

export default function About() {
  return (
    <>
      <div className="text-white py-16 flex gap-16" id="about">
        <div className="md:grid  grid-cols-2  [&>*]:rounded-xl [&>*]:border-solid gap-4 [&>*]:border-2 [&>*]:border-white h-0 hidden  ">
          <Image className="" src={hallur1} alt="" width={660}></Image>
          <Image className="" src={hallur2} alt="" width={660}></Image>
          <Image
            className="col-span-2"
            src={hallur3}
            alt=""
            width={660}
          ></Image>
        </div>
        <div className="flex flex-col md:px-0 px-4">
          <h1 className=" text-4xl mb-5 font-bold ">Hello World! 👋🌍</h1>
          <p>
          I am a passionate and skilled game programmer with a strong foundation in game development, quality assurance, and software engineering. I am currently completing a Master’s degree in Games (Technology Track) at IT University of Copenhagen, graduating in June 2025. I have experience in game programming, AI systems, graphics, and testing methodologies. As a QA intern at SYBO Games, I contributed to the quality and stability of Subway Surfers. I have a keen interest in game design methodologies, and my master’s thesis explores how early game prototypes can refine both the final game and the development process. I am adept at problem-solving, debugging, and collaborating with multidisciplinary teams. I am now seeking a role as a game programmer/developer or tester where I can apply my technical expertise and analytical skills to innovative projects.
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