import React from "react";

interface SectionHeaderProps {
  heading: string;
  subheading: string;
  badge?: React.ReactNode;
  className?: string;
  headingClassName?: string;
  subheadingClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ heading, subheading, badge, headingClassName, subheadingClassName }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {badge && <div className="mb-4">{badge}</div>}
      <h2 className={`text-5xl font-bold text-gray-800 dark:text-gray-100 ${headingClassName}`}>{heading}</h2>
      <p className={`mt-2 text-xl text-gray-600 dark:text-gray-400 ${subheadingClassName}`}>{subheading}</p>
    </div>
  );
};

export default SectionHeader;
