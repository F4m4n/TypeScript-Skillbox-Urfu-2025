interface Car {
	model : string;
	price : number;
	
	dynamic_1 : Record<string, string>;
	
	dynamic_2 : {
		[index : string] : number;
	};
	
	tuple : [string, number, string];
}