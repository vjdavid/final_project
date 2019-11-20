angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;

    todoList.todos = [
      { 
        titulo: 'Contra lo Imposible', 
        clasificacion: 'B', 
        imagen: "../images/movies/1.jpg",
        descripcion: "Los ganadores del Premio de la Academia® Matt Damon y Christian Bale protagonizan CONTRA LO IMPOSIBLE, la extraordinaria historia verdadera del visionario diseñador de autos estadounidense Carroll Shelby (Damon) y el intrépido conductor británico Ken Miles (Bale), quienes lucharon juntos contra la imposición corporativa, las leyes de la física y sus demonios personales, para construir un coche de carreras revolucionario para Ford Motor Company y así enfrentar a los dominantes autos de carrera de Enzo Ferrari en las 24 Horas de Le Mans en Francia en 1966.",
        duracion: "153 min",
        genero: "Accion",
        horario: "18:00" 
      },
      { 
        titulo: "Star Wars: El Ascenso de Skywalker", 
        clasificacion: "TBC", 
        imagen: "../images/movies/2.jpg",
        descripcion: "Lucasfilm y el director J.J. Abrams unen sus fuerzas una vez más para llevar a los espectadores a un viaje épico con STAR WARS: EL ASCENSO DE SKYWALKER. En esta fascinante conclusión de la saga Skywalker, nacerán nuevas leyendas y se librará la batalla final por la libertad.",
        duracion: "155 min",
        genero: "Accion",
        horario: "22:00" 
      },
      { 
        titulo: "Placa de Acero", 
        clasificacion: "B15", 
        imagen: "../images/movies/3.jpg",
        descripcion: "Roberto S. Recto (Alfonso Dosal), oficial ejemplar recién egresado de la academia se une a la fuerza de policía y es asignado con su nuevo compañero, Adrián Vázquez, patrullero corrupto y holgazán que ha cedido su alma a la corrupción por creer que no existe otro camino posible en este sistema. Juntos tendrán que ir aprendiendo uno del otro para lograr tener la fuerza necesaria para triunfar sobre el crimen organizado y así traer justicia y salvación a la Ciudad de México.",
        duracion: "102 min",
        genero: "Comedia",
        horario: "13:00" 
      },
      { 
        titulo: "Frozen 2", 
        clasificacion: "TBC", 
        imagen: "../images/movies/4.jpg",
        descripcion: "¿Por qué Elsa nació con poderes mágicos? La respuesta la está llamando y amenazando su reino. Junto con Anna, Kristoff, Olaf y Sven, se embarcará en un peligroso, pero extraordinario viaje. En FROZEN: UNA AVENTURA CONGELADA, Elsa temía que sus poderes fueran demasiado para el mundo. En FROZEN 2, ella debe esperar que sean suficientes.",
        duracion: "101 min",
        genero: "Animacion",
        horario: "16:00" 
      },
      { 
        titulo: "Midway: Batalla en el Pacifico", 
        clasificacion: "B", 
        imagen: "../images/movies/5.jpg",
        descripcion: "Mientras la Segunda Guerra Mundial avanzaba, un choque entre la flota estadounidense y la Armada Imperial Japonesa que marcó un punto histórico en el mundo. MIDWAY Guerra en el Pacífico narra la historia real de los dirigentes y soldados que se encontraron en ese momento, demostrando sus hazañas heroicas, instintos de supervivencia, fortaleza y valentía para superar las dificultades de lo que fue uno de los más grandes eventos para toda la humanidad.",
        duracion: "138 min",
        genero: "Accion",
        horario: "17:00" 
      },
      { 
        titulo: "Reflejos Siniestros", 
        clasificacion: "B", 
        imagen: "../images/movies/6.jpg",
        descripcion: "Los jóvenes de un internado encuentran en el ala abandonada del edificio un misterioso espejo frente al cual piden deseos, lo que descubrirán es que el espejo le pertenecía a la Condesa Obolenskaya, y su fantasma está dispuesto a cumplir sus deseos a cambio de sus almas.",
        duracion: "84 min",
        genero: "Terror",
        horario: "19:00" 
      },
      { 
        titulo: "Los Muertos no Mueren", 
        clasificacion: "B15", 
        imagen: "../images/movies/7.jpg",
        descripcion: "En la apacible localidad de Centerville pasa algo raro. Los animales han comenzado a comportarse de manera extraña. Nadie sabe por qué y las noticias son desconcertantes. A pesar de todo, nadie es capaz de prever la mayor invasión que pronto comenzará a sacudir Centerville: los muertos ya no están muertos. Se alzan sobre sus tumbas y atacan salvajemente a los vivos para devorarlos; y los lugareños, que hasta el momento creían vivir una vida apacible, se ven obligados a luchar para sobrevivir. El director y guionista Jim Jarmusch (Paterson, Solo los amantes sobreviven), regresa con una aterradora comedia y con el mejor reparto zombie de la historia: Bill Murray, Adam Driver, Tilda Swinton, Selena Gómez, Chloë Sevigny, Iggy Pop y más.",
        duracion: "105 min",
        genero: "Terror",
        horario: "20:00" 
      },
      { 
        titulo: "Doctor Sueño", 
        clasificacion: "B15", 
        imagen: "../images/movies/8.jpg",
        descripcion: "Doctor Sueño retoma la historia de Danny Torrance 40 años después de su escalofriante estancia en el hotel Overlook en El Resplandor. Ewan McGregor, Rebecca Ferguson y la actriz revelación Kyliegh Curran protagonizan este thriller sobrenatural dirigido por Mike Flanagan, quien creó el guion basado en la novela de Stephen King.",
        duracion: "152 min",
        genero: "Terror",
        horario: "19:00" 
      },
      { 
        titulo: "Jugando con Fuego", 
        clasificacion: "A", 
        imagen: "../images/movies/9.jpg",
        descripcion: "Doctor Sueño retoma la historia de Danny Torrance 40 años después de su escalofriante estancia en el hotel Overlook en El Resplandor. Ewan McGregor, Rebecca Ferguson y la actriz revelación Kyliegh Curran protagonizan este thriller sobrenatural dirigido por Mike Flanagan, quien creó el guion basado en la novela de Stephen King.",
        duracion: "96 min",
        genero: "Comedia",
        horario: "18:00" 
      }
    ];
});