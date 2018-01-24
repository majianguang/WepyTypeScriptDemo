'use strict';

exports.__esModule = true;

exports.default = function (content, config) {
    var p = void 0;
    try {
        var code = ts.transpileModule(content, config);
        p = Promise.resolve(code.outputText);
    } catch (e) {
        p = Promise.reject(e);
    }
    return p;
};

var _typescript = require('typescript');

var ts = _interopRequireWildcard(_typescript);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

;