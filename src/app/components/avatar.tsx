import Image from "next/image";
import Profile from "@/../public/UopClose.jpg";
import Link from "next/link";

export default function Avatar(props: { collapsed: boolean }) {
  return (
    <>
      <div className="bg-white rounded-full overflow-auto border-solid border-2 border-orange hidden md:inline-block">
        <Link href={"/"}>
          <Image
            src={Profile}
            alt=""
            width={props.collapsed ? 75 : 200}
            height={props.collapsed ? 75 : 200}
            className={`ease-in-out duration-300 rounded-full drop-shadow-profile w-${
              props.collapsed ? "5" : "40"
            }`}
          ></Image>
        </Link>
      </div>
    </>
  );
}