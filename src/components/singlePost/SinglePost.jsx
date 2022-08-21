import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          class="singlePostImg"
          src="https://source.unsplash.com/category/Editorial"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio et,
          laudantium, facilis reprehenderit exercitationem, distinctio ipsum
          amet perferendis ad possimus voluptas voluptates quos tempora libero
          at illum beatae. Tempore, fugit. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Optio et, laudantium, facilis
          reprehenderit exercitationem, distinctio ipsum amet perferendis ad
          possimus voluptas voluptates quos tempora libero at illum beatae.
          Tempore, fugit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Optio et, laudantium, facilis reprehenderit exercitationem,
          distinctio ipsum amet perferendis ad possimus voluptas voluptates quos
          tempora libero at illum beatae. Tempore, fugit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Optio et, laudantium, facilis
          reprehenderit exercitationem, distinctio ipsum amet perferendis ad
          possimus voluptas voluptates quos tempora libero at illum beatae.
          Tempore, fugit.
        </p>
      </div>
    </div>
  );
}
