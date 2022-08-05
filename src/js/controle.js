function lampadaAcesa(){
	document.getElementById("lamp").src = "src/imagens/lampada-acesa.jpg";
}

function lampadaApagada(){
	document.getElementById("lamp").src = "src/imagens/lampada-apagada.jpg";
}

function lampadaPiscando(){
	var intervalo = 0;
	var contador = 0;
	while(contador < 10){
		intervalo += 200;
		setTimeout("document.getElementById('lamp').src='src/imagens/lampada-acesa.jpg';",intervalo);
		intervalo += 200;
		setTimeout("document.getElementById('lamp').src='src/imagens/lampada-apagada.jpg';",intervalo);
		contador++;
	}
}

function lampadaQuebrada(){
    document.getElementById("lamp").src = "src/imagens/lampada-quebrada.jpg";
	
}
