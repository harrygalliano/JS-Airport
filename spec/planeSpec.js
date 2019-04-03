describe('plane', function(){
    var plane;

    beforeEach(function(){
        plane = new Plane();
    });

    describe('plane can land', function(){

        it('successfully lands', function(){
            expect(plane.land(plane)).toBe(true);
        });

    });


});