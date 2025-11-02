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
      new Vehiculo(1, 'Mazda', '3', 2019, 60000, ''),
      new Vehiculo(2, 'Chevrolet', 'Sail', 2020, 50000, ''),
      new Vehiculo(3, 'Renault', 'Logan', 2021, 55000, '')
    ];

    fixture.detectChanges();
  });

  it('should create 3 rows in the table', () => {
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
