(function(){
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var todo = new TodoService();

	var todos = todo.getTodos();

	
	$('#add').on('click', function(){

		var input = $('#input').val()
		todos.push(input)
		console.log(todos)

		update();

	})

	$('#todo').on('click', '.awesome', function(){
		var id = $(this).data("id");
		console.log(id)
		todos.splice(id, 1);
		update();
	})

	function update(){
		$('#todo-list').empty()
		$('#input').val('')
		for (var i = 0; i < todos.length; i++) {
			var template = `<ul class="todo-card list-inline"><li>
			<p class="smaller">${todos[i]}</p></li><li><i><button type="button" class="awesome fa fa-times" data-id="${i}">
</button></i>
			</li></ul>`
			
			$('#todo-list').append(template);
		}
	}
	
	
	
}())