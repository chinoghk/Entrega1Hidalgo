/* [x] variables, [x] condicionales, [x] bucles, [x] funciones, [x] arrays*/

const Personajes = []

const crearPersonaje = (nombre, id) => {
    if(Personajes.length < 1){
        Personajes.push({
            nombre,
            id
        })
    }else{
        let indexPersonaje = buscarPersonaje(id)

        while(indexPersonaje !== -1){
            alert("Ese personaje ya ha sido creado")
            id = Number(prompt("Ingresar ID correcto del personaje"))
            indexPersonaje = buscarPersonaje(id)
        }

        Personajes.push({
            nombre,
            id
        })
    }
}

const buscarPersonaje = (id) => {
    if(Personajes.length < 1){
        alert("No hay personajes creados")
    }else{
        let PersonajeID = arrayPersonaje("id")

        let indexPersonaje = PersonajeID.indexOf(id)

        if(indexPersonaje === -1){
            return -1
        }else{
            return indexPersonaje
        }
    }
}

const arrayPersonaje = (opcion) => {
    const AuxPersonaje = []

    if(opcion === "id"){
        for(let i = 0; i < Personajes.length; i++){
            const pj = Personajes[i]
            AuxPersonaje.push(pj.id)
        }

        return AuxPersonaje

    }else if(opcion === "nombre"){
        for(let i = 0; i < Personajes.length; i++){
            const pj = Personajes[i]
            AuxPersonaje.push(pj.nombre)
        }

        return AuxPersonaje
    }else{
        alert("No es posible crear personaje")
    }
}

const mostrarPersonaje = () => {
    if(Personajes.length < 1){
        alert("No hay personajes creados")
    }else{
        let arrayNombre = arrayPersonaje("nombre")
        let stringnombre = arrayNombre.join("\n")

        alert("Personajes creados:\n" + stringnombre)
    }
}

const ppal = () => {
    let crear = Number(prompt("¡Bienvenido/a a la creación de tu personaje!\n ¿Qué querés hacer?\n 1- Crear personaje\n 2- Mostrar personaje"))

    let bandera = true

    while(bandera){
        switch(crear){
            case 1:
                let nombrePersonajeNuevo = prompt("¿Nombre del personaje?")
                let idPersonaje = Number(prompt("Agregar ID del personaje (numerico)"))
                crearPersonaje(nombrePersonajeNuevo,idPersonaje)
                bandera = confirm("¿Volver a menu principal?")
            break
            case 2:
                mostrarPersonaje()
                bandera = confirm("¿Volver a menu principal?")
            break
            default:
                alert("Esa opcion no es correcta")
                bandera = confirm("¿Volver a menu principal?")
            break
        }

        if(bandera){
            crear = Number(prompt("¡Bienvenido/a a la creación de tu personaje!\n ¿Qué querés hacer?\n 1- Crear personaje\n 2- Mostrar personaje"))
        }
    }
}

ppal()