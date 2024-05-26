import Link from "next/link";
import AboutPhase from "./AboutPhase";
import AboutPhaseWithSubPhases from "./AboutPhaseWithSubPhases";
import AboutSubPhase from "./AboutSubPhase";
import { ChevronRight } from "lucide-react";
import AboutPhaseOneIllustration from "@/components/vector-graphics/AboutPhaseOneIllustration";
import AboutPhaseTwoIllustration from "@/components/vector-graphics/AboutPhaseTwoIllustration";
import AboutPhaseThreeIllustration from "@/components/vector-graphics/AboutPhaseThreeIllustration";

export default function AboutPhases() {
  return (
    <div className={"w-full flex flex-col items-center justify-center"}>
      <div className={"w-full flex justify-center bg-light-background-200"}>
        <AboutPhase
          step="0"
          title="Start a project"
          description="Select your cleaning location, snap some before pictures, and complete the required information. Then, simply relax and watch your environment getting cleaned"
          addon={
            <Link
              href={"/projects/create"}
              className={"flex items-center text-hyperlink"}
            >
              <div>Start a project now</div>
              <ChevronRight />
            </Link>
          }
        />
      </div>
      <div className={"w-full flex justify-center"}>
        <AboutPhaseWithSubPhases
          step="1"
          title="Donate"
          illustration={<AboutPhaseOneIllustration />}
        >
          <AboutSubPhase
            substep="a"
            title="Find a cause you care about"
            description="Browse through a variety of cleanup projects and choose one that resonates with you."
          />
          <AboutSubPhase
            substep="b"
            title="Donate with confidence"
            description="Donation goes directly towards supporting volunteers working tirelessly to clean up our environment."
          />
          <AboutSubPhase
            substep="c"
            title="Scale up impact"
            description="Your donation helps volunteers tackle complex environmental challenges and make bigger strides towards a cleaner planet."
          />
        </AboutPhaseWithSubPhases>
      </div>
      <div className={"w-full flex justify-center bg-light-background-200"}>
        <AboutPhaseWithSubPhases
          step="2"
          title="Volunteer"
          illustration={<AboutPhaseTwoIllustration />}
        >
          <AboutSubPhase
            substep="a"
            title="Find a project near you"
            description="Search for cleanup initiatives happening in your local area and lend a helping hand."
          />
          <AboutSubPhase
            substep="b"
            title="Connect with Local Volunteers"
            description="Find and connect with passionate volunteers in your area through project-specific group chats."
          />
          <AboutSubPhase
            substep="c"
            title="Collaborate and Plan"
            description="Discuss logistics, brainstorm ideas, and coordinate cleanup efforts with other volunteers involved in the same project."
          />
        </AboutPhaseWithSubPhases>
      </div>
      <div className={"w-full flex justify-center"}>
        <AboutPhaseWithSubPhases
          step="3"
          title="Execute"
          illustration={<AboutPhaseThreeIllustration />}
        >
          <AboutSubPhase
            substep="a"
            title="Make a Real Impact"
            description="Roll up your sleeves and directly contribute to a cleaner environment. Witness firsthand the positive change your efforts create in your community."
          />
          <AboutSubPhase
            substep="b"
            title="Become Part of a Community"
            description="Work with like-minded individuals who share your passion for environmental protection. Build friendships and a strong support network as you work together towards a common goal."
          />
          <AboutSubPhase
            substep="c"
            title="Become an Eco-Warrior"
            description="Experience the thrill of hands-on environmental action. Witness the transformation unfold as you remove litter, clear debris, and restore beauty to neglected spaces."
          />
        </AboutPhaseWithSubPhases>
      </div>
      <div className={"w-full flex justify-center bg-light-background-200"}>
        <AboutPhaseWithSubPhases step="4" title="Earn rewards">
          <AboutSubPhase
            substep="a"
            title="Unlock badges and rewards"
            description="As you participate by creating projects, donating, or volunteering, earn badges and rewards that highlight your commitment."
          />
          <AboutSubPhase
            substep="b"
            title="Climb the leaderboard"
            description="See how you stack up against other eco-warriors and strive to make an even bigger impact!"
          />
          <AboutSubPhase
            substep="c"
            title="Spreading Awareness"
            description="Share your experiences, project updates, and environmental tips on social media. Raise awareness and inspire others to join the movement."
          />
        </AboutPhaseWithSubPhases>
      </div>
    </div>
  );
}
