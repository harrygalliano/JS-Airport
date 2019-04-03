function Airport(){
    this.hangar = [];
}

Airport.prototype.receive = function(plane){
    if (plane.isLanded){
        this.hangar.push(plane);
    } else {
        return 'Plane is not landed'
    }
};

Airport.prototype.release = function(plane){
    var release = this.hangar.indexOf(plane);
    this.hangar.splice(release);
    plane.landed = false;
};

Airport.prototype.planes = function () { return this.hangar }



