const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr_code img"),
generateBTn = wrapper.querySelector(".form button");

generateBTn.addEventListener('click',()=>{
    let qrValue = qrInput.value;
    if(!qrValue) return ;
    generateBTn.innerHTML='Generating QR Code...' ; 
    qrImg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}';
    //alert(qrValue);
    qrImg.addEventListener('load',()=>{    
        wrapper.classList.add('active') ;    
        generateBTn.innerHTML='Generate QR Code' ;
        
    });
    
});

qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active") ;
    }
}) ;

