import Card from "@/app/components/card";

export default function Projects() {
  return (
    <>
      <div className="py-16" id="projects">
        <h1 className="md:text-6xl text-4xl mb-12 text-white font-bold text-center">
          Projects & Games
        </h1>
        <div className="flex flex-wrap gap-16 h-auto justify-start">
          <Card
            path="Death.png"
            title="Soul Scyphon"
            description="As part of my MSc course 'Game World Design' I made a game in 9 person team centered around conveying a world different from our own."
            tags={["Gloomy", "Unity", "Side Scroller", "Agile"]}
            link="https://acidk0re.itch.io/soul-scyphon"
          ></Card>
          <Card
            path="FrogRush.gif"
            title="Frog Rush"
            description="Using the SimpleRenderEngine (SRE), I extended the engine with a game loop synced with a music track and matching the BPM of a song.
            This was simulated in a rhythm game using Rick Astley's classic songs, with lanes containing nodes that the player needed to hit on time."
            tags={["C++", "SDL", "SRE", "Rhythm", "Engine"]}
            link="https://github.com/Nickromancer/GPRO_ExamProject/tree/main"
          ></Card>
          <Card
            path={"placeholder.jpg"}
            title={"Project Eco"}
            description={
              "A game about a time long ago, where the Analogians lived in a world filled with love, affection and community. Find the Analogians, give them affection and restore love to their world."
            }
            tags={["Unreal", "Nordic GameJam24'", "C++", "Figma"]}
            link={"https://hounsvad.itch.io/analogians"}
          ></Card>
          <Card
            path="placeholder.jpg"
            title="Tetris Clone"
            description="Green-Up is an urban cooling tool that allows urban planners to simulate the temperature in cities based on what kind of elements are in the area, be it buildings or parks. "
            tags={["React", "Scrum", "DevOps", "Docker", "Agile"]}
            link={
              "https://www.linkedin.com/feed/update/urn:li:activity:7089525611995545600/"
            }
          ></Card>
          <Card
            path={"placeholder.jpg"}
            title={"Unnamed Project"}
            description={
              "My first attempt at Godot, the open-source game engine where I completed a small project using the engine's own langauge and conventions"
            }
            tags={["Godot", "GDScript", "Tutorial"]}
            link={
              "https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html"
            }
          ></Card>
          <div className="group relative rounded-xl overflow-hidden my-auto mx-auto w-[350px]"></div>
        </div>
      </div>
    </>
  );
}