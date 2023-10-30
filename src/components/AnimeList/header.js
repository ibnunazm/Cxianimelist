import Link from "next/link";

const Header = ({title, linkHref, linkTitle}) => {
  return (
    <div className="flex justify-between items-center px-4 pb-4">
      <h1 className="md:text-xl text-lg text-slate-800 font-bold">{title}</h1>
      <Link
        href={linkHref}
        className="md:text-lg text-md underline hover:text-indigo-500 transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
