import Avatar from "@/app/components/avatar"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Header() {
    return (
    <>
    <div
      className={`text-white md:grid md:grid-cols-4 gap-16 pt-6 md:mx-48 ease-in-out duration-300`}
    >
        <div>
          <Avatar collapsed={false}></Avatar>
        </div>
      <div className="col-span-2 flex flex-col px-8 md:px-0">
        <h1 className="text-4xl font-semibold self-center">
          Hallur Kristinn Hallsson
        </h1>
        <h2 className="text-2xl font-extralight mb-5 self-center">
          Game Programmer/Software Developer
        </h2>
        <h3
          className={`font-light text-sm self-center`}
        >
          MSc of Games Student @ The IT University of Copenhagen
        </h3>
        <div
          className={`flex p-1 px-2 mb-4 items-center bg-white rounded-md mt-6 mx-auto `}
        >
          <a className="text-black m-auto font-light" href="/about">
            About Me
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="hidden md:flex flex-col justify-around text-beige text-4xl">
          <a className="flex flex-row" href="https://github.com/HallurKrist">
            <IoLogoGithub className="size-10 hover:text-white duration-100 ease-in-out" />
            <p className="text-4xl px-2">Github</p>
          </a>
          <a className="flex flex-row pt-5" href="https://www.linkedin.com/in/hallur-kristinn-362568232/">
            <FaLinkedin className="size-10 hover:text-white duration-100 ease-in-out" />
            <p className="text-4xl px-2">LinkedIn</p>
          </a>
          
        </div>

        <div
          className={`flex flex-row items-center mx-auto mb-4`}
        >
          <FiMail></FiMail>
          <p className={`mx-auto pl-2 text-sm`}>
            hallurkrist@gmail.com
          </p>
        </div>
      </div>
    </div>
  </>
    );
  }