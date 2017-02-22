/*!
governify-csp-tools 0.0.1, built on: 2017-02-22
Copyright (C) 2017 ISA group
http://www.isa.us.es/
https://github.com/isa-group/governify-csp-tools

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.*/
"use strict";
var Problem_1 = require("../model/Problem");
var Reasoner = (function () {
    function Reasoner(config) {
        this._config = config;
    }
    Object.defineProperty(Reasoner.prototype, "config", {
        get: function () {
            return this._config;
        },
        set: function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    Reasoner.prototype.solve = function (cspModel, callback) {
        var problem = new Problem_1.default(cspModel, this.config);
        problem.getSolution(callback);
    };
    return Reasoner;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Reasoner;
