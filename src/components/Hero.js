// src/components/Hero.js

import _ from "lodash";
import { Children, createElement } from "react";
import Icon from "./Icon";

export const Hero = (props) => {
  const textColor = _.get(props, "textColor", "dark");
  const bgColor = _.get(props, "bgColor", "light");

  const className = [];
  className.push("container-fluid");
  className.push("mb-5");
  className.push("pt-5");
  className.push(`bg-${bgColor}`);
  className.push(`text-${textColor}`);

  return (
    <div className={_.join(className, " ")}>
      <div className="container mx-auto">
        <div className="row g-0">{props.children}</div>
      </div>
    </div>
  );
};

export const HeroContent = (props) => {
  return <div className="col col-12 col-md-7">{props.children}</div>;
};

export const HeroTitle = (props) => {
  return (
    <h2>
      <Icon {...props}></Icon>

      {props.children}
    </h2>
  );
};

export const HeroText = (props) => {
  return <p>{props.children}</p>;
};

export const HeroImage = (props) => {
  const src = _.get(props, "src", "");
  const alt = _.get(props, "alt", "");
  return (
    <div className="col col-12 col-md-5 mb-n5">
      <img className="img-fluid shadow rounded" src={src} alt={alt} />
    </div>
  );
};
