import { Link } from "react-router-dom";

type TFooterLinkProps = {
  to: string;
  children: string;
};

const FooterLink = ({ to, children }: TFooterLinkProps) => {
  return (
    <li>
      <Link
        className="gap-x-2 text-gray-300 hover:text-gray-200 hover:underline"
        to={to}
      >
        {children}
      </Link>
    </li>
  );
};

export default FooterLink;
