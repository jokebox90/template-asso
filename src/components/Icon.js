// src/components/Icon.js
/** @jsxImportSource @emotion/react */

import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  const name = _.get(props, "name", null);
  const collection = _.get(props, "collection", "solid");
  const color = _.get(props, "color", "var(--dark)");
  const fontSize = _.get(props, "fontSize", "var(--font-size)");

  const _collection = _.get(
    {
      solid: "fas",
      brands: "fab",
      regular: "far",
    },
    collection
  );

  return name ? (
    <span
      className="icon me-3"
      css={{
        color,
        fontSize,
      }}
    >
      <FontAwesomeIcon
        icon={[_collection, name]}
        size="1x"
      />
    </span>
  ) : null;
};

export default Icon;
