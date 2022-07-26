// Normal mode 
const circle = {
	radius: 1,
	location: { //possiamo creare un oggetto dentro ad un'altro oggetto 
		x: 1, 
		y: 1
	},
	draw: function(){  // possiamo creare una funzione, nome_funzione: function() {}
		console.log('Normal: draw');
	}
};

// Factories Function
function createCircle(radius){
	return {
		radius,
		draw: function(){
			console.log('Factories: draw');
		}
	}
}

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('Constructor: draw');
    }
}


// Normal mode 
circle.draw();

// Factory 
const circle_factory = createCircle(1);
circle_factory.draw();

// Constructor 
const cirlce_constructor = new Circle(2);
cirlce_constructor.draw();