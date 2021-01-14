# StudentBatch

## Getting started for the backend

1. Clone the repository.

2. Cd into Backend.

3. install node modules.

4. create an .env file inside BackEnd directory and fill up the following information.

```
HOST=localhost
USER_NAME=username
PASSWORD=password
DATABASE=database
SOCKET_PATH=your_socket_path
```

5. Create the following tables in mysql.

```
CREATE TABLE Student (
    ID int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
```

```
CREATE TABLE Batch (
    ID int NOT NULL AUTO_INCREMENT,
    BatchName varchar(255) NOT NULL,
    PRIMARY KEY (ID)
);
```

```
CREATE TABLE Student (
    ID int NOT NULL AUTO_INCREMENT,
    StudentID int NOT NULL,
    BatchID int NOT NULL,
    PRIMARY KEY (ID),
    FOREIGN KEY (StudentID) REFERENCES Student(ID),
    FOREIGN KEY (BatchID) REFERENCES Batch(ID),
);
```

6. Insert some dummy data into the Batch.

7. Run `npm start` for production or `npm run dev` for development server.

8. Use localhost:8000 as a API endpoint.

## API endpoints

1.  Route: /student
    Method: GET
    Description: Get all the students

2.  Route: /batch
    Method: GET
    Description: Get all the batch

3.  Route: /studentbatch
    Method: GET
    Description: Get all the students enrolled in a particular batch.

4.  Route: /student
    Method: POST
    Description: Add a student.

5.  Route: /join?batch=someId&student=someId
    Method: POST
    Description: Add a student to a batch

## Getting started for the frontend

1. cd into the FrontEnd directory

2. install the node modules

3. Make sure taht the backend is running.

4. run `npm start`

5. Use the dashboard to interact with the database.
