import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useRef } from "react";

const PageArea = (area) => {
  const [dropdownClick, setDropdownClick] = useState(false);

  const dropdownMenu = useRef();

  const handleDropdown = (e) => {
    e.preventDefault();
    if (dropdownClick === false) {
      setDropdownClick(true);
      dropdownMenu.current.style.display = "block";
    } else {
      setDropdownClick(false);
      dropdownMenu.current.style.display = "none";
    }
  };

  return (
    <div className="empty-area">
      <div className="page-link-parent">
        {area.menu != null
          ? area.menu.map((v, i) =>
              v.isDropdown === false ? (
                <Link className="page-link" to={v.link} key={"menu-link-" + i}>
                  {v.name}
                </Link>
              ) : (
                <div className="area-dropdown" key={'dropdown-div'+i}>
                  <Link
                    key={"dropdown-link-" + i}
                    className="page-link-3"
                    onClick={(e) => handleDropdown(e)}
                  >
                    {v.name}
                  </Link>
                  <ul
                    key={"bkjnkjnjklnk" + i}
                    className="page-link-2"
                    ref={dropdownMenu}
                  >
                    {v.childElement.map((values, index) => (
                      <Link
                        className="dropdown-link"
                        to={values.link}
                        key={"dropdown-element-link-" + index}
                      >
                        {values.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              )
            )
          : ""}
      </div>
    </div>
  );
};

export default PageArea;
