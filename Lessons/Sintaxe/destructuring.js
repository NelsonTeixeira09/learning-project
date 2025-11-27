//  Destructuring assignment allows you to unpack values from arrays or properties from objects into distinct variables.

function main() {
    const player = {
                    name: "Nelson",
                    surname: "Teixeira",
                    isProgrammer: true,  
                    inventory: {
                                items : ["Sword", "Shield", "Potion"],
                                potions: [
                                    {type:"regeneration", duration:8},
                                    {type:"defense", duration:5}
                                ]
                            }
                    };
    // Destructuring the user object
    const { name :nickName, surname, isProgrammer } = player;   
    const { inventory: {potions,items } } = player;
    const { type: potionType1, duration: potionDuration1 } = potions[0];
    const { type: potionType2, duration: potionDuration2 } = potions[1];
    


    console.log("Name:", nickName);
    console.log("Surname:", surname);
    console.log("Is Programmer:", isProgrammer);
    console.log("Player Inventory:");
    console.log("Items:", items.join(", "));
    console.log("Potions:", Object.keys(potions).join(", "));
    console.log(`Potion 1: Type - ${potionType1}, Duration - ${potionDuration1}s`);
    console.log(`Potion 2: Type - ${potionType2}, Duration - ${potionDuration2}s`);

    // const colors = ["Red", "Green", "Blue"];
    // // Destructuring the colors array
    // const [firstColor, secondColor, thirdColor] = colors;   
    // console.log("Chosen Color:", secondColor);
    
}main();
    

