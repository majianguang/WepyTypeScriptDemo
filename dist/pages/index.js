"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var wepy_1 = require('./../npm/wepy/lib/wepy.js');
var a_1 = require('./../components/a.js');
var b_1 = require('./../components/b.js');
var AModel_1 = require('./../components/AModel.js');
var index = /** @class */ (function (_super) {
    __extends(index, _super);
    function index() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.config = {
            navigationBarTitleText: 'Repeat1'
        };
        _this.components = {
            A: a_1.default,
            B: b_1.default
        };
        _this.data = {
            aModel: new AModel_1.default()
        };
        return _this;
    }
    index.prototype.onLoad = function () {
    };
    return index;
}(wepy_1.default.page));
exports.default = index;
