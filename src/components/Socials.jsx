import React from "react";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="space-x-4">
      <p className="text-yellow-300 font-bold">Social Media</p>
      <Link
        target="_blank"
        href="https://github.com/Mohammad-y-abbass"
        className="text-blue-400 underline"
      >
        Github
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/mohammad-abbass/"
        className="text-blue-400 underline"
      >
        LinkedIn
      </Link>
      <Link
        href="/Mohammad-Abbas.pdf"
        download="Mohammad-Abbas.pdf"
        className="text-blue-400 underline"
        target="_blank"
      >
        Resume
      </Link>
    </div>
  );
};

export default Socials;
