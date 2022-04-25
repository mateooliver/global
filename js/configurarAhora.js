
    // paso 3 - cargar cajas 
   
    $('#cargarCaja').keypress((e)=>{
       
        if(e.which==13){
        if($("#input").val()!=""){
            $('#cajas').append(()=>{
               return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 400; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#input").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
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
// cargar cajas con un click en el signo mas
    $('#masCajas').click(()=>{
        if($("#input").val()!=""){
            $('#cajas').append(()=>{
                return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 400; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#input").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
            })
      $("#input").val("")
    }else{
        $('#cargarCaja').prepend(()=>{
            $("#input").attr("placeholder", "")
            return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
        })
        $("#error").delay(500).fadeOut(1000);
      }
      })
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

// paso 2 iva incuiido o no, cambio de imagen
$("#siIva").on('change', function(ev){
    ev.preventDefault();
    $("#siIva").prop('checked', true);
    $("#noIva").prop("checked", false);
});
$("#noIva").on('change', function(ev){
    ev.preventDefault();
    $("#siIva").prop('checked', false);
    $("#noIva").prop("checked", true);
    $("#conIva").attr("src", "../img/Noiva.png");
});


// paso 4
$('#cargarEgresos').keypress((e)=>{
       
    if(e.which==13){
    if($("#inputEgresos").val()!=""){
        $('#egresos').append(()=>{
            return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 400; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#inputEgresos").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
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
$('#masEgresos').click(()=>{

    if($("#inputEgresos").val()!=""){
        $('#egresos').append(()=>{
            return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 400; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#inputEgresos").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
        })
  $("#inputEgresos").val("")
}else{
    $('#cargarEgresos').prepend(()=>{
        $("#inputEgresos").attr("placeholder", "")
        return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
    })
    $("#error").delay(500).fadeOut(1000);
  }
  })
;

// paso 5
$('#cargarIngresos').keypress((e)=>{
       
    if(e.which==13){
    if($("#inputIngresos").val()!=""){
        $('#Ingresos').append(()=>{
               return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#inputIngresos").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
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
$('#masIngresos').click((e)=>{
    
    if($("#inputIngresos").val()!=""){
        $('#Ingresos').append(()=>{
               return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#inputIngresos").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
  })
  $("#inputIngresos").val("")
}else{
    $('#cargarIngresos').prepend(()=>{
        $("#inputIngresos").attr("placeholder", "")
        return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
    })
    $("#error").delay(500).fadeOut(1000);
  }
  })
;
// paso 6 
$('#cargarProducto').keypress((e)=>{
       
    if(e.which==13){
    if($("#inputProducto").val()!=""){
        $('#Producto').append(()=>{
               return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#inputProducto").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
  })
  $("#inputProducto").val("")
}else{
    $('#cargarProducto').prepend(()=>{
        $("#inputProducto").attr("placeholder", "")
        return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
    })
    $("#error").delay(500).fadeOut(1000);
  }
  }})
;
$('#masProducto').click((e)=>{
    
    if($("#inputProducto").val()!=""){
        $('#Producto').append(()=>{
               return `<div class="d-flex  align-items-center " > <img class="posicion_signo_mas" src="../img/tilde.png"/><div style="background: #836ED8; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); font-family: 'Nunito';font-style: normal;font-weight: 600; font-size:120%; text-align:center;  color: white; border-radius:20px; padding:0 3% 0 3%;" class="align-items-center my-1"> <div class=" d-flex align-items-center"><div class="text-nowrap">${$("#inputProducto").val()}</div> <img style=" height:13px; width:auto; padding:0 3% 0 25px;" src="../img/puntospaso3.png"></div> </div></div>`;
  })
  $("#inputProducto").val("")
}else{
    $('#cargarProducto').prepend(()=>{
        $("#inputProducto").attr("placeholder", "")
        return`  <div id="error" class="mx-auto text-danger position-absolute">Debes completar esta caja</div> `
    })
    $("#error").delay(500).fadeOut(1000);
  }
  })
;
// paso 7

$('#otrasOpciones').click(()=>{
    $('#otrasOpciones').removeClass("d-flex")
    $('#otrasOpciones').hide()
    $("#paso7Texto").hide()
    $(".none").hide()
    $("#masOpciones").show()
    $("#masOpciones").addClass("d-flex")
        $('#Opciones').prepend(()=>{
           return `<input id="inputIngresos" class="inputPaso4 my-1" style=" margin-top:50px; padding-left: 2%; background: #F5F5F5;border: 2px solid #836ED8;box-sizing: border-box;box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);border-radius: 45px; " type="text" placeholder=" Categoría de producto"/>
           <input id="inputIngresos" class="inputPaso4 my-1" style=" padding-left: 2%; background: #F5F5F5;border: 2px solid #836ED8;box-sizing: border-box;box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);border-radius: 45px; " type="text" placeholder=" Cantidad de Stock"/>
           <input id="inputIngresos" class="inputPaso4 my-1" style=" padding-left: 2%; background: #F5F5F5;border: 2px solid #836ED8;box-sizing: border-box;box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);border-radius: 45px; " type="text" placeholder=" Precio de compra"/>
           <input id="inputIngresos" class="inputPaso4 my-1" style=" padding-left: 2%; background: #F5F5F5;border: 2px solid #836ED8;box-sizing: border-box;box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);border-radius: 45px; " type="text" placeholder=" Precio de venta"/>
           `;})
});
$("#masOpciones").click(()=>{
  
    $('#Opciones').append(()=>{
        return `<input id="inputIngresos" class="inputPaso4 my-1" style=" padding-left: 2%; background: #F5F5F5;border: 2px solid #836ED8;box-sizing: border-box;box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);border-radius: 45px; " type="text" placeholder=" Categoría de producto"/> `;})
})

