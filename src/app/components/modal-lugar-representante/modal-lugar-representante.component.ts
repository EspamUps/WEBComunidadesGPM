import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatTable, MatSnackBar } from '@angular/material';
import { LugaresService } from 'src/app/services/lugares.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe, formatDate } from '@angular/common';
@Component({
  selector: 'app-modal-lugar-representante',
  templateUrl: './modal-lugar-representante.component.html',
  styleUrls: ['./modal-lugar-representante.component.css']
})
export class ModalLugarRepresentanteComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private lugaresService: LugaresService,
    private snackBarComponent: MatSnackBar,
    private datePipe: DatePipe
  ) {
    this.formLugarRepresentante = new FormGroup({
      _tipoLugar: new FormControl(''),
      _idLugarEcriptado: new FormControl('', [Validators.required]),
      _nombreLugar: new FormControl('', [Validators.required]),
      _representante: new FormControl('', [Validators.required]),
      _fechaIngreso: new FormControl('', [Validators.required]),
      _fechaSalida: new FormControl(''),
      _tituloRepresentante: new FormControl('')
    });
  }
  formLugarRepresentante: FormGroup;
  representante: any = null;
  get formLugarRepresentante_tipoLugar() {
    return this.formLugarRepresentante.get("_tipoLugar");
  }
  get formLugarRepresentante_idLugarEcriptado() {
    return this.formLugarRepresentante.get("_idLugarEcriptado");
  }
  get formLugarRepresentante_nombreLugar() {
    return this.formLugarRepresentante.get("_nombreLugar");
  }
  get formLugarRepresentante_representante() {
    return this.formLugarRepresentante.get("_representante");
  }
  get formLugarRepresentante_fechaIngreso() {
    return this.formLugarRepresentante.get("_fechaIngreso");
  }
  get formLugarRepresentante_fechaSalida() {
    return this.formLugarRepresentante.get("_fechaSalida");
  }
  get formLugarRepresentante_tituloRepresentante() {
    return this.formLugarRepresentante.get("_tituloRepresentante");
  }
  ngOnInit() {
    this.formLugarRepresentante_nombreLugar.disable();
    this._cargartabla();
  }
  mensaje(_mensaje: string, _duracion?: number, _color?: string) {
    if (_duracion == null) {
      _duracion = 3000;
    }
    if (_color == null) {
      _color = "gpm-danger";
    }
    let snackBarRef = this.snackBarComponent.open(_mensaje, null, { duration: _duracion, panelClass: [`${_color}`], verticalPosition: 'bottom', horizontalPosition: 'end' });
  }
  tablaRepresentantes = ['representante', 'fechaIngreso', 'fechaSalida', 'acciones'];
  _listaRepresentantes: any[] = [];
  _validarFormulario2() {
    if (this._btnAccion === "Guardar") {
      this._ingresarRepresentante();
    }
    if (this._btnAccion === "Modificar") {
      this._modificarRepresentante();
    }
  }
  _ingresarRepresentanteProvincia2() {
    let __fechaIngreso = this.formLugarRepresentante_fechaIngreso.value + " 0:00:00";
    let __fechaSalida = '';
    if (
      this.formLugarRepresentante_fechaSalida.value == null ||
      this.formLugarRepresentante_fechaSalida.value == 'null' ||
      this.formLugarRepresentante_fechaSalida.value == ''
    ) {
      this.formLugarRepresentante_fechaSalida.setValue('');
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value;
    } else {
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value + " 0:00:00";
    }
    this.lugaresService._insertarRepresentanteProvincia(
      this.formLugarRepresentante_idLugarEcriptado.value,
      this.formLugarRepresentante_representante.value,
      __fechaIngreso,
      __fechaSalida
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteProvincia();
        this.formLugarRepresentante_representante.reset();
        this.formLugarRepresentante_fechaSalida.setValue(null);
        this.formLugarRepresentante_fechaIngreso.setValue(null);
        this.clearMenssageError();
        this.formLugarRepresentante.setErrors({ invalid: true });
        this.mensaje("Representante registrado", null, 'msj-success');
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  _ingresarRepresentanteCanton2() {
    let __fechaIngreso = this.formLugarRepresentante_fechaIngreso.value + " 0:00:00";
    let __fechaSalida = '';
    if (
      this.formLugarRepresentante_fechaSalida.value == null ||
      this.formLugarRepresentante_fechaSalida.value == 'null' ||
      this.formLugarRepresentante_fechaSalida.value == ''
    ) {
      this.formLugarRepresentante_fechaSalida.setValue('');
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value;
    } else {
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value + " 0:00:00";
    }
    this.lugaresService._insertarRepresentanteCanton(
      this.formLugarRepresentante_idLugarEcriptado.value,
      this.formLugarRepresentante_representante.value,
      __fechaIngreso,
      __fechaSalida
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteCanton();
        this.formLugarRepresentante_representante.reset();
        this.formLugarRepresentante_fechaSalida.setValue(null);
        this.formLugarRepresentante_fechaIngreso.setValue(null);
        this.clearMenssageError();
        this.formLugarRepresentante.setErrors({ invalid: true });
        this.mensaje("Representante registrado", null, 'msj-success');
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  clearMenssageError() {
    this.formLugarRepresentante.controls['_representante'].setErrors(null);
    this.formLugarRepresentante.controls['_fechaIngreso'].setErrors(null);
    this.formLugarRepresentante.controls['_fechaSalida'].setErrors(null);
  }
  _ingresarRepresentanteParroquia2() {
    let __fechaIngreso = this.formLugarRepresentante_fechaIngreso.value + " 0:00:00";
    let __fechaSalida = '';
    if (
      this.formLugarRepresentante_fechaSalida.value == null ||
      this.formLugarRepresentante_fechaSalida.value == 'null' ||
      this.formLugarRepresentante_fechaSalida.value == ''
    ) {
      this.formLugarRepresentante_fechaSalida.setValue('');
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value;
    } else {
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value + " 0:00:00";
    }
    this.lugaresService._insertarRepresentanteParroquia(
      this.formLugarRepresentante_idLugarEcriptado.value,
      this.formLugarRepresentante_representante.value,
      __fechaIngreso,
      __fechaSalida
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteParroquia();
        this.formLugarRepresentante_representante.reset();
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  _ingresarRepresentanteComunidad2() {
    let __fechaIngreso = this.formLugarRepresentante_fechaIngreso.value + " 0:00:00";
    let __fechaSalida = '';
    if (
      this.formLugarRepresentante_fechaSalida.value == null ||
      this.formLugarRepresentante_fechaSalida.value == 'null' ||
      this.formLugarRepresentante_fechaSalida.value == ''
    ) {
      this.formLugarRepresentante_fechaSalida.setValue('');
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value;
    } else {
      __fechaSalida = this.formLugarRepresentante_fechaSalida.value + " 0:00:00";
    }
    this.lugaresService._insertarRepresentanteComunidad(
      this.formLugarRepresentante_idLugarEcriptado.value,
      this.formLugarRepresentante_representante.value,
      __fechaIngreso,
      __fechaSalida
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteComunidad();
        this.formLugarRepresentante_representante.reset();
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  _btnAccion = "Guardar";
  _modificarRepresentante() {
    if (this.data.lugar_tipo == "provincia") {
      this._modificarRepresentanteProvincia(this.representante.IdPrefectoEncriptado, this.representante.Provincia.IdProvinciaEncriptado, this.representante.Representante, this.representante.FechaIngreso, this.formLugarRepresentante_fechaSalida.value)
    } else if (this.data.lugar_tipo == "canton") {
      this._modificarRepresentanteCanton(this.representante.IdAlcaldeEncriptado, this.representante.Canton.IdCantonEncriptado, this.representante.Representante, this.representante.FechaIngreso, this.formLugarRepresentante_fechaSalida.value)
    } else if (this.data.lugar_tipo == "parroquia") {
      this._modificarRepresentanteParroquia(this.representante.IdPresidenteJuntaParroquialEncriptado, this.representante.Parroquia.IdParroquiaEncriptado, this.representante.Representante, this.representante.FechaIngreso, this.formLugarRepresentante_fechaSalida.value)
    } else if (this.data.lugar_tipo == "comunidad") {
    }
  }
  fechaBase = '';
  _prepararRepresentante(element) {
    this.formLugarRepresentante_fechaSalida.setValidators([Validators.required]);
    this.formLugarRepresentante_fechaSalida.updateValueAndValidity();
    this._btnAccion = "Modificar";
    this.formLugarRepresentante_representante.setValue(element.Representante);
    this.formLugarRepresentante_representante.disable();
    this.formLugarRepresentante_fechaIngreso.setValue(this.datePipe.transform(element.FechaIngreso, 'yyyy-MM-dd'));
    this.formLugarRepresentante_fechaIngreso.disable();
    this.representante = element;
    const formattedDate = formatDate(element.FechaIngreso, 'yyyy-MM-dd', 'en-US');
    this.fechaBase = formattedDate;
  }
  @ViewChild(MatTable, { static: false }) MatTableRepresentantes: MatTable<any>;
  _cargartabla() {
    if (this.data.lugar_tipo == "provincia") {
      this.formLugarRepresentante_tipoLugar.setValue("Provincia");
      this.formLugarRepresentante_nombreLugar.setValue(this.data.lugar_data.NombreProvincia);
      this.formLugarRepresentante_idLugarEcriptado.setValue(this.data.lugar_data.IdProvinciaEncriptado);
      this.formLugarRepresentante_tituloRepresentante.setValue("PREFECTO");
      this._cargarRepresentanteProvincia();
    } else if (this.data.lugar_tipo == "canton") {
      this.formLugarRepresentante_tipoLugar.setValue("Cantón");
      this.formLugarRepresentante_nombreLugar.setValue(this.data.lugar_data.NombreCanton);
      this.formLugarRepresentante_idLugarEcriptado.setValue(this.data.lugar_data.IdCantonEncriptado);
      this.formLugarRepresentante_tituloRepresentante.setValue("ALCALDE");
      this._cargarRepresentanteCanton();
    } else if (this.data.lugar_tipo == "parroquia") {
      this.formLugarRepresentante_tipoLugar.setValue("Parroquia");
      this.formLugarRepresentante_nombreLugar.setValue(this.data.lugar_data.NombreParroquia);
      this.formLugarRepresentante_idLugarEcriptado.setValue(this.data.lugar_data.IdParroquiaEncriptado);
      this.formLugarRepresentante_tituloRepresentante.setValue("PRESIDENTE DE LA JUNTA PARROQUIAL");
      this._cargarRepresentanteParroquia();
    } else if (this.data.lugar_tipo == "comunidad") {
      this.formLugarRepresentante_tipoLugar.setValue("Comunidad");
      this.formLugarRepresentante_nombreLugar.setValue(this.data.lugar_data.NombreComunidad);
      this.formLugarRepresentante_idLugarEcriptado.setValue(this.data.lugar_data.IdComunidadEncriptado);
      this.formLugarRepresentante_tituloRepresentante.setValue("LÍDER COMUNITARIO");
      this._cargarRepresentanteComunidad();
    }
  }
  _eliminarRepresentante(_item) {
    if (this.data.lugar_tipo == "provincia") {
      this._eliminarRepresentanteProvincia(_item);
    } else if (this.data.lugar_tipo == "canton") {
      this._eliminarRepresentanteCanton(_item);
    } else if (this.data.lugar_tipo == "parroquia") {
      this._eliminarRepresentanteParroquia(_item);
    } else if (this.data.lugar_tipo == "comunidad") {
      this._eliminarRepresentanteComunidad(_item);
    }
  }
  _ingresarRepresentante() {
    if (this.data.lugar_tipo == "provincia") {
      this._ingresarRepresentanteProvincia2();
    } else if (this.data.lugar_tipo == "canton") {
      this._ingresarRepresentanteCanton2();
    } else if (this.data.lugar_tipo == "parroquia") {
      this._ingresarRepresentanteParroquia2();
    } else if (this.data.lugar_tipo == "comunidad") {
      this._ingresarRepresentanteComunidad2();
    }
  }
  _cargarRepresentanteProvincia() {
    let id = this.formLugarRepresentante_idLugarEcriptado.value;
    this.lugaresService._consultarRepresentanteProvincia(id)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          this._listaRepresentantes = data['respuesta'];
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        this.MatTableRepresentantes.renderRows();
      });
  }
  _modificarRepresentanteProvincia(_IdPrefectoEncriptado, _IdProvinciaEncriptado, _Representante, _FechaIngreso, _FechaSalida) {
    var ejecutado = false;
    this.lugaresService._modificarRepresentanteProvincia(_IdPrefectoEncriptado, _IdProvinciaEncriptado, _Representante, _FechaIngreso, _FechaSalida)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          ejecutado = true;
          this.formLugarRepresentante.reset();
          this.formLugarRepresentante_representante.setValue(null);
          this.mensaje("Registro actualizado", null, 'msj-success');
        } else {
          this.mensaje(data['http']['mensaje']);
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        if (ejecutado == true) {
          this.representante = null;
          this._btnAccion = "Guardar";
          this.formLugarRepresentante_representante.enable();
          this.formLugarRepresentante_fechaIngreso.enable(); 
          this._cargartabla();
        }
      });
  }
  _eliminarRepresentanteProvincia(_item) {
    this.lugaresService._eliminarRepresentanteProvincia(
      _item.IdPrefectoEncriptado,
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteProvincia();
        this.mensaje("Prefecto eliminado", null, 'msj-success');
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  _cargarRepresentanteCanton() {
    let id = this.formLugarRepresentante_idLugarEcriptado.value;
    this.lugaresService._consultarRepresentanteCanton(id)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          this._listaRepresentantes = data['respuesta'];
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        this.MatTableRepresentantes.renderRows();
      });
  }
  _modificarRepresentanteCanton(_IdAlcaldeEncriptado, _IdCantonEncriptado, _Representante, _FechaIngreso, _FechaSalida) {
    var ejecutado = false;
    this.lugaresService._modificarRepresentanteCanton(_IdAlcaldeEncriptado, _IdCantonEncriptado, _Representante, _FechaIngreso, _FechaSalida)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          ejecutado = true;
          this.formLugarRepresentante_representante.reset();
          this.formLugarRepresentante_fechaSalida.setValue(null);
          this.formLugarRepresentante_fechaIngreso.setValue(null);
          this.clearMenssageError();
          this.formLugarRepresentante.setErrors({ invalid: true });
          this.mensaje("Registro actualizado", null, 'msj-success');
        } else {
          this.mensaje(data['http']['mensaje']);
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        if (ejecutado == true) {
          this.representante = null;
          this.formLugarRepresentante_fechaSalida.clearValidators();
          this.formLugarRepresentante_fechaSalida.updateValueAndValidity();
          this._btnAccion = "Guardar";
          this.formLugarRepresentante.reset();
          this.formLugarRepresentante_representante.enable();
          this.formLugarRepresentante_fechaIngreso.enable();
          this._cargartabla();
        }
      });
  }

  _eliminarRepresentanteCanton(_item) {
    this.lugaresService._eliminarRepresentanteCanton(
      _item.IdAlcaldeEncriptado,
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteCanton();
        this.mensaje("Prefecto eliminado", null, 'msj-success');
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  _cargarRepresentanteParroquia() {
    let id = this.formLugarRepresentante_idLugarEcriptado.value;
    this.lugaresService._consultarRepresentanteParroquia(id)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          this._listaRepresentantes = data['respuesta'];
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        this.MatTableRepresentantes.renderRows();
      });
  }
  _modificarRepresentanteParroquia(_IdPresidenteJuntaParroquialEncriptado, _IdParroquiaEncriptado, _Representante, _FechaIngreso, _FechaSalida) {
    var ejecutado = false;
    this.lugaresService._modificarRepresentanteParroquia(_IdPresidenteJuntaParroquialEncriptado, _IdParroquiaEncriptado, _Representante, _FechaIngreso, _FechaSalida)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          ejecutado = true;
        } else {
          this.mensaje(data['http']['mensaje']);
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        if (ejecutado == true) {
          this.representante = null;
          this.formLugarRepresentante_fechaSalida.clearValidators();
          this.formLugarRepresentante_fechaSalida.updateValueAndValidity();
          this._btnAccion = "Guardar";
          this.formLugarRepresentante.reset();
          this.formLugarRepresentante_representante.enable();
          this.formLugarRepresentante_fechaIngreso.enable();
          this._cargartabla();
        }
      });
  }
  _eliminarRepresentanteParroquia(_item) {
    this.lugaresService._eliminarRepresentanteParroquia(
      _item.IdPresidenteJuntaParroquialEncriptado,
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteParroquia();
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
  _cargarRepresentanteComunidad() {
    let id = this.formLugarRepresentante_idLugarEcriptado.value;
    this.lugaresService._consultarRepresentanteComunidad(id)
      .then(data => {
        if (data['http']['codigo'] == '200') {
          this._listaRepresentantes = data['respuesta'];
        }
      }).catch(error => {
        this.mensaje(error);
      }).finally(() => {
        this.MatTableRepresentantes.renderRows();
      });
  }
  _eliminarRepresentanteComunidad(_item) {
    this.lugaresService._eliminarRepresentanteComunidad(
      _item.IdLiderComunitarioEncriptado,
    ).then(data => {
      if (data['http']['codigo'] == '200') {
        this._cargarRepresentanteComunidad();
      } else if (data['http']['codigo'] == '500') {
        this.mensaje("A ocurrido un error inesperado, intente más tarde.")
      } else {
        this.mensaje(data['http']['mensaje']);
      }
    }).catch(error => {
      this.mensaje(error);
    })
  }
}
