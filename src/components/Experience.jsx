import React from "react";

const Experience = () => {
  return (
    <div className="space-y-3">
      <p className="text-yellow-300 font-bold">Experience</p>

      {/* Vertex Partners */}
      <div>
        <p className="text-indigo-400 font-bold">
          Frontend Developer | Vertex Partners (Remote)
        </p>
        <p className="text-gray-400">April 2025 – Present</p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            Served as a key frontend developer for{" "}
            <span className="font-medium">Places4Students</span>, a leading
            online marketplace connecting students with off-campus housing.
          </li>
          <li>
            Optimized the platform's performance, accessibility, and SEO to
            achieve Lighthouse scores of 90+ on both desktop and mobile.
          </li>
          <li>
            Engineered a dynamic user dashboard and an interactive map interface
            using Next.js, significantly improving user navigation and
            engagement.
          </li>
          <li>
            Developed a scalable and maintainable frontend architecture to
            ensure long-term stability and ease of future development.
          </li>
        </ul>
      </div>

      {/* 3E Tech */}
      <div>
        <p className="text-indigo-400 font-bold">
          Full Stack Developer Intern | 3E Tech (Beirut, Hybrid)
        </p>
        <p className="text-gray-400">January 2025 – April 2025</p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            Contributed to the development of a full-stack Property Management
            Dashboard, building and integrating key features using TypeScript,
            React, and an Express.js backend.
          </li>
          <li>
            Spearheaded the implementation of a secure, multi-step user form for
            the dashboard with complex validation using React Hook Form and Zod.
          </li>
          <li>
            Engineered a full-stack Learning Management System (LMS) from the
            ground up, featuring a NestJS backend, React frontend, and a
            PostgreSQL database managed with Prisma.
          </li>
          <li>
            Optimized database queries within the LMS to improve performance by
            25% while implementing features like role-based access control.
          </li>
        </ul>
      </div>

      {/* Bracket Technologies */}
      <div>
        <p className="text-indigo-400 font-bold">
          Software Developer | Bracket Technologies
        </p>
        <p className="text-gray-400">May 2024 – August 2024</p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            Engineered a high-performance search engine with dynamic filters for
            a flight/hotel booking platform.
          </li>
          <li>Developed a secure, role-based user registration system.</li>
          <li>
            Collaborated in a team environment to build and scale the platform
            using Bracket, ensuring robust and reliable performance.
          </li>
        </ul>
      </div>

      {/* Big Data Specialist Community */}
      <div>
        <p className="text-indigo-400 font-bold">
          Full Stack Developer (Volunteer) | Big Data Specialist Community
          (Remote)
        </p>
        <p className="text-gray-400">August 2024 – Present</p>
        <ul className="list-disc pl-5 mt-1">
          <li>
            Architected and led the end-to-end development of a full-stack
            platform that aggregates programming courses and coupons from
            various online sources.
          </li>
          <li>
            Engineered the complete application using Next.js for the frontend
            and Java/Spring Boot for the backend, creating features like a blog,
            news feed, and an administrative dashboard.
          </li>
          <li>
            Implemented an automated web scraping pipeline using Selenium
            WebDriver to gather and update course data, ensuring the platform's
            content remains current.
          </li>
          <li>
            Designed and managed the MySQL database schema to efficiently store
            and retrieve course, user, and content information.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
