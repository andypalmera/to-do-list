(function () {
    // ==========variables
    var boton = document.getElementById('buton-nueva-tarea');
    var inputNuevaTarea = document.getElementById('input-nueva-tarea');
    var tareasPendientes = document.getElementById('tareas-pendientes');
    var tareasCompletadas = document.getElementById('tareas-completadas');
    var fecha = document.getElementById('input-date');
    var hora = document.getElementById('input-time');
    var boton1;
    var boton2;

    // ================funciones
    var agregarTarea = function () {
        var li = document.createElement('li');
        li.classList.add('tarea-nueva');
        var tituloNuevaTarea = inputNuevaTarea.value;
        var h3 = crearElementos('h3', 'nombre-de-tarea');
        var p = crearElementos('p', 'fecha-tarea');
        h3.innerText = tituloNuevaTarea;
        p.innerText = `${fecha.value}  |  ${hora.value}`;

        if (tituloNuevaTarea === '') {
            inputNuevaTarea.setAttribute('placeholder', 'Enter a valid task');

            return agregarTarea === false;
        }

        if (fecha.value === '') {
            inputNuevaTarea.value = '';

            inputNuevaTarea.setAttribute('placeholder', 'Enter a valid date for your task');
            return agregarTarea === false;
        }

        if (hora.value === '') {
            inputNuevaTarea.value = '';

            inputNuevaTarea.setAttribute('placeholder', 'Enter a valid time to do your task');
            return agregarTarea === false;
        }

        // var div = crearElementos('div', 'tarea-nueva');

        var div1 = crearElementos('div', 'tarea-nueva-container');
        var section = crearElementos('section', 'tarea-datos');
        var div2 = crearElementos('div', 'butons-tarea-container');
        div2.setAttribute('id', 'butons-tarea-container');
        var boton1 = crearElementos('button', 'butons-tarea-1');
        boton1.setAttribute('id', 'butons-tarea-1');
        var boton2 = crearElementos('button', 'butons-tarea-2');
        boton2.setAttribute('id', 'butons-tarea-2');

        var i = crearElementos('i', 'fas');
        i.classList.add('fa-check-square');
        boton1.appendChild(i);
        boton1.addEventListener('click', tareaCompletada);

        var i2 = crearElementos('i', 'fas');
        i2.classList.add('fa-trash-alt');
        boton2.appendChild(i2);
        boton2.addEventListener('click', tareaEliminada);

        appendizamosHijo(li, div1);
        appendizamosHijo(div1, section);
        appendizamosHijo(section, h3);
        appendizamosHijo(section, p);
        appendizamosHijo(div1, div2);
        appendizamosHijo(div1, div2);
        appendizamosHijo(div2, boton1);
        appendizamosHijo(div2, boton2);

        tareasPendientes.appendChild(li);
        inputNuevaTarea.value = '';
        fecha.value = '';
        hora.value = '';
    };

    // ============funcion para crear elementos y sus clases=============
    var crearElementos = function (etiquetas, clase) {
        var etiquetas = document.createElement(etiquetas);
        etiquetas.classList.add(clase);
        return etiquetas;
    };

    // ============funcion para appendiar==============
    function appendizamosHijo(padre, hijo) {
        padre.appendChild(hijo);
        return padre;
    }

    // ===============funcion para tareas completadas===========
    var tareaCompletada = function () {
        var butonsChild1 = document.getElementById('butons-tarea-1');
        butonsChild1.classList.add('display-none');

        let latarea = this.parentNode.parentNode.parentNode;
        var listaCompletadas = document.getElementById('tareas-completadas');
        listaCompletadas.classList.add('tareas-completadas');
        listaCompletadas.appendChild(latarea);
        var buton2 = document.getElementById('butons-tarea-2');
    };

    // =========funcion para eliminar tareas=====
    var tareaEliminada = function () {
        if (this.parentNode.parentNode.parentNode.parentNode === tareasPendientes) {
            return tareasPendientes.removeChild(this.parentNode.parentNode.parentNode);
        } else if (this.parentNode.parentNode.parentNode.parentNode === tareasCompletadas) {
            return tareasCompletadas.removeChild(this.parentNode.parentNode.parentNode);
        }
    };

    // eventos
    // agregar tarea
    boton.addEventListener('click', agregarTarea);
})();
