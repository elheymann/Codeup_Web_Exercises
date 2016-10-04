"use strict";
Function
int number = 3;
int half = (number + 2 - 1)/2;
int square = 0;
boolean isSquare = false;

for( int i = half; i > 0 ; i-- ){

    square = i*i;

    if( square > number )
        continue;

    if( square == number ){
        System.out.println( "This number is a perfect square" );
        isSquare = true;
        break;
    }

}
if( !isSquare ){
    System.out.println( "This number is not a perfect square" );
};