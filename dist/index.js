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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "connection": {
        "host": "RBLADE",
        "user": "valve",
        "password": "valve123",
        "database": "VALVE"
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SequelizeCtx = __webpack_require__(0);
function GameModel(sequelize) {
    return sequelize.define('Game', {
        id: { type: SequelizeCtx.BIGINT, primaryKey: true },
        name: { type: SequelizeCtx.STRING(200), allowNull: false },
        publisher: SequelizeCtx.STRING(200),
        genre: SequelizeCtx.STRING(100),
    }, {
        timestamps: false,
        freezeTableName: true
    });
}
exports.GameModel = GameModel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SequelizeCtx = __webpack_require__(0);
var config_1 = __webpack_require__(1);
var table_models_1 = __webpack_require__(2);
if (config_1.default) {
    var sequelize = new SequelizeCtx(config_1.default.connection.database, config_1.default.connection.user, config_1.default.connection.password, {
        host: config_1.default.connection.host,
        dialect: 'mssql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
    sequelize
        .authenticate()
        .then(function (err) {
        console.log('Connection has been established successfully.');
        table_models_1.GameModel(sequelize)
            .findAll()
            .then(function (rows) {
            rows.forEach(function (row) {
                console.log(row.dataValues);
            });
        });
    })
        .catch(function (err) {
        console.error('Unable to connect to the database:', err);
    });
}
else {
    console.log('Config is missing');
}


/***/ })
/******/ ]);