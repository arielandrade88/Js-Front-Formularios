window.onload = function(){
  
    let form = document.querySelector('.form');
    let errors = [];
    form.title.focus();

    form.title.addEventListener('blur',function(e){
        if(form.title.value == ""){
            form.title.classList.add('is-invalid');
        } else {
            form.title.classList.add('is-valid');
            form.title.classList.remove('is-invalid');
        }
    })

    form.rating.addEventListener('blur',function(e){
        if(form.rating.value == ""){
            form.rating.classList.add('is-invalid');           
        } else {
            form.rating.classList.remove('is-invalid');
            form.rating.classList.add('is-valid');
        }
    })

    form.awards.addEventListener('blur',function(e){
        if(form.awards.value == ""){
            form.awards.classList.add('is-invalid');           
        } else {
            form.awards.classList.remove('is-invalid');
            form.awards.classList.add('is-valid');
        }
    })

    form.date.addEventListener('blur',function(e){
        if(form.date.value == ""){
            form.date.classList.add('is-invalid');           
        } else {
            form.date.classList.remove('is-invalid');
            form.date.classList.add('is-valid');
        }
    })

    form.length.addEventListener('blur',function(e){
        if(form.length.value == ""){
            form.length.classList.add('is-invalid');           
        } else {
            form.length.classList.remove('is-invalid');
            form.length.classList.add('is-valid');
        }
    })

    form.genre.addEventListener('blur',function(e){
        if(form.genre.value == ""){
            form.genre.classList.add('is-invalid');           
        } else {
            form.genre.classList.remove('is-invalid');
            form.genre.classList.add('is-valid');
        }
    })


    form.addEventListener('submit', (e) => {
        
        let $title = document.querySelector('#title');
        let $rating = document.querySelector('#rating');
        let $awards = document.querySelector('#awards');
        let $date = document.querySelector('#date');
        let $length = document.querySelector('#length');
        let $genre = document.querySelector('#genre');

        /* TITLE */
        if ($title.value == '') {
            errors.push('El campo titulo no puede estar vacío');
            $title.classList.add('is-invalid');
        } else {
            $title.classList.add('is-valid');
            $title.classList.remove('is-invalid');
        };

        /* RATING */
        if ($rating.value == '') {
            errors.push('El campo calificación no puede estar vacío');
            $rating.classList.add('is-invalid');
        } else if ($rating.value < 0 || $rating.value > 10) {
            errors.push('El campo calificación no puede ser menor a cero ni mayor a 10');
            $rating.classList.add('is-invalid');
        } else {
            $rating.classList.add('is-valid');
            $rating.classList.remove('is-invalid');
        };

        /* AWARDS */
        if($awards.value == '') {
            errors.push('El campo premios no puede estar vacío');
            $awards.classList.add('is-invalid');
     } else if ($awards.value < 0 || $awards.value > 10) {
            errors.push('El campo premios no puede ser menor a cero ni mayor a 10');
            $awards.classList.add('is-invalid');
        } else {
            $awards.classList.add('is-valid');
            $awards.classList.remove('is-invalid');
        };

        /* DATE */
        if ($date.value == "") {
            errors.push('El campo fecha de creación no puede estar vacio');
            $date.classList.add('is-invalid');
        } else {
            $date.classList.add('is-valid');
            $date.classList.remove('is-invalid');
        };

        /* LENGTH */
        if($length.value == '') {
            errors.push('El campo duración no puede estar vacio');
            $length.classList.add('is-invalid');
        } else if ($length.value < 60 || $length.value > 360) {
            errors.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
            $length.classList.add('is-invalid');
        } else {
            $length.classList.add('is-valid');
            $length.classList.remove('is-invalid');
            form.genre_id.focus();
        };


        if ($genre.value == '') {
            errors.push('El campo género no puede estar vacío');
            $genre.classList.add('is-invalid');
        } else {
            $genre.classList.add('is-valid');
            $genre.classList.remove('is-invalid');
        };
        
        

        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
            };
        }else{
            alert('La validación fué exitosa')
            form.submit();
        }

    });


}