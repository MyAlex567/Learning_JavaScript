function GOfetch(){
    const image = document.getElementById("Character");
    const CharacterName = document.getElementById("CharacterName").value.toLowerCase();
    console.log(CharacterName);

    image.src = "https://i.gifer.com/ZZ5H.gif";

    fetch(`https://api.jikan.moe/v4/characters?q=${CharacterName}`)
    .then(response => response.json())
    .then(Data => {
        const CharacterImg = Data.data[0].images.jpg.image_url;
        console.log(Data);
        image.src = CharacterImg;
    });

};

document.addEventListener("keydown", event => {
    const image = document.getElementById("Character");
    if(event.key == "Enter"){
        image.src = "https://i.gifer.com/ZZ5H.gif";
        GOfetch();
    }
});

const json = `{
    "UserName": "ALEX",
    "AGE": "19"
}`;

const newJson = JSON.parse(json);

console.log(newJson);

