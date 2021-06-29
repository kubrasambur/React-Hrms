import React from 'react';

var styles = {"test":"_3ybTi"};

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};
var ExampleButton = function ExampleButton(_ref2) {
  var onClick = _ref2.onClick;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick
  }, "Example Component:");
};

export { ExampleButton, ExampleComponent };
//# sourceMappingURL=index.modern.js.map
