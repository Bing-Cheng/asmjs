// In C/C++ you only need to declare the func signature and
// make sure C is used to prevent name mangling
#include <stdio.h>
#include <math.h>
#include <stdlib.h>
extern "C" void invoke_callback(int callback_id, const char* text);

void my_c_function(int callback_id) {
   invoke_callback( callback_id, "Hello World!" );
}

