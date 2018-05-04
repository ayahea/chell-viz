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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var plotly = require("plotly.js");
var React = require("react");
var PLOTLY_CHART_TYPES;
(function (PLOTLY_CHART_TYPES) {
    PLOTLY_CHART_TYPES["bar"] = "bar";
    PLOTLY_CHART_TYPES["pointcloud"] = "pointcloud";
    PLOTLY_CHART_TYPES["scatter"] = "scatter";
    PLOTLY_CHART_TYPES["scattergl"] = "scattergl";
    PLOTLY_CHART_TYPES["scatter3d"] = "scatter3d";
})(PLOTLY_CHART_TYPES = exports.PLOTLY_CHART_TYPES || (exports.PLOTLY_CHART_TYPES = {}));
/**
 * React wrapper for a Plotly Chart.
 *
 * @description
 * Based upon: https://github.com/davidctj/react-plotlyjs-ts
 *
 * @export
 * @extends {React.Component<IPlotlyChartProps, any>}
 */
var PlotlyChart = /** @class */ (function (_super) {
    __extends(PlotlyChart, _super);
    function PlotlyChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.container = null;
        _this.resize = function () {
            plotly.Plots.resize(_this.container);
        };
        _this.draw = function (props) { return __awaiter(_this, void 0, void 0, function () {
            var data, layout, config, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = props.data, layout = props.layout, config = props.config;
                        if (!this.container) return [3 /*break*/, 2];
                        // plotly.react will not destroy the old plot: https://plot.ly/javascript/plotlyjs-function-reference/#plotlyreact
                        _a = this;
                        return [4 /*yield*/, plotly.react(this.container, data, Object.assign({}, layout), config)];
                    case 1:
                        // plotly.react will not destroy the old plot: https://plot.ly/javascript/plotlyjs-function-reference/#plotlyreact
                        _a.container = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.onClick = function (event) {
            var onClickCallback = _this.props.onClickCallback;
            if (onClickCallback) {
                onClickCallback(event);
            }
        };
        _this.onHover = function (event) {
            var onHoverCallback = _this.props.onHoverCallback;
            if (onHoverCallback) {
                onHoverCallback(event);
            }
        };
        _this.onSelect = function (event) {
            var onSelectedCallback = _this.props.onSelectedCallback;
            if (onSelectedCallback) {
                onSelectedCallback(event);
            }
        };
        _this.onUnHover = function (event) {
            var onUnHoverCallback = _this.props.onUnHoverCallback;
            if (onUnHoverCallback) {
                onUnHoverCallback(event);
            }
        };
        return _this;
    }
    PlotlyChart.prototype.attachListeners = function () {
        this.container.on('plotly_click', this.onClick);
        this.container.on('plotly_selected', this.onSelect);
        this.container.on('plotly_hover', this.onHover);
        this.container.on('plotly_unhover', this.onUnHover);
        window.addEventListener('resize', this.resize);
    };
    PlotlyChart.prototype.componentWillReceiveProps = function (nextProps) {
        this.draw(nextProps);
    };
    PlotlyChart.prototype.componentDidMount = function () {
        this.draw(this.props);
    };
    PlotlyChart.prototype.componentWillUnmount = function () {
        if (this.container) {
            plotly.purge(this.container);
        }
        window.removeEventListener('resize', this.resize);
    };
    PlotlyChart.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, layout = _a.layout, config = _a.config, onClickCallback = _a.onClickCallback, onHoverCallback = _a.onHoverCallback, onSelectedCallback = _a.onSelectedCallback, onUnHoverCallback = _a.onUnHoverCallback, other = __rest(_a, ["data", "layout", "config", "onClickCallback", "onHoverCallback", "onSelectedCallback", "onUnHoverCallback"]);
        return (React.createElement("div", __assign({}, other, { ref: function (node) { return __awaiter(_this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!(node && !this.container)) return [3 /*break*/, 2];
                            _a = this;
                            return [4 /*yield*/, plotly.react(node, data, Object.assign({}, layout), config)];
                        case 1:
                            _a.container = _b.sent();
                            this.attachListeners();
                            _b.label = 2;
                        case 2: return [2 /*return*/];
                    }
                });
            }); } })));
    };
    return PlotlyChart;
}(React.Component));
exports.PlotlyChart = PlotlyChart;
exports.defaultLayout = {
    height: 400,
    legend: {},
    showlegend: false,
    title: '',
    width: 400,
    xaxis: {},
    yaxis: {
        autorange: 'reversed',
    },
};
exports.defaultConfig = {
    displayModeBar: true,
};
/**
 * Generate data in the expected format for a Plotly PointCloud.
 *
 * @param coords Array of (x,y) coordinates such that [i, i+1] refers to the (x,y) of object i.
 * Necessary optimization to render hundreds of thousands of points.
 * @param color What color the points should be.
 * @param nodeSize Sets min/max to nodeSize/nodeSize * 2.
 * @param [extra] Explicit extra configuration to add / replace the default data configuration with.
 * @returns Data suitable for consumption by Plotly.
 */
exports.generatePointCloudData = function (coords, color, nodeSize, extra) { return (__assign({ marker: {
        color: color,
        sizemax: nodeSize * 2,
        sizemin: nodeSize,
    }, mode: 'markers', type: PLOTLY_CHART_TYPES.pointcloud, xy: coords }, extra)); };
