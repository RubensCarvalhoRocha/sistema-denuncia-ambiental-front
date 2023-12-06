import { Component } from '@angular/core';
import { denunciaDetalhada } from 'app/models/DenunciaDetalhada';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-visualisar',
  templateUrl: './visualisar.component.html',
  styleUrls: ['./visualisar.component.scss']
})
export class VisualisarComponent {

    denuncia: denunciaDetalhada;
    imagemBase64: string | null = null;

    downloadImagem(): void {
        if (this.imagemBase64) {
          // Converter a base64 para um Blob
          const byteCharacters = atob(this.imagemBase64.split(',')[1]);
          const byteNumbers = new Array(byteCharacters.length);
          for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          const blob = new Blob([byteArray], { type: 'image/png' });

          // Usar a biblioteca file-saver para baixar o Blob
          saveAs(blob, 'imagem.png');
        }
    }
}
