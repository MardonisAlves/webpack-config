/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: ModuleBuildError: Module build failed: Error: `sass-loader` requires `node-sass` >=4. Please install a compatible version.\\n    at Object.sassLoader (/home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/sass-loader/lib/loader.js:31:19)\\n    at /home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/webpack/lib/NormalModule.js:252:20\\n    at /home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at runSyncOrAsync (/home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (/home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\\n    at Array.<anonymous> (/home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\\n    at Storage.finished (/home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\\n    at /home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\\n    at /home/mardonis/Documentos/curso-react/FundamentosMEAN/express-exercicios/Projetowebpack/node_modules/graceful-fs/graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:75:3)\");\n\n//# sourceURL=webpack:///./src/assets/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pessoa */ \"./src/pessoa.js\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _moduloes_moduleA__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduloes/moduleA */ \"./src/moduloes/moduleA.js\");\n/* harmony import */ var _moduloes_moduleA__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_moduloes_moduleA__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\nconst Atendente = new _pessoa__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nconsole.log(Atendente.Cumprimentar())\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moduloes/moduleA.js":
/*!*********************************!*\
  !*** ./src/moduloes/moduleA.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nconst moduloB = __webpack_require__(/*! ./moduleB */ \"./src/moduloes/moduleB.js\")\n\nconsole.log(moduloB.saudacao())\n\n//# sourceURL=webpack:///./src/moduloes/moduleA.js?");

/***/ }),

/***/ "./src/moduloes/moduleB.js":
/*!*********************************!*\
  !*** ./src/moduloes/moduleB.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n    \n    saudacao() { return 'Ola eu sou o Modulo B!!!'}\n}\n\n//# sourceURL=webpack:///./src/moduloes/moduleB.js?");

/***/ }),

/***/ "./src/pessoa.js":
/*!***********************!*\
  !*** ./src/pessoa.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pessoa; });\nclass Pessoa{\n\n    Cumprimentar(){\n      return \"Oi! tudo bem ?\"\n    }\n}\n\n//# sourceURL=webpack:///./src/pessoa.js?");

/***/ })

/******/ });