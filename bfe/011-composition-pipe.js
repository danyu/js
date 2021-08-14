/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	// your code here
	return function(v){
		if(!funcs.length) return v;
		return funcs.reduce((acc, func)=>{
				if(acc==null){
					acc = func(v);
				} else{
					acc = func(acc);
				}
				return acc;
		}, null);
	}
}