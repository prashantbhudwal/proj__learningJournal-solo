export default function Header() {
  return (
    <header className="flex items-center w-full h-75 px-5 py-5 gap-2 font-bold text-gray-800 shadow-sm">
      <div className="header__logo"></div>
      <p className="text-2xl mr-auto tracking-tight">My Learning Journal</p>
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
