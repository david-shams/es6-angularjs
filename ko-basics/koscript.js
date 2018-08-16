/// <reference path='node_modules/knockout/build/output/knockout-latest.debug.js' />

var viewModel = {
    fname: ko.observable('David'),
    lname: ko.observable('Shams'),
    handleClick: function(context, element, root){
        console.log(context, element, root);
        this.items.push('Name')
    },
    items: ko.observableArray([
        "David"
    ]),
    delete: function(index){
        console.log(index);
        this.items.remove(index);
    },
    model: ko.observable({
        fname: ko.observable('John'),
        lname: ko.observable('Doe'),
    }),
    names: ko.observableArray([
        {fname:'John', lname: 'Smith'},
        {fname:'Bob', lname: 'McDonald'},
        {fname:'Pete', lname: 'Moto'},
    ]),
    onClick: function(param){
        console.log(param)
    }
}
ko.applyBindings(viewModel)