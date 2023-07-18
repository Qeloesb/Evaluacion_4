import brazos from "./img/brazos.jpg"
import espalda from "./img/espalda.jpg"
import pecho from "./img/pecho.jpeg"
import curl_de_biceps from "./img/curl_de_biceps.jpg"
import step_back_squat from "./img/step_back_squat.jpg"
import peso_muerto_a_una_pierna from "./img/peso_muerto_a_una_pierna.jpg"
import patinador from "./img/patinador.jpg"
import lateral_toe_taps from "./img/lateral_toe_taps.jpg"
import PlanchaAbdominal from "./img/PlanchaAbdominal.png"
import EstocadaHaciaAdelante from "./img/EstocadaHaciaAdelante.png"
import saltarSoga from "./img/saltarSoga.jpg"
import sentadillas from "./img/sentadillas.jpg"

export const Data = {
    cardData: [
        {
            id: 1,
            imgSrc: curl_de_biceps,
            nombre: 'Curl de bíceps',
            categoria: 'Fuerza',
            desc: (<p>
                <p>
                    Ponte de pie y sujeta dos mancuernas o botellas de agua (para principiantes máximo 1 o 2 kilos).
                </p>
                <p>
                    Ponte de pie y sujeta dos mancuernas o botellas de agua (para principiantes máximo 1 o 2 kilos).
                </p>
                <p>
                    Las palmas de las manos deben quedar mirando hacia afuera.
                </p>
                <p>
                    Mantén una postura erguida y contrae el abdomen.
                </p>
                <p>
                    Acerca las pesas a tus hombros, flexionado los codos. Hazlo sin mover la parte superior de los brazos.
                </p>

            </p>),
            repeticiones: '20 Repeticiones',
            series: '4 Series',
            descanso: '30 Segundos de descanso'

        },
        {
            id: 2,
            imgSrc: patinador,
            nombre: 'El patinador',
            categoria: 'Cardio',
            desc: (<p>
                <p>
                    Este ejercicio hace trabajar a los músculos y glúteos del abductor de la cadera", dice Gawron. Eso significa que te ayudará a potenciar muchísimo una sola pierna, y sumarle un buen salto al cambiar de pierna lo hará aún más desafiante.
                </p>
                <p>
                    Cruza la pierna izquierda detrás de la pierna derecha mientras doblas la rodilla derecha 90 grados. Extiende el brazo derecho hacia un lado y gira el brazo izquierdo sobre la pierna derecha. Salta hacia el otro lado, cambiando la posición de tus piernas y brazos. Esa es una repetición.
                </p>
            </p>),
            repeticiones: '8 repeticiones',
            series: '6-8 series',
            descanso: '30 segundos de descanso'
        },
        {
            id: 3,
            imgSrc: EstocadaHaciaAdelante,
            nombre: 'Estocada hacia adelante',
            categoria: 'Resistencia',
            desc: (<p>
                <p>
                    Ponte de pie, el cuerpo recto y los pies separados al ancho de tus hombros. Da un paso amplio hacia adelante con una pierna, dejando a continuación que el cuerpo descienda para tocar el suelo con la otra pierna. Ejerce fuerza hacia abajo a través del talón delantero. Seguidamente retrocede manteniendo en todo momento la posición vertical del tronco.                </p>
                <p>
                    Haz el mismo movimiento pero cambiando la pierna que da la zancada y la que queda atrás. Al completar este habrás completado una repetición.
                </p>
            </p>),
            repeticiones: '30 repeticiones o 20 repeticiones',
            series: '5 series o 3 series',
            descanso: '30 segundos de descanso'
        },
        {
            id: 4,
            imgSrc: sentadillas,
            nombre: 'Sentadillas',
            categoria: 'Velocidad',
            desc: (<p>
                <p>
                    Las sentadillas son otro ejemplo de ejercicios de velocidad para adquirir fuerza y resistencia.
                </p>
                <p>
                    Manteniendo la espalda recta y los brazos extendidos, baja el tronco flexionando las rodillas hasta la posición de sentado. Aguanta unos segundos y vuelve a tu posición inicial.
                </p>
            </p>),
            repeticiones: '10 repeticiones',
            series: '4 series',
            descanso: '30 segundos de descanso'
        },
        {
            id: 5,
            imgSrc: step_back_squat,
            nombre: 'Step back squat',
            categoria: 'felixibilidad',
            desc: 'Optimiza la movilidad de tus caderas y la resistencia de la zona baja con este tipo de sentadilla muy fácil de hacer. Sigue las siguientes instrucciones: ',
            repeticiones: '',
            series: '',
            descanso: ''
        },
        {
            id: 6,
            imgSrc: peso_muerto_a_una_pierna,
            nombre: 'Peso muerto a una pierna',
            categoria: 'Fuerza',
            desc: (<p>
                <p>
                    Colócate de pie con la espalda recta.
                </p>
                <p>
                    Si te cuesta mantenerte en pie, termina de inclinarte hasta que tus palmas reposen en el suelo, eso te servirá de sostén. Si usas pesas, no deben tocar el piso, pero pueden estar cerca.
                </p>
                <p>
                    Si te cuesta mantenerte en pie, termina de inclinarte hasta que tus palmas reposen en el suelo, eso te servirá de sostén. Si usas pesas, no deben tocar el piso, pero pueden estar cerca.
                </p>
                <p>
                    Haz una pausa y luego repite todo lo anterior en la otra pierna.
                </p>
            </p >),
            repeticiones: '10 repeticiones',
            series: '3 series',
            descanso: '30 segundos de descanso'
        },
        {
            id: 7,
            imgSrc: lateral_toe_taps,
            nombre: 'Lateral Toe Taps',
            categoria: 'Cardio',
            desc: (<p>
                <p>
                    Este es un excelente ejercicio de velocidad que activa la cadera en posición de una sola pierna", dice Gawron. "También se trabaja el equilibrio y la estabilidad                </p>
                <p>
                    Coloca un cono, mancuerna, pesas rusas (kettlebell) o algún tipo de objetivo entre tus pies. Comienza con el pie derecho sobre el objetivo, manteniendo el peso en el pie izquierdo. Cambia rápidamente los pies para que tu pie izquierdo esté sobre el objetivo. Esa es una repetición. Continúa alternando pies mientras golpeas ligeramente la punta del pie en el objetivo.                </p>
            </p>),
            repeticiones: '8 repeticiones',
            series: '6-8 series',
            descanso: '30 segundos de descanso'
        },
        {
            id: 8,
            imgSrc: PlanchaAbdominal,
            nombre: 'Plancha abdominal',
            categoria: 'Resistencia',
            desc: (<p>
                <p>
                    El ejercicio de plancha abdominal es uno de los ejercicios para ganar resistencia y mantenerla más populares y efectivos. No debe faltar en una rutina de ejercicios para mejorar la resistencia muscular. Al hacerlo trabajarás distintos músculos, entre ellos los oblicuos, glúteos y femorales.
                </p>
                <p>
                    Para ejecutar este ejercicio debes comenzar por tumbarte boca abajo. Es importante que las caderas no toquen el suelo y que tus piernas permanezcan estiradas. Apoya sobre los antebrazos el tren superior.
                </p>
                <p>
                    Contrae los músculos de la espalda baja y los hombros al tiempo que elevas suavemente las caderas. Mantén esa posición unos segundos, cuantos más puedas, mejor. Si eres capaz de aguantar entre 30 y 45 segundos fantástico. Seguidamente vuelve a la posición de inicio con la musculatura relajada. Por último, cabe destacar que para no lastimarte brazos y muñecas con el constante contacto con el suelo, puedes usar una alfombrilla especial.
                </p>
            </p>),
            repeticiones: '5 repeticiones',
            series: '5 series',
            descanso: '1 minuto de descanso'
        },
        {
            id: 9,
            imgSrc: saltarSoga,
            nombre: 'Saltar soga',
            categoria: 'Velocidad',
            desc: (
                <p>
                    <p>
                        Saltar soga es uno de los ejercicios de velocidad más completos. Y es que te ayudará a ganar estabilidad, fuerza y velocidad en las piernas, además de potenciar tu aparato cardiorrespiratorio.
                    </p>
                    <p>
                        Puedes empezar con saltos suaves y periodos cortos e ir incrementando poco a poco la fuerza y velocidad.
                    </p>
                    <p>Lo recomendable son de 5 a 10 minutos si recién estás comenzando.</p>
                </p>

            ),
            repeticiones: '',
            series: '',
            descanso: ''
        },
        {
            id: 10,
            imgSrc: step_back_squat,
            nombre: 'Step back squat',
            categoria: 'felixibilidad',
            desc: '',
            repeticiones: '',
            series: '',
            descanso: ''
        }

    ]
};