document.getElementById('calcular').addEventListener('click', function(){
    const valor = document.getElementById('valor').value;
    const taxa = (document.getElementById('taxa').value) / 100;
    const tempo = document.getElementById('tempo').value;

    const total = valor * (1 + taxa)**tempo;

    if(valor == ''){
        alert("Valor inicial não informado")
      
    }else if(taxa == ''){
        alert("Taxa de juros não informada")

    } else if(tempo == ''){
        alert("Tempo de rendimento não informado")
    } else{
        document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));

    }

    
})




    

    