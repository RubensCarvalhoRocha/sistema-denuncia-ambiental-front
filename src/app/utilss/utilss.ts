import { Notyf } from 'notyf';

// Crie uma instância do Notyf
const notyf = new Notyf({
  duration: 2000,
  position: {
    x: 'right',
    y: 'top',
  },
  types: [
    {
      type: 'success',
      background: '#3DC763',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'check_circle',
        color: 'white',
      },
    },
    {
      type: 'warning',
      background: 'orange',
      icon: {
        className: 'material-icons',
        tagName: 'i',
        text: 'warning',
      },
    },
    {
      type: 'error',
      background: 'indianred',
      duration: 2000,
      dismissible: true,
    },
  ],
});

export default notyf;