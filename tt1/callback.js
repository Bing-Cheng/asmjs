var Module = require('./a.out.js');

function callback(message) {
    alert(message);
}

var func_map = {
    0: callback
};

// C/C++ functions get a _ prefix added
function _invoke_callback(callback_id, text_ptr) {
    func_map[callback_id](Pointer_stringify(text_ptr));
}

Module.ccall("my_c_function",  'number', ['number'],[0]);
