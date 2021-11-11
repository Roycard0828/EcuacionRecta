import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FormulaComponent } from '../Funcionalidad/formula.component';
import { By } from '@angular/platform-browser';

import { InterfazUiComponent } from './interfaz-ui.component';

describe('InterfazUiComponent', () => {
  let component: InterfazUiComponent;
  let fixture: ComponentFixture<InterfazUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfazUiComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should call getResult method',() => {
    let result = 0;
    component.b = 1.5;
    component.m = 2.6;
    component.x = 4;

    component.getResultado();
    result = component.resultado;

    expect(result).toBe(11.9);

  })

  it('Should set b model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="b"]')).nativeElement;

    // Act 
    inputElement.value = '3.14';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.b).toEqual(3.14);
  });

  it('Should set m model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="m"]')).nativeElement;

    // Act 
    inputElement.value = '2.71';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.m).toEqual(2.71);
  });

  it('Should set x model through ngModel', async() => {
    // Arrange 
    await fixture.whenStable();
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('input[name="x"]')).nativeElement;

    // Act 
    inputElement.value = '3';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert 
    expect(component.x).toEqual(3);
  });

  it('should realize the operation with b, m and x when I click the Obtener Resultado button ', () => {
    // Arrange 
    component.b = 5.0;
    component.x = 2.5;
    component.m = 2.1
    let resultButton = fixture.debugElement.query(By.css('.result-button'));

    // Act
    resultButton.triggerEventHandler('click', null);

    // Assert
    expect(component.resultado).toBe(10.25);

   });

   it('Should render result in result-div', () => {
    // Arrange
    component.b = 5;
    component.m = 2;
    component.x = 3;
 
    // Act
    component.getResultado();
    fixture.detectChanges();
    
    let de = fixture.debugElement.query(By.css('.resultado'));
    let el : HTMLElement = de.nativeElement;

    // Assert
    expect(el.innerText).toContain('11');
     
  });
});
