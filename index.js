// write your code below!
function happyHolidays(){
  return "Happy holidays!"
}

function happyHolidaysTo(name){
  return 'Happy holidays, you!'
}

function happyHolidayTo(haliday,name){
  return "Happy Independence Day, you!"
}

function holidayCountdown(holiday,days){
  return `It's ${days} days until ${holiday}!`
}

 describe('holidayCountdown(holiday, days)', () => {
    it('returns "It\'s ${days} days until ${holiday}!"', () => {
      expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")