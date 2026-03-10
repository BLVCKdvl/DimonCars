export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-custom">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            DIMONCARS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <a href="/catalog" className="nav-link btn-menu">
                  каталог
                </a>
              </li>
              <li className="nav-item">
                <a href="/conditions" className="nav-link btn-menu">
                  условия
                </a>
              </li>
              <li className="nav-item">
                <a href="/reviews" className="nav-link btn-menu">
                  отзывы
                </a>
              </li>
              <li className="nav-item">
                <a href="/contacts" className="nav-link btn-menu">
                  контакты
                </a>
              </li>
            </ul>
          </div>
          <div className="manager-contacts">
            <a className="call-link-header" href="tel:375257572594">
              <span className="contacts-number">+375 (25) 666 - 99 - 99</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
