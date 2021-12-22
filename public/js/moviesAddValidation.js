window.addEventListener("load", () => {

    let title = document.querySelector(".titleName");
    let rating = document.querySelector(".rating");
    let awards = document.querySelector(".awards");
    let release = document.querySelector(".release");
    let duration = document.querySelector('.length');
    let form = document.querySelector('form');
    let menor10 = /^([0-9]|[1-9]|10)$/;

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        console.log("enviado")

        switch ( true) {
            
            case title.value === "":
                title.classList.add("is-invalid");
                 e.preventDefault()
            case rating.value === "":
                 rating.classList.add("is-invalid");
                 e.preventDefault()
            case awards.value === "":
                 awards.classList.add("is-invalid");
                 e.preventDefault()
            case release.value === "":
                 release.classList.add("is-invalid");
                 e.preventDefault()
            case duration.value === "":
                 duration.classList.add("is-invalid");
                 e.preventDefault()
                 break;

                 default:
                     alert("Guardado correctamente")
                     form.submit()
                     break;
        }
      
    })

    title.addEventListener("blur", () => {
        switch (true) {
            case title.value === "":
            document.querySelector(".smallTitle").innerHTML = "Este campo es obligatorio"
            document.querySelector(".smallTitle").style.marginBotton = "5px"
            document.querySelector(".smallTitle").style.color = "red"
            title.classList.add("is-invalid");

            break;
            
            default:
                document.querySelector(".smallTitle").innerHTML = null
                title.classList.remove("is-invalid");
                title.classList.add("is-valid");

                break;
                
            }
     })
     rating.addEventListener("blur", () => {
        switch (true) {
            case rating.value === "":
            document.querySelector(".smallRating").innerHTML = "Este campo es obligatorio"
            document.querySelector(".smallRating").style.marginBotton = "5px"
            document.querySelector(".smallRating").style.color = "red"
            rating.classList.add("is-invalid");

                 break;         

            case !menor10.test(rating.value):
            document.querySelector(".smallRating").innerHTML = "Debe ser un numero entre 0 y 10"
            document.querySelector(".smallRating").style.marginBotton = "5px"
            document.querySelector(".smallRating").style.color = "red"
            rating.classList.add("is-invalid");

                break;
               default:
                   document.querySelector(".smallRating").innerHTML = null
                   rating.classList.remove("is-invalid");
                rating.classList.add("is-valid");
                break;
        } 
                
   })
   awards.addEventListener("blur",() =>{
        
        switch (true){          
        case title.value === "":
        document.querySelector(".smallAwards").innerHTML = "Debe completar este campo"
        document.querySelector(".smallAwards").style.marginBotton = "5px"
        document.querySelector(".smallAwards").style.color = "red"
        awards.classList.add("is-invalid");

        break;
        
        default:
            document.querySelector(".smallAwards").innerHTML = null
            awards.classList.remove("is-invalid");
                awards.classList.add("is-valid");
            break;
            
        }
    })

    release.addEventListener("blur", () => {
        switch (true) {
            case title.value === "" :
            document.querySelector(".smallRelease").innerHTML = "Este campo es obligatorio"
            document.querySelector(".smallRelease").style.marginBotton = "5px"
            document.querySelector(".smallRelease").style.color = "red"
            release.classList.add("is-invalid");

            break;
            
            default:
                document.querySelector(".smallTitle").innerHTML = null
                release.classList.remove("is-invalid");
                release.classList.add("is-valid");
                break;
                
            }
    })
    duration.addEventListener("blur", () => {
        switch (true) {
            case duration.value === "" :
            document.querySelector(".smallDuracion").innerHTML = "Este campo es obligatorio"
            document.querySelector(".smallDuracion").style.marginBotton = "5px"
            document.querySelector(".smallDuracion").style.color = "red"
            duration.classList.add("is-invalid");

            break;
            case duration.value.trim() < 60 || duration.value.trim()>360:
            document.querySelector(".smallDuracion").innerHTML = "Debe tener entre 60 y 360 minutos"
            document.querySelector(".smallDuracion").style.marginBotton = "5px"
            document.querySelector(".smallDuracion").style.color = "red"
            duration.classList.add("is-invalid");

            break;

            
            default:
                document.querySelector(".smallDuracion").innerHTML = null
                duration.classList.remove("is-invalid");
                duration.classList.add("is-valid");
                break;
                
            }
    })

    title.focus();

   })