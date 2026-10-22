
import wlady from '../assets/images/wlady.jpeg'
import joel from '../assets/images/joel.jpeg'
import antony from '../assets/images/antony.jpeg'
import federico from '../assets/images/fede.jpeg'
import sofia from '../assets/blackbelt/sofia.jpeg'
import david from '../assets/blackbelt/david.jpeg'
import josue from '../assets/blackbelt/josu.jpeg'
import david1 from '../assets/blackbelt/david1.jpeg'
import unknown from '../assets/blackbelt/unk.jpeg'
export const instructors = [
    {
        id: 'anthony',
        name: 'Anthony',
        role: 'Director del Club',
        title: 'PhD ...',
        dan: '6TO',
        experience: '......',
        image: antony,
        alt: 'Fotografía de Anthony, director del club',
    },
    {
        id: 'wlady',
        name: 'Wladimir',
        role: 'Entrenador del Club',
        title: 'LIC ...',
        dan: '5TO',
        experience: 'Por definir',
        image: wlady,
        alt: 'Wladimir con uniforme de Taekwondo y cinturón negro',
    },
    {
        id: 'joel',
        name: 'Joel',
        role: 'Entrenador del Club',
        title: 'LIC ...',
        dan: '3RO',
        experience: '......',
        image: joel,
        alt: 'Joel con uniforme de Taekwondo y cinturón negro',
    },
    {
        id: 'federico',
        name: 'Federico',
        role: 'Entrenador del Club',
        title: 'Por definir',
        dan: '1ER',
        experience: 'Por definir',
        image: federico,
        alt: 'Federico con uniforme de artes marciales y cinturón negro',
    },
    {
        id: 'instructor-5',
        name: 'Nombre del quinto instructor',
        role: 'Instructor',
        title: 'Por definir',
        dan: 'Por definir',
        experience: 'Por definir',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85',
        alt: 'Fotografía del quinto instructor',
    },
]
export const blackBelt = [
{
    id: 'anthony',
    name: 'Anthony',
    dan: '6TO',
    image: antony,
    alt: 'Fotografía de Anthony, director del club',
},
{
    id: 'wlady',
    name: 'Wladimir',
    dan: '5TO',
    image: wlady,
    alt: 'Fotografía de Wladimir, entrenador del club',
},
{
    id: 'joel',
    name: 'Joel',
    dan: '3RO',
    image: joel,
    alt: 'Fotografía de Joel, entrenador del club',
},
{
    id: 'federico',
    name: 'Federico',
    dan: '1ER',
    image: federico,
    alt: 'Fotografía de Federico, entrenador del club',
},
{
    id: 'sofia',
    name: 'Sofia',
    dan: 'Por definir',
    image: sofia,
    alt: 'Fotografía de Sofia, black belt del club',
},
{
    id: 'david-1',
    name: 'David',
    dan: 'Por definir',
    image: david,
    alt: 'Fotografía de David, black belt del club',
},
{
    id: 'david-2',
    name: 'David',
    dan: 'Por definir',
    image: david1,
    alt: 'Fotografía de David, black belt del club',
},
{
    id: 'josue',
    name: 'Josue',
    dan: 'Por definir',
    image: josue,
    alt: 'Fotografía de Josue, black belt del club',
},
{
    id: 'blackBelt-5',
    name: 'Nombre del black belt 5',
    dan: 'Por definir',
    image: unknown,
    alt: 'Fotografía del black belt 5',
},

]

// Se muestran todos los perfiles con fotografía local; el grado puede quedar pendiente.
export const blackBeltProfiles = blackBelt
    .filter((instructor) => !instructor.image.startsWith('http'))
    .map((instructor) => ({
        id: instructor.id,
        name: instructor.name,
        dan: instructor.dan,
        image: instructor.image,
        alt: instructor.alt,
    }))
