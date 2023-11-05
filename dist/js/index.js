"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
{
    const person = {
        name: 'Wagner',
        age: 34,
        data: ["Hello World"]
    };
    function persona(data) {
        return data;
    }
    const p = persona("Hello World");
}
{
    function apiVersion(version) {
        return (target) => {
            Object.assign(target.prototype, { __version: version });
        };
    }
    let Api = class Api {
    };
    Api = __decorate([
        apiVersion("1.0.0")
    ], Api);
    function ObjectType(__name) {
        return (target) => {
            Object.assign(target.prototype, { __name });
        };
    }
    function minLength(length) {
        return (target, key) => {
            let _value = target[key];
            const gettter = () => _value;
            const setter = (value) => {
                if (value.length < 3) {
                    throw new Error(`Exptect ${key} to have more ${length}`);
                }
                _value = value;
            };
            Object.defineProperty(target, key, {
                get: gettter,
                set: setter
            });
        };
    }
    let User = class User {
        constructor(name) {
            this.name = name;
        }
    };
    __decorate([
        minLength(3)
    ], User.prototype, "name", void 0);
    User = __decorate([
        ObjectType("user")
    ], User);
    const user = new User("Wagner");
    console.log(user);
}
