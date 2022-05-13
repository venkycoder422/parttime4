var posters=[
    {
        name:"KGF-2",
        img_url:"https://assetscdn1.paytm.com/images/cinema/KGF-1035x420-61d0f220-b6fc-11ec-8665-6d654dc679e6.jpg",
    },

    {
        name:"RRR",
        img_url:"https://static.toiimg.com/photo/msid-63435227/63435227.jpg?13054",
    },

    {
        name:"Jalsa",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLyGlGbtFpfZ5F3D21Qkq2_BY4jUu0M3STVQ&usqp=CAU",
    },

    {
        name:"Lovestory",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbYkABZ8rZHlUtHhx2y9xleUlBibH1rWjSw&usqp=CAU",
    },

    {
        name:"Mosagallu",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUx_8R7YPnj3U_9hV2ifqmcMZRIBI0dlCDg&usqp=CAU",
    },

    {
        name:"Jai Bheem",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UzoW9M0OIR8WM8ql8rWjagSIV_KPbU5iSQ&usqp=CAU",
    },

    {
        name:"Harry potter",
        img_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtY88bIxKzkDNwxsLXceotRv6D5MyiqUfeA&usqp=CAU",
    },

    {
        name:"poster",
        img_url:"https://www.filmibeat.com/img/popcorn/movie_posters/poster-20200922104705-19544.jpg",
    },

    {
        name:"Lovers",
        img_url:"https://i.ytimg.com/vi/k39zX8P-E1w/maxresdefault.jpg",
    },
];



var start=1;
var n=posters.length;
function timer(){
setInterval(function(){
    if(start==n){
        start=1;
    }else{
        var image_data;
        image_data=posters[start].img_url;
        start++;
        document.getElementById("data").src=""+image_data;
    }

},1000);
}


// movies Data ;

var moviesData=[
    {
        name:"The Shawshank Redemption",
        realeaseDate:"1994",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpr2KpBDmOaA_Sp4qW9U3YMaQaBZbDhf9aAvEUPJk9hTrAE8aX0h85XMIwYwuvWt7pSTk&usqp=CAU",
        IMDB:10,
    },
    {
        name:" The Godfather",
        realeaseDate:"1972",
        poster_url:"https://wallpaperaccess.com/full/1107711.jpg",
        IMDB:9,
    },
    {
        name:"The Dark Knight",
        realeaseDate:"2008",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zg5dA5cJX5SHVelSlPdbDRJ7WmorlBmpxVtQ44keRiN0u32tfKVp4QcdZByD2Q6nC78&usqp=CAU",
        IMDB:7,
    },
    {
        name:" The Good, the Bad and the Ugly",
        realeaseDate:"1996",
        poster_url:"https://ih1.redbubble.net/image.1084494606.3667/fposter,small,wall_texture,product,750x1000.jpg",
        IMDB:8,
    },
    {
        name:" Forrest Gump ",
        realeaseDate:"1994",
        poster_url:"https://i.ytimg.com/an/Mj9IA9tTfio/7642531020657881441_mq.jpg?v=5f5bf0ff",
        IMDB:7,
    },
    {
        name:"Fight Club",
        realeaseDate:"1999",
        poster_url:"https://m.media-amazon.com/images/I/71QPnEkXygS._SY679_.jpg",
        IMDB:9,
    },
    {
        name:"Parasite",
        realeaseDate:"2019",
        poster_url:"https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg",
        IMDB:6,
    },

    {
        name:"American Beauty",
        realeaseDate:"1999",
        poster_url:"https://m.media-amazon.com/images/I/41VpuHa6zIL._SY445_.jpg",
        IMDB:5,
    },
    {
        name:" The Dark Knight Rises",
        realeaseDate:"2012",
        poster_url:"https://m.media-amazon.com/images/I/81eN6gOwodL._AC_SY879_.jpg",
        IMDB:3,
    },
    {
        name:"Joker ",
        realeaseDate:"2019",
        poster_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNjoXCHteGSTvNpTo7WdvAkgfFWSi-KcZgOjrnf513jK2zXS-vmI-7bAICQSuRbeBY9E&usqp=CAU",
        IMDB:7,
    },
];

localStorage.setItem('movies',JSON.stringify(moviesData));


function moviesDisplay(moviesData){
    document.querySelector("#movies").innerText='';
    moviesData.forEach(function(movie){
        var box=document.createElement("div");

        var name=document.createElement("h3");
        name.innerText=movie.name;
        var rating=document.createElement("h5");
        rating.innerText="IMDB-Rating: "+movie.IMDB;
        
        var img=document.createElement("img");
        img.src=movie.poster_url;
        box.append(img,name,rating,);
        document.querySelector("#movies").append(box);
    });
    
}
//Sorting funtinality......

var filterData=JSON.parse(localStorage.getItem('movies'));
//console.log(filterData);


document.querySelector("#sorting").addEventListener("change",function(){
    event.preventDefault();
    var str=document.querySelector("#sorting").value;
   
     if(str==="none"){
         moviesDisplay(moviesData);
      }else{
         filterData.sort(function(a, b){
            console.log(str);
            //console.log((+Math.round(a.IMDB))-(+Math.round(b.IMDB)));
            if(str=="sort-lh"){
                return a.IMDB - b.IMDB;
            }
                return b.IMDB - a.IMDB;
        });
        moviesDisplay(filterData);

        }
 });
 moviesDisplay(moviesData);