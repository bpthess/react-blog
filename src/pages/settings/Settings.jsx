import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Update Your Account</span>
        </div>
        <form className="settingsForm">
          <label>profile Picture</label>
          <div className="settingsPP">
            <img src="https://source.unsplash.com/category/Editorial" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="finleInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="Safak@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
