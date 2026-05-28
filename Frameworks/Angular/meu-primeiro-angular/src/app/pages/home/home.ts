import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //exemplo de Interpolação (DataBinding)
  //Comunicação unidirecional entre TS -> Html
  // a Interpolação é dada usando  {{ elemetno }}
  nome: string = 'Maria';

  //Property Binding -> Unidirecional: TS -> HTML
  // manipula propriedade do HTML
  // a Property Binding é usada com [] em volta do Elemento
  imgUrl: string =
    'https://imgs.search.brave.com/40CF_dg5cyZKK01p7xIFb1Mzt6xmPkHnfjVwCDBtaC4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/NTVtUXJpV29MeG9B/QUFBTS9iYXRtYW4u/Z2lm.gif';

  botaoDesabilitado: boolean = true;

  //Class e Style Binding
  classeAlerta: string = "alert-success"

}
