export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-custom mb-3">
        <div class="container-fluid">
          <a
            class="navbar-brand"
            asp-area=""
            asp-controller="Home"
            asp-action="Index"
          >
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
                <a
                  class="nav-link btn-menu"
                  asp-area=""
                  asp-controller="Home"
                  asp-action="Catalog"
                >
                  каталог
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn-menu"
                  asp-area=""
                  asp-controller="Home"
                  asp-action="Conditions"
                >
                  условия
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn-menu"
                  asp-area=""
                  asp-controller="Home"
                  asp-action="Rewievs"
                >
                  отзывы
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link btn-menu"
                  asp-area=""
                  asp-controller="Home"
                  asp-action="Contacts"
                >
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
