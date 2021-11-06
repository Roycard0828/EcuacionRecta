import { FormulaComponent } from './formula.component';

describe('FormulaComponent', () => {

    let component: FormulaComponent;

    beforeEach(() => {
        component = new FormulaComponent();
    })

    it('should return 20 if m = 3, x = 6, b = 2', () => {
        component.recta(3,6,2);
        expect(component.y).toBe(20);
    })

    it('should return 20 if m = 2, x = 5, b = 1', () => {
        component.recta(2,5,1);
        expect(component.y).toBe(11);
    })

    it('should return 20 if m = 2, x = 3.6, b = 2.1', () => {
        component.recta(2,3.6,2.1);
        expect(component.y).toBe(9.3);
    })
})