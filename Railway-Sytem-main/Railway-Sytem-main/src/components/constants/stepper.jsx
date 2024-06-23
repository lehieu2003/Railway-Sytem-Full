export const Step = ({ number, title, isActive }) => {
  const bordered = isActive
    ? "customBlue dark:border-customBlue"
    : "gray-500 dark:border-gray-400";
  const textColor = isActive
    ? "customBlue dark:text-customBlue"
    : "gray-500 dark:text-gray-400";

  return (
    <li
      className={`flex flex-col items-center text-${textColor} rlt: space-x-reverse `}
    >
      <span
        className={`flex items-center justify-center w-8 h-8 border border-${bordered} rounded-full shrink-0`}
      >
        {number}
      </span>
      <span>
        <h3 className="font-medium leading-tight">{title}</h3>
      </span>
    </li>
  );
};
