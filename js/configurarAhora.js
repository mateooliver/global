
    // paso 3 - cargar cajas 
   
    $('#cargarCaja').keypress((e)=>{
       
        if(e.which==13){
        if($("#input").val()!=""){
            $('#cajas').append(()=>{
               return `<div class="d-flex  align-items-center " style=" margin-left:8%;" > <img class="mx-1"  style="height:10%; width:10%;" src="../img/tilde.png"/> <div class=" my-2" style="   width:70%; background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px;">${$("#input").val()}</div></div>`;
      })
      $("#input").val("")
    }else{
        $('#cargarCaja').prepend(()=>{
            $("#input").attr("placeholder", "")
            return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
        })
        $("#error").delay(500).fadeOut(1000);
      }
      }})
    ;


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
// paso 1 quitae el modal


// paso 4
$('#cargarEgresos').keypress((e)=>{
       
    if(e.which==13){
    if($("#inputEgresos").val()!=""){
        $('#egresos').append(()=>{
           return `<div class="d-flex  align-items-center " style=" margin-left:12%;" > <img class="mx-1"  style="height:20px; width:20px" src="../img/tilde.png"/> <div class=" my-2" style="   width:70%; background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px;">${$("#inputEgresos").val()}</div></div>`;
  })
  $("#inputEgresos").val("")
}else{
    $('#cargarEgresos').prepend(()=>{
        $("#inputEgresos").attr("placeholder", "")
        return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
    })
    $("#error").delay(500).fadeOut(1000);
  }
  }})
;

// paso 5
$('#cargarIngresos').keypress((e)=>{
       
    if(e.which==13){
    if($("#inputIngresos").val()!=""){
        $('#Ingresos').append(()=>{
           return `<div class="d-flex  align-items-center " style=" margin-left:12%;" > <img class="mx-1"  style="height:20px; width:20px" src="../img/tilde.png"/> <div class=" my-2" style="   width:70%; background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px;">${$("#inputIngresos").val()}</div></div>`;
  })
  $("#inputIngresos").val("")
}else{
    $('#cargarIngresos').prepend(()=>{
        $("#inputIngresos").attr("placeholder", "")
        return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
    })
    $("#error").delay(500).fadeOut(1000);
  }
  }})
;
// paso 6
$('#otrasOpciones').click(()=>{
        $('#Opciones').prepend(()=>{
           return `<input id="inputIngresos" class="my-1" style="width: 70%; background: #F5F5F5;border: 3px solid #836ED8;box-sizing: border-box;box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);border-radius: 45px; " type="text" placeholder=" Otra Opcion"/>`;})
});

