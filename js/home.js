//Add Money to the Account
// add money button inside the form

document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    //prevent page reload after the submit
    event.preventDefault();
   
    //get money to be added to the account

    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    //get the pin number 
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    //varyfi pin number

    if(pinNumberInput === '1234'){
        console.log('adding money to your account')

        //get the current balance

        const balance = document.getElementById('account-balance').innerText;
        console.log( balance);

        // add addmoney input with balace

        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(  newBalance)

        //update the balance in the dom

        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('failed to add money! plese try agin')
    }
} );



