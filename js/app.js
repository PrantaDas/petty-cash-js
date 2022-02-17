

// calculating total expenses and balance
function firstCalculation(giveId,errorId){
    const expense= document.getElementById(giveId);
    const expenseText=expense.value;
    const expenseInNumber=parseFloat(expenseText);
    if(isNaN(expenseInNumber)||expenseInNumber<0){
        document.getElementById(errorId).style.display='block';
    }
    
    else{
        document.getElementById(errorId).style.display='none';
        return expenseInNumber;
    }
    
}
// sum of three expenses
function costCalculation(first,second,third){
    const sum=first+second+third;
    return sum;
}

// total expense and balance update

document.getElementById('btn-calculate').addEventListener('click',function(){
   
    const myIncome=firstCalculation('income-field','error-message1');
    const myFoodCost=firstCalculation('food','error-message2');
    const myRentCost=firstCalculation('rent','error-message3');
    const myClothCost=firstCalculation('clothes','error-message4');

    const totalExpenseField=document.getElementById('total-expenses');


    
    const totalCost=costCalculation(myFoodCost,myRentCost,myClothCost);
    if(totalCost>myIncome){
        document.getElementById('error-message6').style.display='block';
    }
    else{
        totalExpenseField.innerText=totalCost;
        const balanceField=document.getElementById('balance');
        const balanceLeft=myIncome-totalCost;
        balanceField.innerText=balanceLeft;
        console.log(balanceLeft);
    }

    
    
})
// savings and remaining balance calculation

document.getElementById('btn-save').addEventListener('click',function(){

    const myIncome=firstCalculation('income-field','error-message1');
    const myFoodCost=firstCalculation('food','error-message2');
    const myRentCost=firstCalculation('rent','error-message3');
    const myClothCost=firstCalculation('clothes','error-message4');


    const totalExpenseField=document.getElementById('total-expenses');
 
    const totalCost=costCalculation(myFoodCost,myRentCost,myClothCost);

    totalExpenseField.innerText=totalCost;

    const balanceField=document.getElementById('balance');
    const balanceLeft=myIncome-totalCost;
    balanceField.innerText=balanceLeft;






    const savingField=firstCalculation('save','error-message9');
    if(isNaN(savingField)||savingField<0){
        document.getElementById('error-message9').style.display='block';
        document.getElementById('error-message8').style.display='none';
    }

   else{
    const savingResultField=document.getElementById('saving-ammount');

    const savingAmmount=myIncome*savingField;
    const savingAmmount2=savingAmmount/100;

    if(savingAmmount2>balanceLeft){
        document.getElementById('error-message8').style.display='block';
    }
    else{
        document.getElementById('error-message8').style.display='none';
        savingResultField.innerText=savingAmmount2;

        const finalBalance=document.getElementById('remaining-balance');
        const  currentBalance=balanceLeft-savingAmmount2;
        finalBalance.innerText=currentBalance;
    }
   }

})

