//Switch

var text;
choice = prompt("Enter option please");

switch (choice){
   case "a":
      text = "Option 1 selected";
      break

   case "b":
       text= "option 2 selected";
       break

   case "c":
      text ="Option 3 selected";
      break

   default:   //else
      text="Invalid option" 
      break
}

console.log(text)