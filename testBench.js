var Module = require('./a.out.js');
int_sqrt = Module.cwrap('int_sqrt', 'number', ['number']);
console.log(int_sqrt(12));
console.log(int_sqrt(28));
var adder = Module.ccall('add', 'number', ['number'],[5,6])
console.log(adder);
var size = 8;
var p1 = new ArrayBuffer(size);
var p2 = new Uint8Array(p1);
var p3 = new Uint8Array(p1);
console.log(p2.length);
for(var i = 0; i <p2.length; i++){
p2[i] = i;
}
for(var i = 0; i <p2.length; i++){
console.log(p2[i]);
}
var buf = Module._malloc(size);
Module.HEAPU8.set(p2,buf);
for(var i = 0; i <p2.length; i++){
console.log(buf[i]);
}
p3 = Module.ccall('proc', 'number', ['number'],[buf]);
//proc(p2.byteOffset);
//  var heapFloats= new Float32Array(heapBytes.buffer, heapBytes.byteOffset, floatData.length);
console.log(p3);
var p5 = convert2Array(buf);
//Module.HEAPU8.set(buf,p3);
for(var i = 0; i <p2.length; i++){
console.log(p5[i]);
}


Module._free(buf);

function convert2Array(buf){
var pp1 = new ArrayBuffer(8);
var pp2 = new Uint8Array(pp1);
Module.HEAPU8.set(buf,pp2);
return pp2;
}