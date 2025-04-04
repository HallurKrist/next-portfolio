import { IoLogoHtml5 } from "react-icons/io5";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoLogoGithub } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaUnity } from "react-icons/fa6";
import { SiUnrealengine } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";

export default function Skills() {
  return (
    <>
      <div className="text-white py-16 px-4 md:px-0" id="skills">
        <h1 className=" text-3xl mb-4 font-bold">Skills</h1>
        <div>
          <h1 className="text-xl mb-2">Frontend</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4  ">
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <IoLogoHtml5 className="size-10"></IoLogoHtml5>
              <p className=" ">HTML</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <DiCss3 className="size-10"></DiCss3>
              <p className=" ">CSS</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <RiTailwindCssFill className="size-10"></RiTailwindCssFill>
              <p className=" ">Tailwind CSS</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <IoLogoJavascript className="size-10"></IoLogoJavascript>
              <p className=" ">JavaScript</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiTypescript className="size-10"></SiTypescript>
              <p className=" ">TypeScript</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaReact className="size-10"></FaReact>
              <p className=" ">React</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiNextdotjs className="size-10"></SiNextdotjs>
              <p className=" ">Next.js</p>
            </div>
          </div>
          <h1 className="text-xl mt-8 mb-2">Backend</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4  ">
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaNodeJs className="size-10"></FaNodeJs>
              <p className=" ">Node.js</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiExpress className="size-10"></SiExpress>
              <p className=" ">Express.js</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <DiPostgresql className="size-10"></DiPostgresql>
              <p className=" ">Postgres</p>
            </div>
          </div>
          <h1 className="text-xl mt-8 mb-2">Languages</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4  ">
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaJava className="size-10"></FaJava>
              <p className=" ">Java</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaC className="size-10"></FaC>
              <p className=" ">C</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiCplusplus className="size-10"></SiCplusplus>
              <p className=" ">C++</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <TbBrandCSharp className="size-10"></TbBrandCSharp>
              <p className=" ">C#</p>
            </div>
          </div>
          <h1 className="text-xl mt-8 mb-2">Tools</h1>
          <div className="text-black rounded-md flex flex-wrap gap-4  ">
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaGitAlt className="size-10"></FaGitAlt>
              <p className=" ">Git</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <IoLogoGithub className="size-10"></IoLogoGithub>
              <p className=" ">GitHub</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaLinux className="size-10"></FaLinux>
              <p className=" ">Linux</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiPostman className="size-10"></SiPostman>
              <p className=" ">Postman</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <FaUnity className="size-10"></FaUnity>
              <p className=" ">Unity</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiUnrealengine className="size-10"></SiUnrealengine>
              <p className=" ">Unreal</p>
            </div>
            <div className="flex p-1 px-2 items-center bg-white rounded-md gap-2">
              <SiGodotengine className="size-10"></SiGodotengine>
              <p className=" ">Godot</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}