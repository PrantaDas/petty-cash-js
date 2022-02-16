console.log('js added');

// calculating total expenses and balance
function firstCalculation(giveId){
    const income= document.getElementById(giveId);
    const incomeText=income.value;
    const incomeInNumber=parseFloat(incomeText);
    // income.value='';
    return incomeInNumber;
    
}
function costCalculation(first,second,third){
    const sum=first+second+third;
    return sum;
}


document.getElementById('btn-calculate').addEventListener('click',function(){
    // const income= document.getElementById('income-field');
    // const incomeText=income.value;
    // const incomeInNumber=parseFloat(incomeText);
    const myIncome=firstCalculation('income-field');
    const myFoodCost=firstCalculation('food');
    const myRentCost=firstCalculation('rent');
    const myClothCost=firstCalculation('clothes');

    const totalExpenseField=document.getElementById('total-expenses');
    // const totalExpenseFieldtext=totalExpenseField.innerText;
    // const totalExpenseFieldInNumber=parseFloat(totalExpenseFieldtext);
    const totalCost=costCalculation(myFoodCost,myRentCost,myClothCost);
    totalExpenseField.innerText=totalCost;

    const balanceField=document.getElementById('balance');
    const balanceLeft=myIncome-totalCost;
    balanceField.innerText=balanceLeft;
    
})

document.getElementById('btn-save').addEventListener('click',function(){

    const myIncome=firstCalculation('income-field');
    const myFoodCost=firstCalculation('food');
    const myRentCost=firstCalculation('rent');
    const myClothCost=firstCalculation('clothes');

    const totalExpenseField=document.getElementById('total-expenses');
    // const totalExpenseFieldtext=totalExpenseField.innerText;
    // const totalExpenseFieldInNumber=parseFloat(totalExpenseFieldtext);
    const totalCost=costCalculation(myFoodCost,myRentCost,myClothCost);
    totalExpenseField.innerText=totalCost;

    const balanceField=document.getElementById('balance');
    const balanceLeft=myIncome-totalCost;
    balanceField.innerText=balanceLeft;





    const savingField=firstCalculation('save');
    console.log(savingField);

    const savingResultField=document.getElementById('saving-ammount');

    const savingAmmount=parseFloat (balanceLeft)*savingField;
    const savingAmmount2=savingAmmount/100;

    const finalSaving=parseFloat(balanceLeft)-savingAmmount2;
    savingResultField.innerText=finalSaving;

    const finalBalance=document.getElementById('remaining-balance');
    const  currentBalance=balanceLeft-finalSaving;
    finalBalance.innerText=currentBalance;
})

