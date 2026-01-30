console.log("Hello world");

function submit(){
    document.querySelectorAll(".box").forEach(value => {
        value.style.display = "none";
    });

}

document.getElementById("Name").addEventListener("input", event => {

    document.querySelectorAll("#container [class]").forEach(ele => {
        if(document.getElementById("Name").value){

            let className = ele.className.slice(0, document.getElementById("Name").value.length)
            let inputName = document.getElementById("Name").value.slice(0, document.getElementById("Name").value.length);

            if(className == inputName){
                ele.style.display = "block";
            }else{
                ele.style.display = "none";
            }
        }
        
    });
});


document.querySelectorAll("#container [class]").forEach(ele => {
    for(let letter = 0; letter < ele.className.length; letter++){
        console.log(ele.className[letter]);
    }
});



