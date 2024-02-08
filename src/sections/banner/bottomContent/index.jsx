import React from 'react'
import './index.css'
import RotatingText from '../../../components/rotatingText';
import FloatingPlayer from '../../../components/floatingPlayer';

const bannerImageSrc = "https://images.pexels.com/photos/13300951/pexels-photo-13300951.jpeg"

// Obtener la hora actual
let fechaActual = new Date();

// Obtener los componentes de la fecha
let horas = fechaActual.getHours();
let minutos = fechaActual.getMinutes();

// Formatear la hora y minutos con ceros a la izquierda si es necesario
horas = agregarCerosIzquierda(horas);
minutos = agregarCerosIzquierda(minutos);

function agregarCerosIzquierda(valor) {
    return valor < 10 ? `0${valor}` : valor;
}

// Días de la semana en español
const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Meses en español
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// Obtiene el día de la semana, el día del mes y el mes
const diaSemana = diasSemana[fechaActual.getDay()];
const diaMes = fechaActual.getDate();
const mes = meses[fechaActual.getMonth()];
const año = fechaActual.getFullYear();

const formatDate = `${diaSemana} ${diaMes} ${mes} ${año}`;
const formatHour = `${horas}:${minutos} hs`;

const BottomContent = () => {
    return (
        <div className='bottom__container'>
            <div className="left">
                <img className='mini__image' src={bannerImageSrc} />
                <p className='mini__text'>consectetur adipisicing elit. Omnis itaque adipisci  Omnis itaque adipisci</p>

                <div className="special__buttons">
                    <button>Web Development</button>
                    <button>Frontend</button>
                    <button>UX UI</button>
                    <button>Backend</button>
                    <button>Fullstack</button>
                </div>
            </div>
            
            <div className="mid">
                <FloatingPlayer />
            </div>

            <div className="right">
                <h1 className='time'>{formatHour}</h1>
                <p className='mini__text'>{formatDate} Buenos Aires, Argentina.</p>
            </div>
        </div>
    )
}

export default BottomContent