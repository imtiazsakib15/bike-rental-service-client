import { Link } from "react-router-dom";

type TSocialIconProps = {
  to: string;
  children: React.ReactNode;
};

const SocialIcon = ({ to, children }: TSocialIconProps) => {
  return (
    <Link
      className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
      to={to}
    >
      {children}
    </Link>
  );
};

export default SocialIcon;
