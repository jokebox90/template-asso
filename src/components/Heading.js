// src/components/Heading.js

import _ from "lodash";
import { createElement } from "react";
import Icon from "./Icon";

export const Heading = (props) => {
  const textColor = _.get(props, "textColor", "dark");

  const className = [];
  className.push("col");
  className.push("col-12");
  className.push("col-md-7");
  textColor && className.push(`text-${textColor}`);

  const headingElement = createElement(
    _.get(props, "heading", "h1"),
    { className: "d-flex" },
    <Icon
      name={props.name}
      collection={props.collection}
      color="var(--title-color)"
    />,
    <span>{_.get(props, "title", null)}</span>
  );

  return (
    <div className="heading container-fluid">
      <div className="container mx-auto">
        <div className="row g-0 p-0 my-4">
          <div className={_.join(className, " ")}>
            {headingElement}

            <p className="lead m-0">{props.children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
