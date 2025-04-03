import Header from "@/app/components/header";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/skills";

export default function Home() {
  return (
    <div className="HomePage">
      <Projects></Projects>
      <Skills></Skills>
    </div>
  );
}
