const form = document.forms['todo'];

// It prevents the default behavior of the FORM
form.addEventListener('submit', addTask, false);

// This creates a task object 
function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    // Data variable is used here, so that JSON is sent to the server
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    // To send JSON, we need to add headers
    const headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    const request = new Request(url,{
        // POST request is used to send the data
        method: 'POST',
        header: headers,
        // BODY is where the data we want to send is placed
        body: data
    })
    // fetch() method is used to send the request and deal with the response
    // This creates a promise that resolves to a JSON object
    fetch(request)
    // json() method is used to create another promise that resolves to a JavaScript object
    .then( response => response.json() )
    // ID to mimic successfully saving the task to a database: in this case our fake TODO API
    .then( task => console.log(`Task saved with an id of ${task.id}`) )
    .catch( error => console.log('There was an error:', error))
}

// If we open the console and add a new task we will see a message like this:
// << Task saved with an id of 201