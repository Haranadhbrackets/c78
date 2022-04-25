var images = ["download.png","IMG-20200109-WA0006.jpg","20210821_204724.jpg", "20220407_143950.jpg" , "20220330_161114.jpg"];
var names = ["Family Book","Haranadh Kanamarlapudi", "Bharathi Kanamrlapudi", "Aditya Kanamrlapudi", "Ananya Kanamrlapudi"];
var i = 0;
function update(){
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
 
    var updatedImage = images[i];
   
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
