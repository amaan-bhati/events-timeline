import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function EventsTimeline() {
  const data = [
    

    {
      title: "ProjectWing - MLSAKIIT - Jan, 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-bold mb-4">
            🚀 Project Wing by Microsoft Learn Student Ambassaddor Club, KIIT:
            Building Ideas, Empowering Innovators
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🎤 The Project Wing of MLSA KIIT was an ambitious initiative to
            declare and develop projects across various technical domains,
            including app development, cloud, ML/AI, web, and more.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            ✨ My Contributions:
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🧠 My Role: As the lead speaker and organizer, I managed all aspects
            of the event - from delivering keynote speeches and technical
            presentations to ensuring smooth operations. I led interactive live
            coding sessions, handled technical Q&A, and was responsible for the
            overall event coordination. My key focus was on:{" "}
          </p>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌐 App Dev & Web Projects: I took charge of deciding projects in
              app development and web domains.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🛠️ AlgoArena: Spearheaded the development and execution of
              AlgoArena, a standout project.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🎤 Presented project vision, tech stack and implementation details
              to attendees
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🤝 Guidance: Explained web tech stacks, addressed doubts, and
              ensured clarity.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🧑‍💻 Recruitment: Interviewed 50+ candidates, recruited 12+ backend,
              frontend, and design team members.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔄 Team Management: Held Agile and Scrum meetings, evaluated
              performance, and selected top contributors for MLSA.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🎉 Team Bonding: Organized fun activities to build team spirit and
              connections.
            </div>
          </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            ✨ Impact: This event was a testament to teamwork, innovation, and
            fostering a thriving technical community at KIIT.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735055754/IMG_20240120_142558_sqojzl.webp"
              alt="hcktbr-img-0"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735052905/IMG_4166_p0rvav.webp"
              alt="hcktbr-img-1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735055277/IMG_3142_ujxygv.webp"
              alt="hcktbr-img-2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735055273/DSC_0055_1_v4u9dc.webp"
              alt="hcktbr-img-3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735058973/IMG_20230905_034023_swrurf.webp"
              alt="hcktbr-img-3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
             <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735058655/IMG_20240131_164851_rq2ujp.webp"
              alt="hcktbr-img-3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Hacktoberfest - MLSAKIIT - Oct, 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-bold mb-4">
            🚀 Hacktoberfest X Microsoft Learn Student Ambassador Club, KIIT
            Chapter 🌟
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🎤 A Mega Open-Source Workshop Like No Other!
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Hacktoberfest X MLSAKIIT brought together 400+ enthusiastic students
            ranging from freshers to final-year pros under one roof, united by
            their curiosity for Open Source.{" "}
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🧠 My Role: I took charge of crowd engagement and delivered an
            interactive live coding session on:{" "}
          </p>

          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🛠️ Git Installation & Setup
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📚 Understanding Git Commands
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌐 Navigating GitHub
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🐞 Creating & Solving Issues
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔄 Making Pull Requests
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🤝 Building Friendly Relations with Maintainers and reviewers
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Conducted fun games and quizes for bettter crowd engagement
            </div>
          </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            ✨ Impact: The most exciting highlight? Over 70+ students created
            their first GitHub accounts and made their first-ever open-source
            contributions - all in real time! 🎯
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735055273/IMG_20240912_112244_b1fayb.webp"
              alt="hcktbr-img-0"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735052906/IMG_4279_1_qfmhay.webp"
              alt="hcktbr-img-1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735052905/IMG_4078_ewjkcr.webp"
              alt="hcktbr-img-2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735052904/IMG_3976_q5vzdl.webp"
              alt="hcktbr-img-3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "The Stark Expo - MLSAKIIT - Sep, 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-bold mb-4">
            ⚡ The Stark Expo: A Marvel-Themed Web Development and Tech Workshop
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            🎤 The Stark Expo, inspired by Marvel&apos;s legendary themes, was a
            one-of-a-kind event that combined the excitement of a workshop and a
            hackathon. This event catered to beginners stepping into the world
            of web development and advanced enthusiasts eager to explore web
            integration with cutting-edge technologies like AI, Web3, and
            Blockchain.
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-bold mb-4">
            ✨ My Contributions:
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            ⚡ My Role: Led the Stark Expo from ideation to execution,
            conceptualizing the Marvel-inspired theme and managing multiple
            teams across content, design, and logistics. As event leader, I
            conducted comprehensive web development seminars covering
            fundamentals through advanced topics like React.js, Next.js, AI, and
            Web3. Working intensively throughout the week, I ensured perfect
            coordination between all aspects of the event. The expo was a major
            success with 2.5K registrations and 1,000 attendees, marking a
            significant milestone in community engagement and leadership.{" "}
          </p>

          <div className="mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              🧠 Ideation & Planning:
            </p>

            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✨Conceived the entire concept of the event, from its name to its
              unique Marvel-inspired theme.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              💡 Pitched the idea to the community and handled relevant inputs
              for better implementation.
            </div>
          </div>

          <div className="mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              🎨 Team Leadership:
            </p>

            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              👥 Led every team within the community, including content
              creation, design, logistics, and execution.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌙 Stayed deeply involved in every team’s preparation, holding
              constant night-long meetings and all-nighters for almost a week.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🤝 Fostered a culture of teamwork and ensured seamless
              collaboration among all members.
            </div>
          </div>

          <div className="mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              🎤 Web Development Seminar:
            </p>
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              💻 Delivered a comprehensive seminar that provided a complete tour
              of web development as a domain. Topics covered included:
            </p>

            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📋 Basics: HTML, CSS, JavaScript, ES6.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🛠️ Frameworks & Libraries: React.js, Next.js.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔄 Development: Frontend and Backend, APIs.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌐 Future Prospects: Web3, Blockchain, AI integration.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🎨 Design Principles: Creating impactful and user-friendly web
              designs.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🌟 Unique Insights: What sets a web developer apart in today’s
              tech ecosystem.
            </div>
          </div>

          <div className="mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              🚀 Event Execution:
            </p>

            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🗓️ Managed week-long event schedule and ensured smooth execution
              of all activities
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📚 Conducted beginner and advanced web development workshops for
              students
            </div>
          </div>

          <div className="mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            📈 Impact:
            </p>

            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🌟 Achieved 2.5K+ registrations and 1,000+ in-person attendees - our most successful event yet.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🎉 Featured on university's official Instagram page celebrating the achievement.
            </div>
          </div>

          <div className="mb-8">
            <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            💡 Personal Growth:
            </p>

            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🏆 This event taught me invaluable lessons in leadership, teamwork, and perseverance.
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
            🌱 The relentless preparation and execution significantly contributed to my personal and professional growth.
            </div>
          </div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            ✨The Stark Expo wasn’t just an event—it was a movement that 🎇 inspired and empowered participants to explore the vast potential of web development. Its success demonstrated the power of creativity, hard work, and community collaboration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735058658/IMG_20230907_184344_hccojc.webp"
              alt="hcktbr-img-0"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735058660/IMG_0012-1_w_ermypt.webp"
              alt="hcktbr-img-1"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735058657/IMG_20230907_191610_bxupf0.webp"
              alt="hcktbr-img-2"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://res.cloudinary.com/dqwbkjfuh/image/upload/v1735058660/IMG_20230906_031232_0989_yw3ohw.webp"
              alt="hcktbr-img-3"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
