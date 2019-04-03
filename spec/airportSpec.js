describe('Airport does:', function(){
    var airport;

    beforeEach(function(){
        airport = new Airport();
        plane1 = {
            isLanded: function() {}
        };
        spyOn(plane1, "isLanded").and.returnValue(true);
        // plane1 = jasmine.createSpy('plane1');
        // plane1.isLanded = jasmine.createSpy('isLanded spy').andReturn(true);
    })

    describe('Hangar has a plane', function(){
        it("it has one plane", function(){
            airport.receive(plane1);
            expect(airport.hangar).toContain(plane1);
        });
    });

    describe('Airport can instruct plane to take off', function(){
        it('takes off a plane and removes from hangar', function(){
            airport.receive(plane1);
            airport.release(plane1);
            expect(airport.hangar).not.toContain(plane1);
        });
    });
});