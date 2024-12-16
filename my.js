function f1(){

    document.getElementById("info-card").style.display="none";



    var inputvalue = document.getElementById("input").value;
   
   var API = `https://v1.nocodeapi.com/ketanjain/spotify/KJnnNipFFbdvWRno/search?q=${inputvalue}%3Cq%3E&type=track`

   console.log(API)

   fetch(API).then((res)=>res.json()).then((result)=>{console.log(result)


   for (var i=0; i<result.tracks.items.length; i++){
    var div = document.createElement("div");
    div.classList.add("card");

    var img = document.createElement("img");
    img.id = "image";
    img.src = result.tracks.items[i].album.images[0].url ;

    var div2 = document.createElement("div");
    div2.classList.add("card-content");

    var h3 = document.createElement("h3");
    h3.innerHTML = result.tracks.items[i].name;

    var div3 = document.createElement("div");
    div3.classList.add("play-btn");

    var audio = document.createElement("audio");
    audio.id = "play";
    audio.src = result.tracks.items[i].preview_url ;

    var icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-play");

      
    div.appendChild(img);
    div.appendChild(div2);
    div2.appendChild(h3);
    div2.appendChild(div3);
    div3.appendChild(audio);
    div3.appendChild(icon);


    var container = document.getElementById("container");

    container.appendChild(div);


    div.addEventListener("click",(event)=>{
        document.getElementById("player").style.display = "block";
        document.getElementById("container").style.filter = "blur(5px)";

        var currentimg = event.currentTarget.getElementsByTagName("img")[0];
        var playerimg = document.getElementById("player-img");

        playerimg.src = currentimg.src ;



        var currenttitle = event.currentTarget.getElementsByTagName("h3")[0];
        var playertitile = document.getElementById("title");

        playertitile.innerHTML = currenttitle.innerHTML ;



        var currentaudio = event.currentTarget.getElementsByTagName("audio")[0];
        var playeraudio = document.getElementById("playeraudio");

        playeraudio.src = currentaudio.src ;

        playeraudio.play();



       
    })

   }
})  


        
          document.getElementById("playbtn").addEventListener("click",()=>{
            var playeraudio = document.getElementById("playeraudio");
            playeraudio.play();
          })



          document.getElementById("pausebtn").addEventListener("click",()=>{
            var playeraudio = document.getElementById("playeraudio");
            playeraudio.pause();
          })


          document.getElementById("closecardbtn").addEventListener("click", ()=>{
            document.getElementById("player").style.display = "none"
            var playeraudio = document.getElementById("playeraudio");
            playeraudio.pause();
            document.getElementById("container").style.filter = "blur(0px)";

          })
}