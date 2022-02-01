import React from "react";
import { AiFillStar } from "react-icons/ai";

function MovieItem() {
  return (
    <li className="max-w-[120px] rounded-lg overflow-ellipsis">
      <img
        src="https://image.winudf.com/v2/image/Y29tLmFuZHJvbW8uZGV2NzA3MDU5LmFwcDc4NTQyNl9zY3JlZW5fM18xNTI2MzY2NzU4XzAzNw/screen-3.jpg?fakeurl=1&type=.jpg"
        alt=""
        className="object-cover rounded-lg"
      />
      <div>
        <h2 className="word">
          MikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMikuMiku
        </h2>
        <span>
          4<AiFillStar />
        </span>
      </div>
    </li>
  );
}

export default MovieItem;
