function changeImage (imageUrl) {
 let newImageList = document.querySelectorAll("img");
for(let i = 0; i < newImageList.length; i++){
    let singleImage = newImageList[i]
    singleImage.src = imageUrl
}

}
changeImage("https://images.asos-media.com/products/quay-jezabell-inlay-occhiali-da-sole-rotondi-da-donna-marroni/200344235-1-pink")
