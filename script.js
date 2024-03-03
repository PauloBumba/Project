function menu(){
    var s=document.getElementById("itens")
    if(s.style.display=="block"){
        s.style.display="none"
    }
    else{
    s.style.display="block"}
    
} 
function Mudar(){
    if(window.innerWidth>=768){
        itens.style.display="block"
    }
    else{ itens.style.display="none"}
}
