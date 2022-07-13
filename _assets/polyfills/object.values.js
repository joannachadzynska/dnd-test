// https://github.com/tc39/proposal-object-values-entries

(function () {
	const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
	const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
	const concat = Function.bind.call(Function.call, Array.prototype.concat);
	const keys = Object.getOwnPropertyNames;
	
	if (!Object.values) {
		Object.values = function values(O) {
			return reduce(keys(O), function(v, k) {return concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : [])}, []);
		};
	}
	
})();