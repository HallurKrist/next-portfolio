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
            path={"Wizards.jpg"}
            title={"Unnamed Project"}
            description={
              "This final project for my MSc in Games is an ongoing exploration of game design methodologies through a cooperative 3D puzzle-platformer. We first created a design process based on existing literature, applied it to a prototype, and are now analyzing its effectiveness."
            }
            tags={["Unity", "Design", "Solo-Programmer", "MSc-Project"]}
            link={
              "https://github.com/Mikool42/Thesis-2025/tree/main"
            }
          ></Card>
          <Card
            path="Death.png"
            title="Soul Scyphon"
            description="As part of my MSc course 'Game World Design' I made a game in 9 person team centered around conveying a world different from our own."
            tags={["Gloomy", "Unity", "Side Scroller", "Agile"]}
            link="https://acidk0re.itch.io/soul-scyphon"
          ></Card>
          <Card
            path="FrogRush.gif"
            title="Huge Frog Simulation"
            description="This final project for the 'High-Performance Game Programming' course, developed with two others, explores Unity’s DOTS framework by simulating numerous frog entities that jump and collide with a player-controlled car, allowing us to analyze performance bottlenecks in collision detection and physics."
            tags={["C#", "Unity", "DOTS", "ECS", "Performance"]}
            link="https://github.com/NickVanzo/HPGP-FrogsAndShrek"
          ></Card>
          <Card
            path={"ProjectEco.png"}
            title={"Project Eco"}
            description={
              "This final project for the 'Making Games' course, developed with 5 others, explores collective action in the climate crisis through gameplay. The game’s antagonist—a corporation exploiting land and resources—pushes players to discuss and take action, framing the climate crisis as a sociopolitical issue rather than just an environmental one."
            }
            tags={["Godot", "C#", "2D", "Procedural Content"]}
            link={"https://github.com/MakingGamesFinalProject/GameProject"}
          ></Card>
          <Card
            path="tetris.jpg"
            title="Tetris Clone"
            description="As my first look into GameDevelopment I made a Tetris clone that admittedly did not stand the test of time and was made to run using 'Adobe Flash'."
            tags={["Javascript", "Html", "CSS", "Nostalgia", "First-Try"]}
            link={
              "./"
            }
          ></Card>
          <div className="group relative rounded-xl overflow-hidden my-auto mx-auto w-[350px]"></div>
        </div>
      </div>
    </>
  );
}