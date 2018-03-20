var images1 = [

    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8lK-J-3K607Mot5EyROJPA6vGfq-K3tbxVpYgy2QAnCAE0owRwA"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-adFFpgoWmabd2LMB9Ggp_bpGlp1GyCju5EXTEDra82kMcNP2uw"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwc5EcagXi5fWtFPe55crpZ-kxSTAbLfe4qd84cKHcUHE7-5fO"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4IkFn2yCTmBvous-DKvoB0crLbTlNQrbayjX0m8eQUzMhABLK"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSUDRFOPeSoQf98ZSHk2IzFy3Z-eGlJhHCkROi_ctntdZ6cdU9Q"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHEk7gGZqw7_tj_b_uOVXfj08VsstynpOdSlx5uYF3_n_IHxaKAA"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzL0HpBbe9NmZ96qa5fUgmz0kwZ8GYJ8_IP2BgcsBl3NljQGellg"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7D70s4AXXC8K_P4N8aTa7kp-L4sTxfKbtys2bsPZUl7KTIlD3"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMhA32n8hlXxw8hxpuCJbB1wK9ykOY6INJzSxuR1jGi5HshASpA"
    }


];

var images2 = [
   
    {
        link: "images/mid2.png"
    },
    {
        link: "images/m3.png"
    },

]

var images3 = [{
        link: "images/b1.png"
    },
    {
        link: "images/b2.png"
    },
    {
        link: "images/b3.png"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i1uUk2zUTBFxsR7cwRgiYJemq5-Xa0UaCZ7u1AWklQDoaKUG"
    }

]


// function to initialize our carousel
function carouselInit() {
    $('.carousel').carousel({
      shift: 50,
    })

}

const carousel = $("<div class='carousel'>"); //create brand new carousel div element
$("#imagesRow1").append(carousel);
images1.forEach(function(result) {
    let pic = result.link;
    // pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    let newImage = $("<a class='carousel-item' href='#'>").append(
         "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage1'></div></a>"
        
        )
    carousel.append(newImage);

});

carouselInit()

images2.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow2").append(newImage)
});


images3.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow3").append(newImage)
});
