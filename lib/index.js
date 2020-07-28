"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var yuniq_1 = require("./yuniq");
var cli = {
	run: function () {
		ink_1.render(react_1.default.createElement(yuniq_1.yuniq));
	},
};
module.exports = cli;
