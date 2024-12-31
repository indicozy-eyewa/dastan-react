export default function Header() {
  return (
    <header className="w-screen">
      <h1>my site</h1>
      <nav className="w-screen">
        <ul className="flex justify-between">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Comedy</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Thriller</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
