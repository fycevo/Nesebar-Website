function readMore() {
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("readMoreBtn");
    let flag = document.getElementById("endFlag");

    if (flag.style.display === "none") {
        flag.style.display = "inline";
        btnText.innerHTML = "Покажи още"; 
        moreText.style.display = "none";
        document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
    } else {
        flag.style.display = "none";
        btnText.innerHTML = "Покажи по-малко"; 
        moreText.style.display = "inline";
    }
}