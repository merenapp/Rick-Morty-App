import { Injectable } from '@angular/core';
import { Episodio } from '../interfaces/interfaces';
import { Storage } from "@ionic/storage";
// importamos el storage para hacer uso de el
import { ToastController } from '@ionic/angular';
// el toast es la pequeña pestañita que sale abajo para indicar que hemos añadido a favorito por ejemplo

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {


  favoritos: Episodio[] = [];
  constructor(private storage: Storage, private toastController: ToastController) { }

  async cargarFavoritos()
  {
    // no entiendo que es asincrono
    const favoritos = await this.storage.get('favoritos');
    // lo de await es porque es asincrono

    if(favoritos)
    {
      this.favoritos = favoritos;
      this.cargarFavoritos;
    }
  }

  addFav(episodio: Episodio)
  {
    const existe = this.favoritos.find( epi => epi.id === episodio.id);
    // esto es para comprobar si existe ya el episodio que vamos a añadir a favoritos
    if (!existe){
      this.favoritos.unshift(episodio);
      this.storage.set('favoritos', this.favoritos);
      // guardamos en el storage los favoritos dentro de la propiedad favoritos
      this.mostrarToast('Añadido a favoritos');
    }
    else{
      this.mostrarToast('Ya ha sido añadido anteriormente');
    }
  }

  borrarFav(favorito: Episodio)
  {
    this.favoritos = this.favoritos.filter( epi => epi.id !== favorito.id);
    // el filter nos devuelve todo el array de favoritos sin el favorito que queremos borrar
    this.storage.set('favoritos', this.favoritos);
    this.mostrarToast("Eliminado correctamente");

  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

}
