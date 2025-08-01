import React from "react";

const Skills = () => {
  return (
    <div className="space-y-2">
      <p className="text-yellow-300 font-bold">Technical Skills</p>
      <div>
        <p className="text-violet-400">Languages:</p>
        <p>JavaScript, TypeScript, Java, SQL, NoSQL, Go, C#</p>
      </div>
      <div>
        <p className="text-violet-400">Frameworks & Libraries:</p>
        <p>
          React.js, Next.js, AngularJs, NodeJs, Express.js, Spring Boot, Tailwind CSS,
          Jest, Playwright, Unity
        </p>
      </div>
      <div>
        <p className="text-violet-400">Tools:</p>
        <p>Git, GitHub, Selenium, Redis, Docker, Prisma, GitHub Actions</p>
      </div>
      <div>
        <p className="text-violet-400">Databases:</p>
        <p>Postgres, MySQL, MongoDB</p>
      </div>
    </div>
  );
};

export default Skills;
