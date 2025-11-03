import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { VehiculoService } from '../vehiculo.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let vehiculoService: jasmine.SpyObj<VehiculoService>;

  beforeEach(async () => {
    const mockVehiculos = [
      { id: 1, marca: 'Chevrolet', linea: 'Spark', modelo: 2018 },
      { id: 2, marca: 'Renault', linea: 'Sandero', modelo: 2020 },
      { id: 3, marca: 'Mazda', linea: 'CX-5', modelo: 2021 }
    ];

    const vehiculoServiceSpy = jasmine.createSpyObj('VehiculoService', ['getvehiculos']);
    vehiculoServiceSpy.getvehiculos.and.returnValue(of(mockVehiculos));

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ListarVehiculoComponent],
      providers: [
        { provide: VehiculoService, useValue: vehiculoServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    vehiculoService = TestBed.inject(VehiculoService) as jasmine.SpyObj<VehiculoService>;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a table with 3 rows of vehicles plus header', () => {
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});
