// METHOD 1 - Adding eventListener to individual input Element , Method 2 will be the same as video's  
document.querySelector("#spacing").addEventListener('input', function () {
        // console.log("Spacing is : " + this.value);
        document.documentElement.style.setProperty(`--spacing`, this.value + `px`);
    }
);

document.querySelector("#blur").addEventListener('input', function () {
        // console.log("Blur is : " + this.value);
        document.documentElement.style.setProperty(`--blur`, this.value + `px`);
    }
);

document.querySelector("#base").addEventListener('input', function () {
        // console.log("Base is : " + this.value);
        document.documentElement.style.setProperty(`--base`, this.value);
    }
);