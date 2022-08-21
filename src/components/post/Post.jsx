import React from "react";
import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://source.unsplash.com/category/Editorial"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo odio
        aperiam consequatur! Odit, quibusdam doloremque ullam corporis quasi
        iure minus delectus obcaecati dolor sunt, labore maxime, repellat sint
        quo doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nemo odio aperiam consequatur! Odit, quibusdam doloremque ullam corporis
        quasi iure minus delectus obcaecati dolor sunt, labore maxime, repellat
        sint quo doloribus! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nemo odio aperiam consequatur! Odit, quibusdam doloremque ullam
        corporis quasi iure minus delectus obcaecati dolor sunt, labore maxime,
        repellat sint quo doloribus!
      </p>
    </div>
  );
}
