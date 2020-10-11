function mostrar(){

    if (document.getElementById('submenu').style.display == 'none'){
        document.getElementById('submenu').style.display = "block";
        if (document.getElementById('login').style.display == 'block'){
            document.getElementById('login').style.display = "none";
            
        }
        if (document.getElementById('cadastro').style.display == 'block'){ 
            document.getElementById('cadastro').style.display = 'none'
        }
        if(document.getElementById('recovery').style.display == "block"){ 
            document.getElementById('recovery').style.display = "none";
        }
    }
    else{
        document.getElementById('submenu').style.display = "none";
    }
    
}
function login(){

    if (document.getElementById('login').style.display == 'none'){
        document.getElementById('login').style.display = "block";
        document.getElementById('submenu').style.display = "none";
        
    }
    else{
        document.getElementById('login').style.display = "none";
        
    }
}
function login1(){
    if( document.getElementById('login').style.display == "Block") {
        document.getElementById('cadastro').style.display = "none";
    }else{
        document.getElementById('login').style.display = "block";
        document.getElementById('cadastro').style.display = "none";
    }

}

function cadastro(){
    if (document.getElementById('cadastro').style.display == "Block"){
        document.getElementById('login').style.display = "none";
    }
    else{
        document.getElementById('cadastro').style.display = "block";
        document.getElementById('login').style.display = "none";
        
    }

}  

function eye(){
    if(document.getElementById('eye').input.type == 'password'){
        document.getElementById('eye').input.type = 'text';

    } else {
        document.getElementById('eye').input.type = 'text';

    }
}

function recovery(){
    if (document.getElementById('recovery').style.display == 'none'){
        document.getElementById('recovery').style.display = "block";
        if (document.getElementById('login').style.display == 'block'){
            document.getElementById('login').style.display = "none";
            
        }
    }
    else{ 
    document.getElementById('recovery').style.display = "none";
}
}
function fecharRecovery(){
    document.getElementById('recovery').style.display = "none";
    document.getElementById('login').style.display = "block";
}
