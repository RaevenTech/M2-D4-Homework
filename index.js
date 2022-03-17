function changeImage (imageUrl) {
 let newImageList = document.querySelectorAll("img");
for(let i = 0; i < newImageList.length; i++){
    let singleImage = newImageList[i]
    singleImage.src = imageUrl
}

}
changeImage("https://images.asos-media.com/products/quay-jezabell-inlay-occhiali-da-sole-rotondi-da-donna-marroni/200344235-1-pink")


let waitingListName = " ";
function createWaiting() {
    let input = document.getElementsByName("inputName");

    for (let i = 0; i < input.length; i++) {
        let nameWaiting = input[i];
        waitingListName = nameWaiting.value;

    }
    document.getElementById("waitingUl").appendChild(document.createElement("li")).innerText = waitingListName;
}


function numberTotal() {

    let num = document.getElementById("inputNumber")
    let totalNum = num.value
    return totalNum

}

function addTeam() {

    let teamNumber = numberTeams()

    let teamList = document.getElementById("teamLists")
    for (i = 0; i < teamNumber; i++) {
        teamList.innerHTML += `
      <div>
          <h4>Team </h4>
          <ul class="list-group">
          </ul>
      </div> `
    }

}

function assignTo() {
    let uL = document.querySelectorAll(".list-group")
    let name = document.querySelectorAll("#waitingUl li")
    let list = document.createElement("li")
    let num = document.getElementById("inputNumber")
    let totNum = parseInt(numberTeams())
    let casual = Math.floor(Math.random() * totNum)
    let listName = Math.floor(Math.random() * name.length)
    let aName = name[listName]


    if ((uL[casual] === undefined) || (aName === undefined)) {
        alert(" NEW NAME  OR NEW TEAM REQUIRED")
    } else {
        list.innerText = name[listName].innerHTML
        uL[casual].appendChild(list)

    }
    name[listName].remove()

}


