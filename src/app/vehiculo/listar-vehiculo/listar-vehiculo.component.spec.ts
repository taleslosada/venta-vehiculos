import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { Vehiculo } from '../vehiculo.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarVehiculoComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;

    component.vehiculos = [
      new Vehiculo(1, 'Renault', 'Kangoo', 2017, 12000, 'Rojo', '', ''),
      new Vehiculo(2, 'Chevrolet', 'Spark', 2018, 9000, 'Azul', '', ''),
      new Vehiculo(3, 'Mazda', 'CX5', 2020, 15000, 'Negro', '', '')
    ];

    fixture.detectChanges();
  });

  it('should create a table with 3 rows + header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
