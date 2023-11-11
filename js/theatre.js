const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = GENERAL_ADMISSION_TICKET_COST;

    if ((age <= 12) || (age >= 65)) {
        cost = CHILD_AND_SENIOR_TICKET_COST;
    }
    const isMatinee = prompt('Are you attending a matinee show?').toLocaleLowerCase();
    
    cost = applyMatineeDiscount(cost, isMatinee);
    
    alert('Your ticket will cost: $' + cost);
}

function applyMatineeDiscount(cost, isMatinee){
   
    if ((isMatinee === 'yes') || (isMatinee === 'y')) {
        return cost - MATINEE_DISCOUNT;
    }
    return cost;
}