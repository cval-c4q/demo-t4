/**
 *  ES6 Fibonacci sequence generator
 */
function Fibo(upperBound=Infinity) {
	return {
		*fiboIterator() {
			let fib1 = 0, fib2 = 1;
			do {
				yield fib1 < 2 ? fib1 : fib2;
				fib2 += fib1; // compute new
				fib1 = fib2;  // swap
			} while (fib2 <= upperBound);
		},
		[Symbol.iterator]() {
			return this.fiboIterator();
		}
	}
}

if (module) module.exports = Fibo;
