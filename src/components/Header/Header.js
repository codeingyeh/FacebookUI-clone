function SearchBar() {
  return (
    <div className="search-bar">
      <img
        src={require("../../img/Facebook_icon.png")}
        alt="facebook logo"
        className="logo"
      />
      <div className="search">
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </label>
        <input
          type="text"
          className="search-input"
          placeholder="搜尋 Facebook"
          name="search"
        ></input>
      </div>
    </div>
  );
}

function HeaderNav() {
  return (
    <ul className="header-nav">
      <li className="header-nav__link header-nav__link--active">
        <div className="icon">
          <i className="fa-solid fa-house" />
        </div>
      </li>
      <li className="header-nav__link">
        <div className="icon">
          <i className="fa-solid fa-user-group" />
        </div>
      </li>
      <li className="header-nav__link">
        <div className="icon">
          <i className="fa-solid fa-video" />
        </div>
      </li>
      <li className="header-nav__link">
        <div className="icon">
          <i className="fa-solid fa-user-group" />
        </div>
      </li>
      <li className="header-nav__link">
        <div className="icon">
          <i className="fa-solid fa-chess-pawn" />
        </div>
      </li>
      <li className="header-nav__link bars-icon">
        <div className="icon">
          <i class="fa-solid fa-bars"></i>
        </div>
      </li>
    </ul>
  );
}

function UserAction() {
  return (
    <div className="user-action">
      <ul className="action-list">
        <li className="action-list__item">
          <i className="fa-solid fa-grip"></i>
        </li>
        <li className="action-list__item">
          <i className="fa-brands fa-facebook-messenger"></i>
        </li>
        <li className="action-list__item">
          <i className="fa-solid fa-bell"></i>
        </li>
        <li className="action-list__item avatar">
          <img src={require("../../img/user/user.jpg")} />
        </li>
      </ul>
    </div>
  );
}

export default function Header() {
  return (
    <div className="header">
      <SearchBar />
      <HeaderNav />
      <UserAction />
    </div>
  );
}
