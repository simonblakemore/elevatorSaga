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
        var _this = this,
            elevator = elevators[0]; // Let's use the first elevator
        
        console.log(this.elevatorHelper);
        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() {
            // let's go to all the floors (or did we forget one?)
            //_this.elevatorHelper(elevator, floors).getNextFloor();
            
        });
        
        elevator.on("floor_button_pressed", function(floorNum) {
            // Maybe tell the elevator to go to that floor?
            elevator.goToFloor(floorNum);
        });
        
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}

