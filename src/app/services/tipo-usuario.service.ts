import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { url } from "../../environments/environment";
@Injectable({
    providedIn: 'root'
  })

export class TipoUsuarioService {

    constructor(private http: HttpClient) { }

    private _header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    _consultarTiposUsuarios(_token:string=''){
        const _body = new HttpParams();
        
        return new Promise((resolve, reject) => {
          this.http.post(url+'tipousuario_consultar',_body.toString(),{headers:this._header})
                    .subscribe(res=>{
                      resolve(res);
                    },(err)=>{
                      reject(err);
                    });
        });
    
    }  
    
    _consultarTiposUsuariosNoAsignados(_IdUsuarioEncriptado){
      const _body = new HttpParams();
      return new Promise((resolve, reject) => {
      this.http.post(url+'tipousuario_consultarnoasignadosporusuario?_idUsuarioEncriptado='+_IdUsuarioEncriptado,_body.toString(),{headers:this._header})
              .subscribe(res=>{
                resolve(res);
              },(err)=>{
                reject(err);
              });
      });
    }

}  