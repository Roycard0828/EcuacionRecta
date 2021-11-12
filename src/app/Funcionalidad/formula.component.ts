export class FormulaComponent{

    y: number = 0;

    recta(m: any, x:any, b:any){
        this.y = (m * x) + b;
        return this.y;
    }

}