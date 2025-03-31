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
          Passionate and skilled game developer completing a Master’s degree in Games (Technology Track) at IT
University of Copenhagen, graduating in June 2025. Experienced in game programming, development
tools, and QA methodologies. Strong problem-solving abilities and a collaborative mindset, with a keen
eye for both software quality and player experience. Seeking a role as a game developer or tester to
contribute technical expertise and analytical skills to innovative game projects.
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