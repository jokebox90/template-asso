// src/components/Heading.js

import _ from "lodash";
import { createElement } from "react";
import Icon from "./Icon";

export const Heading = (props) => {
  const bgColor = _.get(props, "bgColor", "light");
  const textColor = _.get(props, "textColor", "dark");

  const className = [];
  className.push("col");
  className.push("col-12");
  className.push("col-md-7");
  bgColor && className.push(`bg-${bgColor}`);
  textColor && className.push(`text-${textColor}`);

  const headingElement = createElement(
    _.get(props, "heading", "h1"),
    { className: "d-flex" },
    <Icon {...props} />,
    _.get(props, "title", null)
  );

  return (
    <div className="container-fluid">
      <div className="container mx-auto">
        <div className="row g-0 p-0 my-4">
          <div className={_.join(className, " ")}>
            {headingElement}
            <p className="lead m-0">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
