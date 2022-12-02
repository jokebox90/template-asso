// src/components/Hero.js
/** @jsxImportSource @emotion/react */

import _ from "lodash";
import Icon from "./Icon";

export const Hero = (props) => {
  const className = [];
  className.push("hero");
  className.push("container-fluid");

  // const hasNavTop = _.get(props, "hasNavTop", false);
  const hasNavBottom = _.get(props, "hasNavBottom", false);
  const bgPosition = _.get(props, "bgPosition", "end");
  const bgOpacity = _.get(props, "bgOpacity", 0.5);
  const bgColor = `rgba(0, 0, 0, ${bgOpacity})`;

  // !hasNavTop && className.push("mt-5");
  !hasNavBottom && className.push("mb-5");

  return (
    <div className={_.join(className, " ")}>
      {props.bgImage ? (
        <div
          className="hero-bg-image"
          css={{ alignItems: bgPosition }}
        >
          <img src={props.bgImage} alt="" />
          <div className="hero-bg-overlay" css={{ backgroundColor: bgColor }} />
        </div>
      ) : null}
      <div className="container mx-auto">
        <div className="row g-3">{props.children}</div>
      </div>
    </div>
  );
};

export const HeroContent = (props) => {
  return <div className="hero-body col col-12 col-md-7">{props.children}</div>;
};

export const HeroTitle = (props) => {
  return (
    <div className="hero-title">
      <Icon name={props.name} collection={props.collection} />
      <h2>
        <span>{props.children}</span>
      </h2>
    </div>
  );
};

export const HeroText = (props) => {
  return (
    <p
      css={{
        color: "var(--hero-color)",
      }}
    >
      {props.children}
    </p>
  );
};

export const HeroImage = (props) => {
  const src = _.get(props, "src", "");
  const alt = _.get(props, "alt", "");
  return (
    <div className="hero-image col col-12 col-md-5 mb-n5">
      <img className="img-fluid shadow rounded" src={src} alt={alt} />
    </div>
  );
};
