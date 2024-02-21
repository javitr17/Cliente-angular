export class Proyecto{
    private _nombre: string;
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    private _presupuesto: string;
    public get presupuesto(): string {
        return this._presupuesto;
    }
    public set presupuesto(value: string) {
        this._presupuesto = value;
    }

    constructor (){
        this._nombre='';
        this._presupuesto='';
    }
}