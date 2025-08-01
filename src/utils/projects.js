const projects = [
  {
    name: "1. MoLang",
    description: ` Molang was my graduation project at university, and it stemmed from a
          deep curiosity about how programming languages are built. The goal was
          to explore language design, from syntax creation to implementing a
          compiler that could translate Molang code into a more practical
          language like JavaScript. The project wasn't intended for practical
          use, but it gave me a hands-on understanding of the intricacies
          involved in designing a language. It helped me grasp the concepts of
          lexers, parsers, and language syntax, providing valuable insight into
          the process of building a functional programming language from
          scratch.`,
    githubName: "mo-programming-language",
    otherLink: {
      name: "docs",
      link: "https://github.com/Mohammad-y-abbass/mo-programming-language",
    },
  },
  {
    name: "2. Rapid Express",
    description: `Rapid Express is a CLI tool that generates a structured, class-based
          Express.js project with TypeScript, Prisma, and custom decorators for
          routes, middleware, and validation. It automates boilerplate setup,
          enforces best practices, and includes built-in authentication and
          error handling. With 1000+ downloads on npm, it simplifies Express.js
          development for scalable and maintainable apps.`,
    githubName: "rapid-express",
    otherLink: {
      name: "npm link",
      link: "https://www.npmjs.com/package/@mohammad-abbass/rapid-express",
    },
  },
  {
    name: "Online React Code Editor",
    description:
      "I developed an online JavaScript/React code editor using React.js, TypeScript, and Monaco Editor, leveraging esbuild WASM for fast, in-browser code execution. The editor provides a feature-rich, interactive coding environment with seamless package retrieval by intercepting npm package requests and redirecting them to UNPKG. To enhance performance, I implemented caching mechanisms that significantly reduce package load times, improving the overall user experience.",
    githubName: "code-editor",
    otherLink: {
      name: "demo",
      link: "https://online-react-code-editor.netlify.app/",
    },
  },
];

export default projects;
