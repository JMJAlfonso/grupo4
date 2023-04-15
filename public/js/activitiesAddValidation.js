const form = document.querySelector('form.create-form');

form.addEventListener('submit',(e)=>{
e.preventDefault();
const errors = [];
if(!form.name.value){
    errors.push({name:'name',message:'El campo nombre no puede estar vacio'});
    
}
if(form.name.value.length <5 ){
    errors.push({name:'name',message:'El campo nombre debe tener al menos 5 caracteres'});
}
if(form.description.value.length <20 ){
    errors.push({name:'description',message:'El campo descripcion debe tener al menos 20 caracteres'});
}

    const path = form.image.value;
    
    const allowedExtensions = ['jpg', 'png', 'gif', 'jpeg'];
    
    const splitName = path.split('.');
    const extenstion = splitName[splitName.length-1];
              
    if (!allowedExtensions.include(extenstion)) {
        errors.push({name:'image',message:'El formato de imagen debe ser .jpg , .jpeg, .png , .gif '});
    }
errors.forEach(error => {
    const errorLabel = document.getElementById(`error-${error.name}`)
    errorLabel.innerText = error.message;
})
if (errors.length ===0){
    form.submit();
}
});

