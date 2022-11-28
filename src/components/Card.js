// src/components/Card.js
/** @jsxImportSource @emotion/react */

import _ from "lodash";
import Icon from "./Icon";

export const Card = (props) => {
  const row = _.get(props, "row", false) ? true : false;
  const image = props.image ? (
    <div className="p-0 m-0" css={{ overflow: "hidden" }}>
      <img className={row ? "img-fluid rounded shadow" : "img-fluid"} src={props.image} alt="" />
    </div>
  ) : null;
  const body = <div className="card-body">{props.children}</div>;

  return (
    <div
      className="card shadow border-0"
      css={{ fontSize: "0.8rem", "h1,h2,h3": { fontSize: "1.8rem" } }}
    >
      <div className="row g-0 p-0">
        {image ? (
          <div
            className={
              row
                ? "col-5 d-flex align-items-start justify-content-start py-4 ps-3"
                : "col-12"
            }
          >
            {image}
          </div>
        ) : null}

        {row && image ? (
          <div className={"col-7"}>{body}</div>
        ) : (
          <div className={"col-12"}>{body}</div>
        )}
      </div>
    </div>
  );
};

export const CardTitle = (props) => {
  return (
    <h3
      className="card-title"
      css={{ fontSize: "1.8rem", fontVariant: "small-caps" }}
    >
      <Icon {...props}></Icon>
      <span>{props.children}</span>
    </h3>
  );
};

export const CardText = (props) => {
  return (
    <p
      className="card-text"
      css={{ fontSize: "0.8rem" }}
    >
      {props.children}
    </p>
  );
};

export const CardButton = (props) => {
  return (
    <div className="d-flex flex-nowrap">
      <a
        href={props.href}
        className="btn btn-nuance2 text-white d-flex flex-wrap"
      >
        <Icon {...props}></Icon>
        <span>{props.children}</span>
      </a>
    </div>
  );
};
