export class Point {
    constructor(private _x?: number, private _y?: number){
    }

    draw(){
        console.log('holi')
    };
    
    //para acceder al valor de _x fuera de esta clase
    get X(){
        return this._x;
    }

    //ejemplo d eun valudador para _x
    set X(value){
        this._x = value;
    }

}

