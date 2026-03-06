export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-custom">
        <div class="container-fluid">
          <a href="/" class="navbar-brand">
            DIMONCARS
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul class="navbar-nav flex-grow-1">
              <li class="nav-item">
                <a href="/catalog" class="nav-link btn-menu">
                  каталог
                </a>
              </li>
              <li class="nav-item">
                <a href="/conditions" class="nav-link btn-menu">
                  условия
                </a>
              </li>
              <li class="nav-item">
                <a href="/reviews" class="nav-link btn-menu">
                  отзывы
                </a>
              </li>
              <li class="nav-item">
                <a href="/contacts" class="nav-link btn-menu">
                  контакты
                </a>
              </li>
            </ul>
          </div>
          <div class="manager-contacts">
            <a class="call-link-header" href="tel:375257572594">
              <span class="contacts-number">+375 (25) 666 - 99 - 99</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
