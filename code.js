{   
    elevatorHelper: function(elevator, floors) {
        function ElevatorHelper(elevator, floors) {
            this.elevator = elevator;
            this.floors = floors;

        }

        ElevatorHelper.prototype.getNextFloor = function () {
            console.log(elevator);
            var currentFloor = this.elevator.currentFloor();
            for (var i = 0, len = floors.length; i < len; i++) {

            }
        }

        return new ElevatorHelper(elevator, floors);
    },

        init: function(elevators, floors) {
            var _this = this;
            
            elevators.forEach(function(elevator, index) {
                elevator.on("floor_button_pressed", function(floorNum) {
                    elevator.goToFloor(floorNum);
                });
                elevator.on('idle', function () {
                    elevator.goToFloor(0);
                    elevator.goToFloor(index);
                });
            });
            
            for(let i = 0, len = floors.length; i < len; i++) {
                //floors[i].on('up_button_pressed', onFloorButtonPressed(i));
                //floors[i].on('down_button_pressed', onFloorButtonPressed(i));
            }
            
            function onFloorButtonPressed(floorNum) {
                return function() {
                    var index = Math.round(Math.random());
                    elevators[index].goToFloor(floorNum)
                }
            }

        },
            update: function(dt, elevators, floors) {
                // We normally don't need to do anything here
            }
}
