#include <stdio.h>
#include <math.h>

extern "C" {

int int_sqrt(int x) {
printf("This is a c function calling from js!");
  return sqrt(x);
}

int add(int x, int y) {

  return x+y;
}

int proc(unsigned char *y, int w, int h, int c) {
for(int i = 0;i<h;i++){
	for(int j = 0;j<w;j++){


*(y + i*w*c + j*c + 0)=*(y + i*w*c + j*c + 0)+10;//(unsigned char)255;//r
*(y + i*w*c + j*c + 1)=*(y + i*w*c + j*c + 0)+15;//(unsigned char)33;//g
*(y + i*w*c + j*c + 2)=*(y + i*w*c + j*c + 0)+50;//(unsigned char)33;//b
}
}

  return w*h*c;
}

}

