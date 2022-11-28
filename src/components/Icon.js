// src/components/Icon.js

import _ from "lodash";

const Icon = (props) => {
  const icon = _.get(props, "icon", null);
  const iconType = _.get(props, "iconType", "solid");

  return icon ? (
    <span className="icon me-3">
      <i className={`fa-${iconType} fa-${icon}`}></i>
    </span>
  ) : null;
};

export default Icon;
