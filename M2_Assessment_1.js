//Question 1
function Details(names, instituition, Github_username){
    return console.log("My name is "+names+", a student from "+instituition+" and my Github username is "+Github_username)
}
Details("Mogammad Luqmaan Samsodien","University of the Western Cape", "LuqS91")

//Question 2
function Roll_dice(){
    let dice = Math.floor(Math.random() * 13);
    if (dice == 1){console.log("Best Consumer Solution")}
    else if (dice == 2){console.log("Best Enterprise Solution")}
    else if (dice == 3){console.log("Best African Solution")}
    else if (dice == 4){console.log("Most Innovative Solution")}
    else if (dice == 5){console.log("Best Gaming Solution")}
    else if (dice == 6){console.log("Best Health Solution")}
    else if (dice == 7){console.log("Best Agricultural Solution")}
    else if (dice == 8){console.log("Best Educational Solution")}
    else if (dice == 9){console.log("Best Financial Solution")}
    else if (dice == 10){console.log("Best Hackathon Solution")}
    else if (dice == 11){console.log("Best South African Solution")}
    else if (dice == 12){console.log("Best Campus Cup Solution")}
    else {console.log("Huawei AppGallery Category 15")}
}
   
Roll_dice()

//Question 3
function create_file(file_name, content){
  const fs = require('fs');
  fs.writeFile(file_name, content, function(err){
    if(err){
        return console.log(err)
    }
   // return console.log(content)
  ;
})
}
function read_file(file_name){
  const fs = require('fs');
  fs.readFile(file_name, 'utf8', function(err,data){
    if(err){
        return console.log(err)
    }
    return console.log(data)
  ;
})
}

create_file("textfile.txt","The app that won the category for Best Campus Cup Solution was called Uniwise. The developer is Tebogo Serogole who is from Tswane University of Technology")
read_file("textfile.txt")



