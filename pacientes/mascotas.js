"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascotas = void 0;
var especies_1 = require("./especies");
var Mascotas = /** @class */ (function (_super) {
    __extends(Mascotas, _super);
    function Mascotas(raza, edad, sexo, nombre, id, idCliente) {
        var _this = _super.call(this, raza, edad, sexo) || this;
        _this.nombre = nombre;
        _this.id = id;
        _this.idCliente = idCliente;
        return _this;
    }
    ;
    return Mascotas;
}(especies_1.Especies));
exports.Mascotas = Mascotas;
