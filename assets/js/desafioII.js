(async function() {
    try {
        const url ='https://randomuser.me/api/?results=10';
        const response = await fetch(url);
        const data = await response.json();
        
        const persona = data.results;
        const mostrarPersona = document.getElementById('user-data');
        
        persona.forEach(user => {
            const imagen = document.createElement('img')
            imagen.src = user.picture.large;
            const nombreApellido = document.createElement('h3')
            nombreApellido.textContent = `${user.name.first} ${user.name.last}`;
            const email = document.createElement('p')
            email.textContent = `${user.email}`
            const telefono = document.createElement('p')      
            telefono.textContent = `${user.phone}`
            mostrarPersona.appendChild(imagen);
            mostrarPersona.appendChild(nombreApellido);
            mostrarPersona.appendChild(email);
            mostrarPersona.appendChild(telefono);
        });
    } catch (error) {
        console.error('No se encuentra el usuarios:', error);
    }
})();
