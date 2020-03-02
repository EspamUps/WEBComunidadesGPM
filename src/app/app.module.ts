import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";

// Components
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { PersonaComponent } from './components/persona/persona.component';
import { Page404Component } from './components/page404/page404.component';
import { NavComponent } from "./nav/nav.component";
// import { InventarioComponent } from './components/inventario/inventario.component';
// import { CompraComponent } from './components/compra/compra.component';
// import { VentaComponent } from './components/venta/venta.component';

// Functional Components
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ModalDetallePersonaComponent } from './components/modal-detalle-persona/modal-detalle-persona.component';
import { ModalAsignacionUsuarioPersonaComponent } from './components/modal-asignacion-usuario-persona/modal-asignacion-usuario-persona.component';
import { PipesModule } from './pipes/pipes.module';
import { MatChipsModule} from '@angular/material/chips';
import { PanelAdministracionComponent } from './components/panel-administracion/panel-administracion.component';
import { CantonComponent } from './components/canton/canton.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { ParroquiaComponent } from './components/parroquia/parroquia.component';
import { ProvinciaComponent } from './components/provincia/provincia.component';
import { ModalAsignacionUsuarioTiposUsuarioComponent } from './components/modal-asignacion-usuario-tipos-usuario/modal-asignacion-usuario-tipos-usuario.component';
import { ModalDetalleUsuarioComponent } from './components/modal-detalle-usuario/modal-detalle-usuario.component';

import { TooltipModule } from 'ng2-tooltip-directive';
import Swal from 'sweetalert2';
import { MatTableModule, MatNativeDateModule } from '@angular/material';
// import { ModalProvinciaPrefectoComponent } from './components/modal-provincia-prefecto/modal-provincia-prefecto.component';
// import { LugarRepresentanteComponent } from './components/lugar-representante/lugar-representante.component';
import { ModalLugarRepresentanteComponent } from './components/modal-lugar-representante/modal-lugar-representante.component';
import { TipoUsuarioComponent } from './components/tipo-usuario/tipo-usuario.component';
import { ModalAsignarModuloPrivilegioComponent } from './components/modal-asignar-modulo-privilegio/modal-asignar-modulo-privilegio.component';
import { ModalAsignarTipoUsuarioModuloPrivilegioComponent } from './components/modal-asignar-tipo-usuario-modulo-privilegio/modal-asignar-tipo-usuario-modulo-privilegio.component';

import { MatDatepickerModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule,MatExpansionModule, MatInputModule,MatSnackBarModule,MatCardModule,MatSelectModule } from "@angular/material";
import { CuestionarioGenericoComponent } from './components/cuestionario-generico/cuestionario-generico.component';
import { ModalAsignarResponsableCuestionarioGenericoComponent } from './components/modal-asignar-responsable-cuestionario-generico/modal-asignar-responsable-cuestionario-generico.component';
import { EstructuraCuestionarioGenericoComponent } from './components/estructura-cuestionario-generico/estructura-cuestionario-generico.component';
import { PreguntaAbiertaComponent } from './components/tipo-preguntas/pregunta-abierta/pregunta-abierta.component';
import { PreguntaSeleccionComponent } from './components/tipo-preguntas/pregunta-seleccion/pregunta-seleccion.component';
import { PreguntaMatrizComponent } from './components/tipo-preguntas/pregunta-matriz/pregunta-matriz.component';
import { EncajonarPreguntaComponent } from './components/encajonar-pregunta/encajonar-pregunta.component';
import { CuestionarioGenericoDetalleComponent } from './components/cuestionario-generico-detalle/cuestionario-generico-detalle.component';
import { CuestionarioGenericoVersionesComponent } from './components/cuestionario-generico-versiones/cuestionario-generico-versiones.component';
import { CuestionarioGenericoPublicarComponent } from './components/cuestionario-generico-publicar/cuestionario-generico-publicar.component';
import { ModalCuestionarioGenericoVersionDetalleComponent } from './components/modal-cuestionario-generico-version-detalle/modal-cuestionario-generico-version-detalle.component';
// import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    PersonaComponent,
    Page404Component,
    NavComponent,
    // InventarioComponent,
    // CompraComponent,
    // VentaComponent,
    ModalDetallePersonaComponent,
    ModalAsignacionUsuarioPersonaComponent,
    PanelAdministracionComponent,
    CantonComponent,
    ComunidadComponent,
    ParroquiaComponent,
    ProvinciaComponent,
    ModalAsignacionUsuarioTiposUsuarioComponent,
    ModalDetalleUsuarioComponent,
    // ModalProvinciaPrefectoComponent,
    // LugarRepresentanteComponent,
    ModalLugarRepresentanteComponent,
    TipoUsuarioComponent,
    ModalAsignarModuloPrivilegioComponent,
    ModalAsignarTipoUsuarioModuloPrivilegioComponent,
    CuestionarioGenericoComponent,
    ModalAsignarResponsableCuestionarioGenericoComponent,
    EstructuraCuestionarioGenericoComponent,
    PreguntaAbiertaComponent,
    PreguntaSeleccionComponent,
    PreguntaMatrizComponent,
    EncajonarPreguntaComponent,
    CuestionarioGenericoDetalleComponent,
    CuestionarioGenericoVersionesComponent,
    CuestionarioGenericoPublicarComponent,
    ModalCuestionarioGenericoVersionDetalleComponent,
    // MessageBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    PipesModule,
    MatChipsModule,
    TooltipModule,
    MatExpansionModule, //
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,MatNativeDateModule
  ],
  exports:[],
  entryComponents: [ 
    ModalDetallePersonaComponent,
    ModalAsignacionUsuarioPersonaComponent ,
    ModalAsignacionUsuarioTiposUsuarioComponent,
    ModalDetalleUsuarioComponent,
    ModalLugarRepresentanteComponent, //
    ModalAsignarTipoUsuarioModuloPrivilegioComponent,
    ModalAsignarResponsableCuestionarioGenericoComponent,
    ModalCuestionarioGenericoVersionDetalleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
