var Project = function (options) {
}
exports.Project = Project;

Project.prototype.connectClient = function (client) {

}
Project.prototype.disconnectClient = function (client) {

}
Project.prototype.setImage = function () {}
Project.prototype.setFP = function (coor1, coor2, coor3) {}
Project.prototype.setAction = function (action) {
	// switch (action.type) {
	// 	case ....
	// 		var pos = action.args.pos;
	// 		var tipo = action.args.type;
	// 		var colour = action args.colour;
	// 		var ang = action.args.ang;

	// 		var elem = new Element(tipo, color, angulo);
	// 		this.addElement(elem, pos);
	// 		break;
	// 	case "mover":
	// 		var idElem = action.args.IdElem;
	// 		var elem = this.elementos[idElem];


	// 		break;
	// 	default:
	// 		//error.
	// }
}
Project.prototype.addElement = function (element, pos ) {}
Project.prototype.moveElement = function (elemenet) {}
Project.prototype.removeElement = function () {}

Project.prototype.save = function () {}
Project.prototype.fork = function () {} 