import { JSX } from "react";

export default function Navigation(): JSX.Element {
  return (<nav>
    <div className="container">
        <h2 className="logo">Arsoc</h2>
        <div className="search-bar">
            <i className="uil uil-search"></i>
            <input
            type="text"
            placeholder="Search for creators, inspirations and projects"
          />
        </div>
        <div className="create">
            <label className="btn btn-primary" htmlFor="create-post">Create</label>
            <div className="profile-pic">
                <img src="https://res.cloudinary.com/freecodez/image/upload/v1698067298/images/fy8azbqxhgdrbbijhipe.webp" alt="pic 1" />
            </div>
        </div>
    </div>
  </nav>);
}
