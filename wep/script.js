const forElement = document.getElementById("saveTransaction");

forElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let transactionDescription = document.getElementById("transactionDescription").value;
    let transactionPrice = document.getElementById("transactionPrice").value;
    let transaction = {
        transactionDescription: transactionDescription,
        transactionPrice: transactionPrice
    };
    let transactionJson = JSON.stringify(transaction);
    // console.log(transactionJson);

    //mandar la transaccionJson al backend y guardarlos ahi
    fetch('http://localhost:3000/transactions', {
            method: 'Post',
            body: transactionJson
        })
        .then(x => console.log("hola"))
})

fetch("http://localhost:3000/transactions").then(x => x.json()).then(console.log);