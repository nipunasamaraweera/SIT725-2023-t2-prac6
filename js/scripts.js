const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val(); 
    formData.image = $('#image_link').val(); 
    formData.description = $('#description').val(); 
    formData.link = $('#link').val();
    console.log("Form Data Submitted: ", formData);
    postDog(formData)
}

function posttAnime(anime){
    $.ajax({
        url:'/api/anime',
        type:'POST',
        data:dog,
        success: (result)=>{
            if(result.statusCode === 201){
                alert('Anime created')
            }
        }
    })
}

function getAllAnime(){
    $.get('/api/anime',(result)=>{
        if(result.statusCode === 200){
            //Idk
        }
    })
}

$(document).ready(function () {
    $('.materialboxed').materialbox(); 
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
    getAllAnime();
});

