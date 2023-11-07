import Link from "next/link";

const Header = ({title, linkHref = "", linkTitle = ""}) => {
  return (
    <div className="flex justify-between items-center px-4 pb-4 pt-1">
      <h1 className="lg:text-xl md:text-lg text-md text-slate-800 font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="lg:text-lg md:text-md text-sm  hover:text-indigo-500 transition-all underline"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
