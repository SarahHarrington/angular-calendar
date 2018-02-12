myApp.controller('CalendarController', function(CalendarService){
    console.log('CalendarController created');
    var vm = this;

    vm.today = moment();
    vm.currentMonth = moment().month();
    console.log(vm.currentMonth)

    vm.numDaysInCurrentMonth = moment().daysInMonth(vm.currentMonth);
    console.log(vm.numDaysInCurrentMonth);

    vm.currentMonthArray = [];

    function CalendarDay(date) {
        this.date = date;
    }

    function pushDaysToCalendar(numDaysInCurrentMonth) {
        console.log('in the push function')
        for (let i = 1; i <= numDaysInCurrentMonth; i++) {
            vm.currentMonthArray.push(new CalendarDay(i))
        }
    }

    pushDaysToCalendar(vm.numDaysInCurrentMonth);

    console.log(vm.currentMonthArray);

})