picture_array =[];

var images = 
[ "https://image.shutterstock.com/image-vector/illustration-happy-family-260nw-1193440717.jpg",
"mumma.png", "daddy.png", "me.png", "sasha.png", "nanaji.png", "nanima.png"];

var names = 
[ "Family book", "Thripthy Nair", "Harish Kumar MV", "Kangana Harish",
 "Sasha Harish", "V.K.T. Nair", "Prasanna Nair"];

var i = 0;

function update(){
    i++;
    var numbers_of_family_members_in_array = 6
    if(i >numbers_of_family_members_in_array){
        i = 0;
    }

    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_image").innerHTML = updatedName;

}