function getAdmins(map){ //a função recebe um map
    let admins =[] // variável array chamada admins
    for([key, value] of map){ //"para chave e valor do map"
        if(value === 'Admin') { //se o valor for admin
            admins.push(key);//"puxar" a chave
        }
    }
    return admins;// e retornar a chave da variável array admins
}

const usuarios = new Map(); //map criado como constante

usuarios.set('Luiz', 'Admin'); //add o nome(chave) ao valor Admin
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log (getAdmins(usuarios)); //mostrar a função e o map 