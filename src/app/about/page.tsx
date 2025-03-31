import Header from "@/app/components/header"
import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/../public/placeholder.jpg";
import hallur1 from "@/../public/HikingHallur.jpg";
import hallur2 from "@/../public/RaaftingHallur.jpg";
import hallur3 from "@/../public/TravelHallur.jpg";

export default function About() {
  return (
    <>
    <Header></Header>
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
            Write some stuff about me.
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