// METHOD 1 - Adding eventListener to individual input Element , Method 2 will be the same as video's  
// document.querySelector("#spacing").addEventListener('input', function () {
//         // console.log("Spacing is : " + this.value);
//         document.documentElement.style.setProperty(`--spacing`, this.value + `px`);
//     }
// );

// document.querySelector("#blur").addEventListener('input', function () {
//         // console.log("Blur is : " + this.value);
//         document.documentElement.style.setProperty(`--blur`, this.value + `px`);
//     }
// );

// document.querySelector("#base").addEventListener('input', function () {
//         // console.log("Base is : " + this.value);
//         document.documentElement.style.setProperty(`--base`, this.value);
//     }
// );


// METHOD - 2- This is a more genereic and better method as we dont have to worry about each's unit
function executeTheChange(){
    // Suffix is the dataset-sizing attribute in all three inputBoxes,
    // We declare the unit of ranges as dataset-sizing attribute(Our custom attribute)
    // and so don't have to worry about units here , also we have used " || '' " because 
    // If any element don't have any data-sizing attribute , we assigned a blank string unit to
    // it e.g. color
    suffix = this.dataset.sizing || '';
    // We have use this.id because name of variables in CSS is same as there id
    document.documentElement.style.setProperty(`--${this.id}`,`${this.value}` + suffix);
    // console.log(this.id + " : " + this.value);
}

inputBoxes = document.querySelectorAll("input");
inputBoxes.forEach((inputBox) => {
    inputBox.addEventListener('input',executeTheChange);
});

// Adding Functionality in animation
document.querySelector("#img-animation").addEventListener('input',function(){
    document.querySelector("img").classList.toggle("animation");
});