function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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

exports.ExampleButton = ExampleButton;
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=index.js.map