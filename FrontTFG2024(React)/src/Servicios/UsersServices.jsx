import envirement  from '../appsettings/appsettings.jsx';

const apiURL = envirement.apiURL + 'users/';

export async function register(usuario) {
    const apiURL_register = apiURL + 'register';

    const response = await fetch(apiURL_register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });

    await GuardarDatos(response);
}

export async function login(usuario) {
    const apiURL_login = apiURL + 'login';

    const response = await fetch(apiURL_login, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });

    await GuardarDatos(response);

}

async function GuardarDatos(response) {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        const data = await response.json();

        const token = data.token;
        localStorage.setItem('token', token);

        console.log('datos guardados con exito');
        return response.ok;
    }
}

export async function logout() {
    localStorage.removeItem('token');
}