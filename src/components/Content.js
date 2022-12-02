// src/components/Article.js

import _ from "lodash";
import { useEffect, useState } from "react";
import Masonry from "masonry-layout";
import { useLocation } from "react-router-dom";

export const Content = (props) => {
  const location = useLocation();
  const [masonry, setMasonry] = useState(null);

  useEffect(() => {
    let timerID;

    if (!masonry) {
      timerID = setTimeout(() => {
        setMasonry(
          new Masonry(`.masonry`, {
            itemSelector: ".masonry-item",
            percentPosition: true,
          })
        );
      }, 500);
    }

    return () => {
      if (timerID) {
        clearTimeout(timerID);
      }
    };
  }, [masonry, setMasonry, location]);

  const cols = Math.round(Math.floor(12 / Number(_.get(props, "cols", 3))));

  return (
    <div className="container-fluid p-0 m-0">
      <div className="container mx-auto">
        <div className={`masonry row g-3`}>
          {_.map(props.children, (child, index) => {
            return (
              <div key={index} className={`masonry-item col-12 col-md-${cols}`}>
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
