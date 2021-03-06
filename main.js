// Login
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

$('#login').click(function() {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            console.log(result.user);
            guardaDatos(result.user)
            $('#login').hide();
            $('#root').append("<img src='" + result.user.photoURL + "'/>")
        });
});

//Guardar datos automaticamente
function guardaDatos(user) {
    //var database = firebase.database();
    var usuario = {
        uid: user.uid,
        nombre: user.displayName,
        email: user.email,
        telefono: user.phoneNumber,
        // mensaje: user.message,
        foto: user.photoURL
    }
    firebase.database().ref("formulario/" + user.uid)
        .set(usuario)

}
//Leer la base de datos
firebase.database().ref("formulario")
    .on("child_added", function(s) {
        var user = s.val();
        $('#root').append("<img src='" + user.foto + "'/>")
    })


});*/
