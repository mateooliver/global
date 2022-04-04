
    // paso 3 - cargar cajas 
    $("#cargarCaja").click(()=>{
        $("#input").hide()
        $("#guardarCaja").hide()
        $("#rootPaso3").hide();
    $('#cajas').prepend(()=>{
        return `<div class="d-flex"><input id="input" type="text"> <button class='btn backgroundBtn' id="guardarCaja"> aceptar</button></div>`
    })
    $('#guardarCaja').click(()=>{
        if($("#input").val()!=""){
            $("#input").hide()
            $("#guardarCaja").hide()
            $('#cajas').prepend(()=>{
               return `<div class="d-flex justify-content-start align-items-center " style="margin:0 0 0 20%;"> <img class="mx-1"  style="height:9%; width:9%;" src="../img/user.png"/> <div class=" my-2 rounded-2" style=" padding:0 5% 0 2%; width: fit-content; background: #FBADB1; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:left;  color: #446BD0;">${$("#input").val()}</div></div>`;
      })}else{
        $('#cajas').prepend(()=>{
            return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
        })
        $("#error").delay(500).fadeOut(1000);
      }
      })
    });


    //   paso 1 condicion ante la afip
    $("#noEstoyInscripto").on('change', function(ev){
            ev.preventDefault();
            $("#noEstoyInscripto").prop('checked', true);
            $("#responsableInscripto").prop("checked", false);
            $("#monotributista").prop("checked", false);
            $("#siguientePaso1").attr("data-bs-target", "#paso1-1");
        });
        $("#responsableInscripto").on('change', function(ev){
            ev.preventDefault();
            $("#responsableInscripto").prop("checked", true);
            $("#noEstoyInscripto").prop('checked', false);
            $("#monotributista").prop("checked", false);
            $("#siguientePaso1").attr("data-bs-target", "#paso2");
        });
        $("#monotributista").on('change', function(ev){
            ev.preventDefault();
            $("#monotributista").prop("checked", true);
            $("#responsableInscripto").prop("checked", false);
            $("#noEstoyInscripto").prop('checked', false);
            $("#siguientePaso1").attr("data-bs-target", "#paso2");
        });
        
