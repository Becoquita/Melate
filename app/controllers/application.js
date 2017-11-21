import Controller from '@ember/controller';

export default Controller.extend({
		n		: undefined,

	actions:{
		createKeys(){
			//obtenemos los valores de las variables
			let B1 = this.get('B1');
			let B2 = this.get('B2');

			function ganancias (x, y){
				let b1 = x;
				let b2 = y;
			 		
			let CostSale = 15;
			let CostProduction = 1;
			let jackpot = 38000000;
			let PL = 1/32468436;
			let PW = 1-PL;
			let XW;
			let XL;
			let PXW;
			let PXL;
			let ExpectedEarnings;
      		let table=[];
			//console.log('Sold Tickets | Expected earnings');
			if (b1 === ''){
				alert('The first ticket cannot be empty');
				return;
			} else if (b2<b1){
				alert('The last ticket cannot be smaller than first ticket');
				return;
			} else {
			if (b2 != undefined ){
				
				for (;b1<=b2; b1++){
			    XW = b1*CostSale;
					XL = b1*CostProduction;
			    PXW = (XW-XL)*PW;
					PXL = jackpot*PL;
			    ExpectedEarnings = PXW-PXL;
			    table.push( '  ' + b1 + ' | ' + ExpectedEarnings + ' ');
			    //console.log(B1+' | '+ExpectedEarnings);
			    //console.log('___');
			  } 
			} else {
				  XW = b1*CostSale;
					XL = b1*CostProduction;
			    PXW = (XW-XL)*PW;
					PXL = jackpot*PL;
			    ExpectedEarnings = PXW-PXL;
			    table.push( '  ' + b1 + ' | ' + ExpectedEarnings + ' ');
			    //console.log(B1+' | '+ExpectedEarnings);	
			}
        return table;
			}
		}

			let x = ganancias(B1, B2);
			//this.set('n', x);

			var html = "<table style='width:400px'><thead><tr><th>Sold Tickets</th><th>Expected Earnings</th></tr></thead>";

			for(var i=0;i<x.length;i++)
			{
				var obj = x[i].split("|");

				html += "<tr>";
				html += "<td>" + obj[0] + "</td><td>" + obj[1] + "</td>";
				html += "</tr>";

			}

			html += "</table>";

			document.getElementById("tabla").innerHTML = html;

		},


		clear(){
			//dejamos las variables sin datos
			this.setProperties({
				B1: undefined,
				B2: undefined,
			});

			//Vuelve a dejar todas las variables sin datos
			this.set('n',undefined);

			document.getElementById("tabla").innerHTML = " ";
			}


	}
});

