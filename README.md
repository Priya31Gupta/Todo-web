<link rel="stylesheet" type="text/css" href="./style.css">
<b class="title">#Todo App NodeJs</b>
<br/>
Write APIs to perform operations on the table todo, with the following columns,<br/>
Todo Table 
<table border="2px solid black">
    <tr class="row">
        <td class="col">Column</td>
        <td>Type</td>
    </tr>
    <tr class="row">
        <td class="col">Id</td>
        <td>Integer</td>
    </tr>
    <tr class="row"> 
        <td class="col">Title</td>
        <td>Text</td>
    </tr>
    <tr class="row">
        <td class="col">Description</td>
        <td>Text</td>
    </tr>
    <tr class="row">
        <td class="col">Status</td>
        <td>Text</td>
    </tr>
    <tr class="row">
        <td class="col">Priority</td>
        <td>Text</td>
    </tr>
</table>

  - Possible values for `Priority` are `high`, `medium`, and `low`.<br/> <br/>
### API 1

#### Path: `/tasks/`

#### Method: `GET`

- **Scenario 1**

  - **Sample API**
    ```
    /tasks
    ```
  - **Description**:

    Returns a list of all todos 

  - **Response**

    ```
    {
        "task": [
            {
                "_id": "6498ad943cd69f107f8b03c0",
                "title": "Sample Task",
                "description": "This is a sample task",
                "priority": "high",
                "status": "done",
                "__v": 0
            }
        ],
        "total_pages": 1
    }
    ```

- **Scenario 2**
  - **Sample API**
    ```
    /tasks/filter/:title
    ```
  - **Description**:

    Returns todos with title given

  - **Response**

    ```
    {
        "task": {
            "_id": "6498ad943cd69f107f8b03c0",
            "title": "Sample Task",
            "description": "This is a sample task",
            "priority": "high",
            "status": "done",
            "__v": 0
        }
    }
    ```
- **Scenario 3**
  - **Sample API**
    ```
    /tasks/:id
    ```
  - **Description**:

    Returns todos with title id

  - **Response**

    ```
    {
        "task": {
            "_id": "6498ad943cd69f107f8b03c0",
            "title": "Sample Task",
            "description": "This is a sample task",
            "priority": "high",
            "status": "done",
            "__v": 0
        }
    }
    ```
#### Method: `POST`
- **Scenario 1**
  - **Sample API**
    ```
    /tasks
    ```
  - **Description**:

    Creates a new todo with given body

  - **Body**

    ```
    body: {
        "title": "Sample Task -2 ",
        "description":"This is a sample task -2",
        "status": "todo",
        "priority": "low"
    }
- **Scenario 3**
  - **Sample API**
    ```
    /tasks
    ```
  - **Description**:

    Creates a new todo with given body

  - **Body**

    ```
    body: { }
  - **Response**
    ```
        {
        "error": [
            {
                "msg": "Title is required"
            },
            {
                "msg": "Description is Required"
            },
            {
                "msg": "Priority is required"
            },
            {
                "msg": "Status is required"
            }
        ]
    }
    ```


#### Method: `PATCH`
- **Scenario 1**
  - **Sample API**
    ```
    /tasks/:id
    ```
  - **Description**:

    Updates the todo with given body fields

  - **Body**

    ```
    body: {
        "priority": "high"
    }
      
#### Method: `DELETE`
- **Scenario 1**
  - **Sample API**
    ```
    /tasks/:id
    ```
  - **Description**:
    ```
     Deletes the todo
    ```
<br/><br/>

#### Run Locally:
Clone the project: 
  
    git clone https://github.com/Priya31Gupta/Todo-web.git
 
  
Go to the project directory 

    cd Todo-Backend
Install the packages
    
    npm install / npm i
    
Start the Server

    npm start / nodemon start
