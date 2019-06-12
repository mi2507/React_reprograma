import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


//Aqui temos uma array com dois objetos dentro 
let Tempo = [
    {
        id: 1,
        data: '31/05/2019',
        resumo: 'Ensolarado',
        imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
        temperatura: {
            max: 31,
            min: 20
        }
    },

    {
        id: 2,
        data: '01/06/2019',
        resumo: 'Nublado',
        imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
        temperatura: {
            max: 25,
            min: 18
        }
    }
]

/* Aqui temos um componente React */
class Estrutura extends React.Component{
    render(){
        return(
            <div className="previsao-container">
                <Template />
            </div>
        )
    }
}

/* Aqui temos outro componente React */
class Template extends React.Component{
    render() {
        return Tempo.map(Tempo => {
            return (
                <div className="previsao" key={Tempo.id}>
                    <h2 className="previsao__data">{Tempo.data}</h2>
                    <p className="previsao__resumo">{Tempo.resumo}</p>
                    <img className="previsao__img" src={Tempo.imagem}></img>
                    <table className="previsao-temperatura">
                        <tbody>
                            <tr className="previsao-temperatura__linha">
                                <th>Maxima</th>
                                <td>{Tempo.temperatura.max}ºC</td>
                            </tr>
                            <tr className="previsao-temperatura__linha">
                                <th>Minima</th>
                                <td>{Tempo.temperatura.min}ºC</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            )
        })
    }
}


// /*Esse metodo rendeniza os elemento dentro da pagina, tratando como parametros OQUE dever ser posto e AONDE. */
ReactDOM.render(<Estrutura />, document.getElementById('root'));

// ESSA È A MANEIRA QUE A PROFESSORA FEZ




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
