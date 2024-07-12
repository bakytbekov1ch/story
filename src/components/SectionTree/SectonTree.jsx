import React, { useEffect, useState } from "react";

import "./SectionTree.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const API = "https://668f6b7480b313ba09180a62.mockapi.io/Mystory";

function SectonTree() {
  const [value, setValue] = useState([]);

  async function handlemocApi() {
    try {
      const res = await axios.get(API);

      console.log(res);
      setValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlemocApi();
  }, []);

  return (
    <div className="sectiontree">
      <div className="container">
        <div className="sectiontree__block">
          {value.map((item) => (
            <Link to="product" className="sectiontree__content">
              <img src={item.image} alt="" />
              <h2>{item.data}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectonTree;
