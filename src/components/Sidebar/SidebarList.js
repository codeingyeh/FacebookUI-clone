function Item({ img, title }) {
  return (
    <li className="sidebar-menu__item">
      <a href="/#">
        <div className="sidebar-menu__item__icon">
          <img src={img} alt="icon" />
        </div>
        <div className="sidebar-menu__item__text">{title}</div>
      </a>
    </li>
  );
}
export function List(props) {
  return (
    <ul className={`sidebar-menu ${props.classList}`}>
      {props.title && <div className="sidebar-menu__title">{props.title}</div>}
      {props.data.map((x) => (
        <Item key={x.id} img={x.img} title={x.title} />
      ))}
    </ul>
  );
}
export function ToggleList(props) {
  return (
    <ul className={`sidebar-menu ${props.classList}`}>
      {props.title && <div className="sidebar-menu__title">{props.title}</div>}
      {props.children}
      {props.data.map((x) => (
        <Item key={x.id} img={x.img} title={x.title} />
      ))}
      <li className="sidebar-menu__item sidebar-menu__item--more">
        <a href="/#">
          <div className="sidebar-menu__item__icon">
            <i className="fa-solid fa-angle-up"></i>
          </div>
          <div className="sidebar-menu__item__text">顯示較少</div>
        </a>
      </li>
    </ul>
  );
}
