function greet( message, name) {
  console.log(this);
  console.log(message + '' +name + '!');
}

greet('Good morning, ', 'John');

console.log(greet instanceof Object);

greet.x = 100;
console.log(greet.x);

greet.foo = function () {
  console.log('greet.foo was called')
}

greet.foo();

//call

greet.call('Hello. ', 'Good evening, ', 'Mary');

//apply

var args = [ 'Good evening, ', 'Mary'];
greet.apply( 'hello', args);

//bind

var greetBound = greet.bind('world' );
greetBound('hello ','test');

var greetHola = greet.bind( null, 'Hola' );
greetHola( "David");
