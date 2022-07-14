import { data, shortcutData } from "./data";
import { List, ToggleList } from "../SidebarList";

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar">
        {
          <ToggleList data={data} classList={""}>
            <li className="sidebar-menu__item">
              <a href="/#">
                <div className="sidebar-menu__item__icon avatar">
                  <img
                    src={require("../../../img/user/user.jpg")}
                    alt="user avatar"
                  />
                </div>
                <div className="sidebar-menu__item__text">Peter</div>
              </a>
            </li>
          </ToggleList>
        }
        {<List data={shortcutData} classList={"shortcut"} title={"你的捷徑"} />}
      </div>
    </div>
  );
}
