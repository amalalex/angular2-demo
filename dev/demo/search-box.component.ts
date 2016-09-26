import {Component, Input} from '@angular/core';

@Component({
	moduleId: module.id,
	selector : 'search-box',
	templateUrl : 'search-box.component.html'

})
export class SearchBox {

	@Input('placeholder')
	text = 'Type your search';

	clear(input){
		console.log('clear called....');
		input.value ='';
	}

}