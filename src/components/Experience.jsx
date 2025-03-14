import React from 'react';

const Experience = () => {
  return (
    <div className='space-y-3'>
      <p className='text-yellow-300 font-bold'>Work Experience</p>

      <div>
        <p className='text-indigo-400 font-bold'>
          Software Developer | Big Data Specialist Community
        </p>
        <p className='text-gray-400'>August,2023 - Present</p>
        <ul className='list-disc pl-5 mt-1'>
          <li>
            Collaborated with a cross-functional team to design and architect a
            high-performance website for sharing programming courses using
            Spring Boot, MySQL, and Next.js, ensuring seamless user experience
            across platforms
          </li>
          <li>
            Migrated the project from ReactJS to Next.js, improving performance
            by reducing page load time by 30% and enhancing SEO through
            server-side rendering and static site generation
          </li>
          <li>
            Developed an efficient search engine with advanced filters and
            pagination using Spring Boot and MySQL, enabling users to quickly
            find relevant courses from various sources.
          </li>
          <li>
            Implemented web scraping functionality using Selenium WebDriver and
            Java, automating the aggregation of course data from multiple
            platforms and integrating it into the MySQL database.
          </li>
        </ul>
      </div>

      <div>
        <p className='text-indigo-400 font-bold'>
          Software Developer Intern | 3E Tech
        </p>
        <p className='text-gray-400'>December,2024 - March,2025</p>
        <ul className='list-disc pl-5 mt-1'>
          <li>
            Developed a property management system integrated with Channex,
            streamlining operations for property owners.
          </li>
          <li>
            Built a complex multi-step form optimized application, enhancing
            user experience and efficiency.
          </li>
          <li>
            Optimized application performance, achieving a 34% increase in speed
            and responsiveness.
          </li>
          <li>
            Contributed to a Learning Management System (LMS) by improving
            system design and database structure.
          </li>
          <li>
            Utilized React, TypeScript, Express, Prisma, and PostgreSQL to
            develop robust full-stack solutions.
          </li>
        </ul>
      </div>
      <div>
        <p className='text-indigo-400 font-bold'>
          Software Developer Intern | Bracket Technologies
        </p>
        <p className='text-gray-400'>June,2023 - July,2023</p>
        <ul className='list-disc pl-5 mt-1'>
          <li>
            Collaborated with a team of developers to design, architect, and
            create a flight and hotel booking platform using the Bracket
            programming language, ensuring scalability and maintainability.
          </li>
          <li>
            Developed and tested various platform components, ensuring robust
            functionality and reliability across multiple features.
          </li>
          <li>
            Created a user registration form, enabling agents to easily create
            accounts and access platform functionalities securely.
          </li>
          <li>
            Developed an advanced search engine with filters, optimizing the
            display and management of agents and improving overall platform
            usability.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
