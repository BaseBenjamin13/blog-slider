"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BlogSlider;
var _react = _interopRequireWildcard(require("react"));
var _reactTabs = require("react-tabs");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // import styles from './styles/BlogSlider.module.css';
// import 'react-tabs/style/react-tabs.css';

function BlogSlider(props) {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    blogIndex = _useState2[0],
    setBlogIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(styles.blogContentShowFromRight),
    _useState4 = _slicedToArray(_useState3, 2),
    blogClass = _useState4[0],
    setBlogClass = _useState4[1];
  var handleChangeBlogIndex = function handleChangeBlogIndex(num, index) {
    if (num === 1 && blogIndex < props.blogContent[index].blogs.length - 1 || num === -1 && blogIndex >= 1) {
      if (num === -1) setBlogClass(styles.blogContentHideToRight);
      if (num === 1) setBlogClass(styles.blogContentHideToLeft);
      var changeIndex = function changeIndex() {
        if (num === -1) setBlogClass(styles.blogContentShowFromLeft);
        if (num === 1) setBlogClass(styles.blogContentShowFromRight);
        setBlogIndex(blogIndex + num);
      };
      setTimeout(changeIndex, 500);
    }
  };
  return props.blogContent && /*#__PURE__*/_react["default"].createElement("div", {
    className: styles.blogContainer
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Main Blog"), /*#__PURE__*/_react["default"].createElement(_reactTabs.Tabs, {
    onSelect: function onSelect() {
      return setBlogIndex(0);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactTabs.TabList, null, props.showCategorys ? props.blogContent.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactTabs.Tab, {
      key: index
    }, item.category);
  }) : /*#__PURE__*/_react["default"].createElement(_reactTabs.Tab, null, "General")), props.blogContent.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactTabs.TabPanel, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: styles.blogContentContainer
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
      className: blogClass
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: styles.blogTitle
    }, item.blogs[blogIndex].title), item.blogs[blogIndex].content)), /*#__PURE__*/_react["default"].createElement("div", {
      className: styles.blogNavContainer
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: styles.blogBackBtn,
      onClick: function onClick() {
        return handleChangeBlogIndex(-1, index);
      }
    }, "Back"), /*#__PURE__*/_react["default"].createElement("button", {
      className: styles.blogNextBtn,
      onClick: function onClick() {
        return handleChangeBlogIndex(1, index);
      }
    }, "Next"))));
  })));
}
var styles = {
  blogContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // backgroundColor: var(--myGray),
    width: '80vw',
    borderRadius: '50px',
    margin: '0 auto',
    marginTop: '1rem',
    padding: '1rem'
    // color: var(--myDarkGray),
  },

  blogContentContainer: {
    // text-align: center;
  },
  blogTitle: {
    // font-size: 200%;
    // margin: 5px;
  },
  // blogContentShowFromRight, blogContentShowFromLeft, blogContentHideToRight, blogContentHideToLeft: {
  // font-size: 120%;
  // margin: 1rem;
  // },

  blogContentShowFromRight: {
    // animation: showFromRight 500ms 1;
  },
  blogContentShowFromLeft: {
    // animation: showFromLeft 500ms 1;
  },
  blogContentHideToRight: {
    // animation: hideToRight 600ms 1;
  },
  blogContentHideToLeft: {
    // animation: hideToLeft 600ms 1;
  }

  // blogBackBtn, blogNextBtn: {
  // margin: 5px;
  // margin-left: 10px;
  // margin-right: 10px;
  // font-size: 140%;
  // },

  // @keyframes showFromRight {
  //     0% {
  //         transform: translateX(110%);
  //     }
  //     100% {
  //         transform: translateX(0%);
  //     }
  // }
  // @keyframes showFromLeft {
  //     0% {
  //         transform: translateX(-110%);
  //     }
  //     100% {
  //         transform: translateX(0%);
  //     }
  // }
  // @keyframes hideToLeft {
  //     0% {
  //         transform: translateX(0%);
  //     }
  //     100% {
  //         transform: translateX(-110%);
  //     }
  // }
  // @keyframes hideToRight {
  //     0% {
  //         transform: translateX(0%);
  //     }
  //     100% {
  //         transform: translateX(110%);
  //     }
  // }
};
