const user = {
    name: "Nelson",
    surname: "Teixeira",
    age: 23,
    isAdmin: true,
    isActive: true,
    courses: ["HTML", "CSS", "JS", "typescript"],
    address: {
        city: "Ribeira Grande",
        state: "RG",
        country: "Portugal"
    },  
    greeting() {
        console.log("Hello my name is ", this.name , this.surname);
    }
}
user.greeting();
console.log(user);
const computer = {
    motherboard: "ASUS",
    processor: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD",
    isOn: false,
    videocard: "NVIDIA GTX 1660",
    font:{
        name: "Dell",
        watts: 450,
        color: "Black"
    },
    ram:[
        {   
            name: "HyperX",
            size: "8GB"
        },
        {   
            name: "HyperX",
            size: "8GB"
        },
    ]
}

console.log("Computer specs:");
console.log("Motherboard:", computer.motherboard);
console.log("Processor:", computer.processor);
console.log("Video card", computer.videocard);
console.log("Font:", computer.font.name + " - " + computer.font.watts + "W");
console.log("RAM Modules:");
computer.ram.forEach((module, index) => {
    console.log(`   Module ${index + 1}: ${module.name} - ${module.size}`);
});

