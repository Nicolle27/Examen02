
function guardarCambios() {
    const id = document.getElementById('txtId')
    const almacen = document.getElementById('alm')
    const categoria = document.getElementById('cat')
    const producto = document.getElementById('txtProducto')
    const precio = document.getElementById('txtPrecio')
    const cantidad = document.getElementById('txtCantidad')


function editarDatos(almacen, categoria, producto, precio, cantidad) {

    const datosEditados = {
        id: Number(id.value),
        almacen: almacen.value,
        categoria: categoria,
        producto: producto.value,
        precio: precio.value
        cantidad: cantidad.value
    }

function agregarDatos(almacen, categoria, producto, precio, cantidad) {

    const nuevoDatos = {
     
        almacen: almacen.value,
        categoria: categoria.value,
        producto: producto.value,
        precio: precio.value
        cantidad: cantidad.value
    }

function empezarAEditar(idDatos) {

    const id = document.getElementById('txtId')
    const nombre = document.getElementById('txtNombre')
    const radioFeminino = document.getElementById('radioFemenino')
    const radioMasculino = document.getElementById('radioMasculino')
    const ciclo = document.getElementById('ciclo')
    const escuela = document.getElementById('escuela')

    const estudianteEncontrado = estudiantes.find((estudiante) => estudiante.id === idEstudiante)

    id.value = estudianteEncontrado.id
    nombre.value = estudianteEncontrado.nombre
    if (estudianteEncontrado.sexo === 'Femenino') {
        radioFeminino.checked = true
    } else {
        radioMasculino.checked = true
    }
    ciclo.value = estudianteEncontrado.ciclo
    escuela.value = estudianteEncontrado.escuela

}

function eliminarEstudiante(idPost) {

    estudiantes = estudiantes.filter((post) => post.id !== idPost)

    listarEstudiantes()

}

function listarEstudiantes() {

    const tabla = document.getElementById('tblPost')
    const cuerpoTabla = document.getElementById('bodyPost')

    cuerpoTabla.innerHTML = ''

    estudiantes.map(

        (estudiante, index) => {

            const fila = document.createElement('tr')

            const colItem = document.createElement('td')
            const colNombre = document.createElement('td')
            const colSexo = document.createElement('td')
            const colCiclo = document.createElement('td')
            const colEscuela = document.createElement('td')
            const colAccion = document.createElement('td')

            colItem.innerText = index + 1
            colNombre.innerHTML = estudiante.nombre
            colSexo.innerHTML = estudiante.sexo
            colCiclo.innerHTML = estudiante.ciclo
            colEscuela.innerHTML = estudiante.escuela

            const btnEditar = document.createElement('button')
            const btnEliminar = document.createElement('button')

            const iconoEditar = document.createElement('span')
            const iconoEliminar = document.createElement('span')



            iconoEditar.setAttribute('class', 'iconify')
            iconoEditar.setAttribute('data-icon', 'ci:edit')

            iconoEliminar.setAttribute('class', 'iconify')
            iconoEliminar.setAttribute('data-icon', 'ant-design:delete-filled')


            btnEditar.setAttribute('class', 'btnEditar')
            btnEditar.appendChild(iconoEditar)
            btnEliminar.appendChild(iconoEliminar)

            btnEditar.setAttribute('onclick', `empezarAEditar(${estudiante.id})`)

            btnEliminar.setAttribute('class', 'btn btn-danger')
            btnEliminar.setAttribute('onclick', `eliminarEstudiante(${estudiante.id})`)

            colAccion.appendChild(btnEditar)
            colAccion.appendChild(btnEliminar)

            fila.appendChild(colItem)
            fila.appendChild(colNombre)
            fila.appendChild(colSexo)
            fila.appendChild(colCiclo)
            fila.appendChild(colEscuela)
            fila.appendChild(colAccion)

            cuerpoTabla.appendChild(fila)

        }
    )

    tabla.appendChild(cuerpoTabla)

}