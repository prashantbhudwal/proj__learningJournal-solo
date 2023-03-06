export default function Header() {
  return (
    <header className="h-75 flex w-full items-center gap-2 px-5 py-5 font-bold text-gray-800 shadow-sm">
      <div className="header__logo"></div>
      <p className="mr-auto text-2xl tracking-tight">My Learning Journal</p>
      <nav className="header__nav">
        <ul className="nav__container flex gap-5">
          <li className="nav__home nav__item">
            <a href="/article.html">Home</a>
          </li>
          <li className="nav__about nav__item">
            <a href="/about.html">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
