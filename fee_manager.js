//this fxn checks if fee is completed
//it takes the amount paid and retuns true/false
exports.isFeeCompleted=function(amountPaid){
    var standardFee= 1000000;
    if(amountPaid == standardFee){
        return true;
    }else{
        return false;
    }
    //return (amountPaid == standardFee) ? true:false
}
exports.getTotalFee = function(){
    return 1000000;
}