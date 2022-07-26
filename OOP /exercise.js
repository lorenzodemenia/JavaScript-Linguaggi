
const obj_one = 
{
    x: 2,
    y: 3,
    media: function(){
        return (this.x+this.y)/2;
    }
}

function Obj_two(x, y){
    this.x = x;
    this.y = y;
    this.media =  function(){
        return (this.x+this.y)/2;
    };
}

const tryTwo = new Obj_two(4,5);

console.log(tryTwo.media());

