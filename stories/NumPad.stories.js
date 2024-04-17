import NumPad from '../lib';

export default {
  component: NumPad.Number,
};

export const Primary = {
  args: {
    onChange: (e) => {console.log(e)},
    placeholder: 'Ex 12346',
    decimal: 0,
    negative: false,
    position: 'center',
    theme: {
      header: {
        primaryColor: '#263238',
        secondaryColor: '#ECEFF1',
        highlightColor: '#FFC107',
        backgroundColor: '#0093C9',
      },
      body: {
        primaryColor: '#263238',
        secondaryColor: '#32a5f2',
        highlightColor: '#FFC107',
        backgroundColor: '#ECEFF1',
      },
      panel: {
        backgroundColor: '#CFD8DC',
      },
      global: {
        fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif, Helvetica',
      }
    }
  }
};