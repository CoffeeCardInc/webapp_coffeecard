(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4852:
/***/ ((module) => {

// Exports
module.exports = {
	"footerbasic": "Footer_footerbasic__9AD2l",
	"social": "Footer_social__r_lug",
	"copyright": "Footer_copyright__0_Me0",
	"footermenu": "Footer_footermenu__kSX85"
};


/***/ }),

/***/ 3164:
/***/ ((module) => {

// Exports
module.exports = {
	"navLink": "Navibar_navLink___Ru_C",
	"zindex": "Navibar_zindex__dT6L8"
};


/***/ }),

/***/ 6295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6981);
// EXTERNAL MODULE: ./styles/Navibar.module.css
var Navibar_module = __webpack_require__(3164);
var Navibar_module_default = /*#__PURE__*/__webpack_require__.n(Navibar_module);
// EXTERNAL MODULE: ./components/context.js
var context = __webpack_require__(2422);
;// CONCATENATED MODULE: ./public/Logo2.png
/* harmony default export */ const Logo2 = ({"src":"/_next/static/media/Logo2.f46a1521.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVPNi5ONSxNMypPNSxTOjJONSxSOTFSOjJPNi1RODBPNSxNMypONCtNNCtNMypQNy9MMilNMypQNy9QNy9NMypNMypQNy5QNy5QNy9NMypNNCtNMytNMypNMypNMypNMypNMypMMypMMimcWJK0AAAAIHRSTlMAAAAZGh0eHyAhI7O2tre7vL2+v8HFxsfI4OHk5vX2/YDh9ssAAABFSURBVHjaJcZHEoAgEATAEXPEyGIgOP9/pGXRp4Zqjm2dc4XuoRGeJaZIYxh7+EARBgeX4jG+fzigvWktrxpZtWu9FPgAx5wFgxW5M2kAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Navbar.js










const Navibar = ()=>{
    // const { user } = useContext(AppContext)
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const toggle = ()=>setIsOpen(!isOpen);
    const loggedIn = (0,context/* useUser */.aF)();
    const toggleLogIn = (0,context/* useUpdateUser */.Io)();
    switch(true){
        case true:
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Navbar, {
                expand: "sm",
                light: true,
                className: (Navibar_module_default()).zindex,
                children: [
                    jsx_runtime_.jsx((style_default()), {
                        id: "407b50a10f2e950d",
                        children: ".navbar.jsx-407b50a10f2e950d{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavbarBrand, {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Logo2,
                            style: {
                                width: "25px",
                                height: "30px"
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavbarToggler, {
                        onClick: toggle,
                        className: (Navibar_module_default()).border
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Collapse, {
                        isOpen: isOpen,
                        navbar: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                            className: "container-fluid justify-content-end",
                            navbar: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/profile",
                                        children: "Account"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/about",
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/shops",
                                        children: "Shops"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/contactus",
                                        children: "Contact"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/",
                                        onClick: ()=>{
                                            toggleLogIn;
                                        // logout()
                                        // setUser(null)
                                        },
                                        children: "Log out"
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
        default:
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Navbar, {
                expand: "sm",
                light: true,
                className: (Navibar_module_default()).zindex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.NavbarBrand, {
                        href: "/",
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: Logo2,
                                style: {
                                    width: "25px",
                                    height: "30px"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavbarToggler, {
                        onClick: toggle
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Collapse, {
                        isOpen: isOpen,
                        navbar: true,
                        fixed: true,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
                            className: "container-fluid justify-content-end",
                            navbar: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/",
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/register",
                                        className: "inactive",
                                        children: "Sign up"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.NavLink, {
                                        href: "/login",
                                        children: "Sign In"
                                    })
                                })
                            ]
                        })
                    })
                ]
            });
    }
};
/* harmony default export */ const Navbar = (Navibar);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/Meta.js


const Meta = ({ title , keywords , description  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "keywords",
                content: keywords
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/site.webmanifest"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
                integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                crossOrigin: "anonymous"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
                integrity: "sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==",
                crossorigin: "anonymous",
                referrerpolicy: "no-referrer"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "https://js.stripe.com/v3"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            })
        ]
    });
};
Meta.defaultProps = {
    title: "CoffeeCard",
    keywords: "CoffeeCard",
    description: "Coffee"
};
/* harmony default export */ const components_Meta = (Meta);

;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
// EXTERNAL MODULE: ./styles/Footer.module.css
var Footer_module = __webpack_require__(4852);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer.js







const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Footer_module_default()).footerbasic,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    download: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Footer_module_default()).footermenu,
                        children: "Download our iOS app"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).social,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.linkedin.com/company/coffee-card/about/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaLinkedin, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://www.instagram.com/coffee.card/?hl=en",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaInstagram, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://twitter.com/coffee_card",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitterSquare, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTiktok, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).copyright,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "#",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Terms of Services"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "CoffeeCard \xa9 2022"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout.js
/* /components/Layout.js */ 






const Layout = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(context/* UserProvider */.dr, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                height: "100vh"
            },
            className: "jsx-f64fd9e26cd8a7fa",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Meta, {}),
                jsx_runtime_.jsx((style_default()), {
                    id: "f64fd9e26cd8a7fa",
                    children: ".bg.jsx-f64fd9e26cd8a7fa{background:#fffdf1}"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    style: {
                        paddingTop: "60px"
                    },
                    className: "jsx-f64fd9e26cd8a7fa" + " " + "bg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(external_reactstrap_.Container, {
                        children: props.children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
            ]
        })
    });
};
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp(props) {
    // const [state, setState] = useState({ cart: cart })
    const { Component , pageProps  } = props;
    // setUser = (user) => {
    //   setState({ user })
    // }
    return /*#__PURE__*/ jsx_runtime_.jsx(layout, {
        className: "container m-0 p-0",
        style: {
            height: "100vh"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6981:
/***/ ((module) => {

"use strict";
module.exports = require("reactstrap");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,121,675,422], () => (__webpack_exec__(6295)));
module.exports = __webpack_exports__;

})();