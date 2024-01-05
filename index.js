"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BlogSlider;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function BlogSlider(props) {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    blogIndex = _useState2[0],
    setBlogIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tabIndex = _useState4[0],
    setTabIndex = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    selectedCategory = _useState6[0],
    setSelectedCategory = _useState6[1];
  var _useState7 = (0, _react.useState)("blogContentShowFromRight"),
    _useState8 = _slicedToArray(_useState7, 2),
    blogClass = _useState8[0],
    setBlogClass = _useState8[1];
  var selectedCategoryColor = props.selectedCategoryColor ? props.selectedCategoryColor : 'white';
  var categoryColor = props.categoryColor ? props.categoryColor : 'black';
  var color = props.color ? props.color : 'black';
  var selectedColor = props.selectedColor ? props.selectedColor : props.color ? props.color : 'black';
  var backgroundColor = props.backgroundColor ? props.backgroundColor : '#F2F2F2';
  var btnBackgroundColor = props.btnBackgroundColor ? props.btnBackgroundColor : '#3D9DD9';
  var btnStyle = {
    width: '50%',
    color: '#F2F2F2',
    backgroundColor: btnBackgroundColor,
    borderRadius: '20px',
    padding: '5px',
    paddingLeft: '15px',
    paddingRight: '15px'
    // maxWidth: '4rem',
    // border: '1px solid black',
  };

  var handleChangeBlogIndex = function handleChangeBlogIndex(num) {
    if (num === 1 && blogIndex < props.blogContent[selectedCategory].blogs.length - 1 || num === -1 && blogIndex >= 1) {
      if (num === -1) setBlogClass("blogContentHideToRight");
      if (num === 1) setBlogClass("blogContentHideToLeft");
      var changeIndex = function changeIndex() {
        if (num === -1) setBlogClass("blogContentShowFromLeft");
        if (num === 1) setBlogClass("blogContentShowFromRight");
        setBlogIndex(blogIndex + num);
      };
      setTimeout(changeIndex, 500);
    }
  };
  return props.blogContent && /*#__PURE__*/_react["default"].createElement("div", {
    className: "blogContainer",
    style: {
      backgroundColor: backgroundColor,
      color: color
    }
  }, props.title && /*#__PURE__*/_react["default"].createElement("h1", null, props.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "categorysContainer"
  }, props.showCategorys ? props.blogContent.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "categoryContainer",
      key: index,
      onClick: function onClick() {
        setSelectedCategory(index);
        setBlogIndex(0);
      },
      style: {
        backgroundColor: index == selectedCategory ? btnBackgroundColor : null
      }
    }, /*#__PURE__*/_react["default"].createElement("h2", {
      style: {
        color: index === selectedCategory ? selectedCategoryColor : categoryColor
      }
    }, item.category));
  }) : null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "blogContentContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "blogTextContainer"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: blogClass
  }, props.blogContent[selectedCategory].blogs[blogIndex].title && /*#__PURE__*/_react["default"].createElement("span", {
    className: "blogTitle"
  }, props.blogContent[selectedCategory].blogs[blogIndex].title), props.blogContent[selectedCategory].blogs[blogIndex].content)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "blogNavContainer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: function onClick() {
      return handleChangeBlogIndex(-1);
    },
    className: "blogBackBtn",
    style: btnStyle
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Back")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "blogNextBtn",
    onClick: function onClick() {
      return handleChangeBlogIndex(1);
    },
    style: btnStyle
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Next")))));
}
