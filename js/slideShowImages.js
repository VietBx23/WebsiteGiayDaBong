var path = "images";
var hinh = new Array( "slideshow1_jpg","lideshow2_jpg","slideshow3_jpg","slideshow4_jpg","lideshow5_jpg","slideshow6_jpg","lideshow7_jpg","slideshow8_jpg","lideshow9_jpg","slideshow10_jpg" );
var index = 1;

function changeImage(){
var img = ["slideshow_1jpg","lideshow_2jpg","slideshow_3jpg","slideshow_4jpg","lideshow_5jpg","slideshow_6jpg","lideshow_7jpg","slideshow_8jpg","lideshow_9jpg","slideshow_10jpg" ];
    document.getElementById('imgs').src=img[index];
    index++;
    if(index==9){
        index = 0;
    }
    setInterval(changeImage,1000);
}

function next() {
    if (index < hinh.length - 1) {
        index++;
    } else {
        index = 0;d
    }
 document.getElementById("dem").innerHTML =   "Ảnh"+" "+ (index+1 ) + "/" + hinh.length;
    showhinh("images/" + hinh[index]);
     
}
function pre() {
    if (index <= 0) {
        index = hinh.length - 1;
    } else {
        index--;
    }
    document.getElementById("dem") .innerHTML ="Ảnh"+" "+ (index+1 )+"/" + hinh.length;
    showhinh("images/" + hinh[index]);
    
   
}
function showhinh(duongdan) {
    document.getElementById("view").src = duongdan;
}