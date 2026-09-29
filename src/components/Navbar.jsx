function Navbar() {
    return (
        <header className="navbar">
            <a href="#home" className="navbar__brand">
                AS.
            </a>

            <nav className="navbar__links">
                <a href="#work">Work</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Navbar;