var url = 'http://localhost:5000/amigos';

$('#boton').click(function(){
    $('#lista').empty();                //para que no se vuelva a cargar la lista
    $.get(`${url}`, function(amigos){
        amigos.forEach(element => {
            $('#lista').append(`<li id=${element.id} > ${element.name} <button>X</button> </li>`)
        });
    })
});

$('#search').click(function(){
    let id = $('input').val();      //fn de jquery que nos da el valor del input
    if(id){
    $.get(`${url}/${id}`, function(amigos){
        $('#amigo').text(`El nombre de tu amigo es: ${amigos.name}`)
    })

    }
    $('input').val('');             //para que se borre el input
})


$("#delete").click(function(){
    //guardo en una variable el valor del input de borrar
    let id = $('#inputDelete').val();
    let amigos;
    if(id){
        $.get(`${url}/${id}`, function(amigo){
            amigos=amigo;
        })
    }
     
    $.ajax({
        url: `${url}/${id}`,
        type: "DELETE",
        success: ()=>{
            $('#sucess').text(`Tu amigo ${amigos.name} fue eliminado correctamente`)
            $('#inputDelete').val("");
        }
    })
})