import { List } from "../SidebarList";
import { contacts, group } from "./data";
export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="sidebar">
        {<List data={contacts} classList={"contact"} title={"聯絡人"} />}
        {<List data={group} classList={"group"} title={"群組對話"} />}
      </div>
    </div>
  );
}
