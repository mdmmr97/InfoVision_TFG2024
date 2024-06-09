import envirement  from '../appsettings/appsettings.jsx';

const apiURL_comment = envirement.apiURL + 'commments';

const tokenFromLocalStorage = localStorage.getItem('token');
const Authorization_token = tokenFromLocalStorage 
    ? 'Bearer ' + localStorage.getItem('token')
    : null;

export async function getComments() {
    return await fetch(apiURL_comment, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization_token
        }
    }).then(response => {
        console.log('response getComments', response.status);
        return response.json();
    });
}

export async function getCommentId(id) {
    return await fetch(apiURL_comment + `/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization_token
        }
    }).then(response => {
        console.log('response getCommentId', response.status);
        return response.status === 200 
        ? response.json() 
        : null;
    });
}

export async function postComment(comment) {
    return await fetch(apiURL_comment, {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization_token
        },
        
    }).then(response => {
        console.log('response postComment', response.status);
        return response.status;
    });
}

export async function putComment(comment, id) {
    return await fetch(apiURL_comment + `/${id}`, {
        method: 'PUT',
        body: JSON.stringify(comment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Authorization_token
        },
    }).then(response => {
        console.log('response putComment', response.status);
        return response.status;
    });
}
