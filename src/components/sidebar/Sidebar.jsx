import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          accusantium exercitationem itaque.
        </p>
      </div>
      <div className="sideItem">
        <div className="sidebarTitle">
          CATEGORIES
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
      </div>
      <div className="sideItem">
        <div className="sidebarTitle">
          FLLOW US
          <ul className="sidebarSocial">
            <li className="sidebarIcon sidebarListItem fab fa-facebook-square"></li>
            <li className="sidebarIcon sidebarListItem fab fa-twitter-square"></li>
            <li className="sidebarIcon sidebarListItem fab fa-pinterest-square"></li>
            <li className="sidebarIcon sidebarListItem fab fa-instagram-square"></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
