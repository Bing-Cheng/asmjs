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

unsigned char * proc(unsigned char *y) {
unsigned char reImage[8];
int sum = 0;
for(int i = 0;i<8;i++){
sum += (int)*(y+i);
reImage[i] = *(y+7-i);
}

  return &reImage[0];
}

}

