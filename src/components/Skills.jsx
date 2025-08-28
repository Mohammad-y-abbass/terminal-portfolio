import React from "react";

const Skills = () => {
  return (
    <div className="space-y-2">
      <p className="text-yellow-300 font-bold">Technical Skills</p>

      <div>
        <p className="text-violet-400">Programming Languages:</p>
        <p>JavaScript, TypeScript, Java, Python, Go, SQL, C, C#</p>
      </div>

      <div>
        <p className="text-violet-400">Frameworks & Libraries:</p>
        <p>
          React.js, Next.js, Angular, Express.js, Nest.js, Spring Boot, Tailwind
          CSS, Jest
        </p>
      </div>

      <div>
        <p className="text-violet-400">Databases & ORMs:</p>
        <p>PostgreSQL, MySQL, MongoDB, Prisma, Hibernate, JPA</p>
      </div>

      <div>
        <p className="text-violet-400">Tools:</p>
        <p>Git, GitHub, GitHub Actions, Docker, Selenium</p>
      </div>

      <div>
        <p className="text-violet-400">Runtime Environment:</p>
        <p>NodeJs</p>
      </div>
    </div>
  );
};

export default Skills;
