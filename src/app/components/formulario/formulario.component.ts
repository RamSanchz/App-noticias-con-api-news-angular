import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';

  paisSeleccionado = 'mx';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'busines', nombre: 'Negocios' },
    { value: 'entertainment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ];

  paises: any[] = [
    { value: 'mx', nombre: 'México' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brazil' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'gb', nombre: 'Reino Unido' },
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarNoticia(): void {
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado,
    };

    this.parametrosSeleccionados.emit(PARAMETROS);
  }
}
