"use strict"

function TailCall() {
    this.args = arguments !== null ? [...arguments] : [];
}

function BaseCase(value) {
    this.value = value;
}

function tco(fn) {
    const argsFn = [...arguments];
    let result = fn(...argsFn.slice(1));
    while (result instanceof TailCall) {
        result = fn(...result.args);
    }
    if (result instanceof BaseCase) {
        return result.value
    }
}

function reverseString(s, i, f){
    if (i < f) {
        const temp = s[i];
        s[i] = s[f];
        s[f] = temp;
        return new TailCall(s, i+1, f-1)
    } else {
        return new BaseCase(s)
    }
}

function rotina() {
    const N = 1000000;
    const texto = Array(N).fill(0).map((_,index) => index);
    return tco(reverseString, texto, 0, N-1)
}

console.log(rotina());
