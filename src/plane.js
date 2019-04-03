function Plane(){
    this.landed = false;
};

Plane.prototype.land = function(){
    return this.landed = true;
};

Plane.prototype.isLanded = function () {
    return this.landed;
};
