# Unit4_c4_privous_question

Create a user collection which has following fields

name => string, required: true
email => string, required: true
password => string, required: true
profile_photo_url => string, required: false
roles => array of strings, required: true ( Possible roles are :- "student", "ia", "teacher", "operations", "admin")
timestamps


Create a students collection which has following fields

student_code => string, required: true
batch => string, required: true
current_status => string, required: true, default: "active" ( Please Note :- other possible values are "inactive" or "in_disciplinary_action")
timestamps

Create a evaluations collection which has following fields

title => string, required: true
created_by => objectId (users collection), required: true
start_date => Date, required: true
end_date => Date, required: true
timestamps

Create a submissions collection which has the following fields

evaluation_id => objectId (evaluations collection), required: true
answered_by => objectId (students collection), required: true
status => string, required: true, default: "pending" ( Please Note :- other possible values are "submitted" or "partially_submitted" or "late")
submission_time => Date, required: true,
score => Number, required: false
assessed_by => objectId (users collection), required: false
submission_link => string, required: true ( Please Note :- this will be a file which will be submitted by the student )
timestamps 


Also allow the user to use register and login ( if user account is already created then they should be logged in else create the account and then log them in)

Create below endpoints

- post /users ( create different types of users based on roles with all details and from postman I will suggest creating 2 users with a given role for e.g :- 2 students, 2 ias, 2 teachers, etc.)
- post /evaluations ( create at least 2 evaluations with different dates (like you have every other week in coding) for the student with the details)
- post /submissions ( here the student will submit the solution and we also need submission link which will be a file upload so like we learnt in class you need to allow the file to be uploaded and you will store it on the server and the link will be saved submission_link field and the status of the submission needs to change to submitted if the entire submission is done.)

Please Note :- Now from this point on you need to decide what will be the route endpoints for the next tasks

- we need to find the number of students who submitted the evaluation on time ( Please Note :- we need the count of On time submissions )
- we need to do to categorisation of students for next unit so we need to make 4 sections :- Alphas, Bravos, Charlies and Deltas so the condition is as follows :-
    - all students who scored an average of over 7.5 in the 2 evaluations (c2 and c4) will be Deltas
    - all students who scored an average of over 5 in the 2 evaluations (c2 and c4) will be Charlies
    - all students who scored an average of over 3.5 in the 2 evaluations (c2 and c4) will be Bravos
    - all students who scored an average of over 2.5 in the 2 evaluations (c2 and c4) will be Alphas
    - all students who scored an average of below 2.5 in the 2 evaluations (c2 and c4) will be asked to repeat the unit
so you need to create an endpoint which can give these counts batch wise

PLEASE NOTE the following things :- 
- MVC architecture has to be followed.
- Create an atlas hosted database so that it becomes easy for us to test your code with data if we have to run your code.
- Don't spend too much time in creating dummy data .. we are interested in the logic and dummy data is for you guys to ensure if your code works properly but we are not interested in your dummy data.
- You are free to use google, package documentations and stack overflow during the evaluation but you cannot refer to any pre class or live class code.
- Before attempting the question, understand it properly and then attempt it.

BEST OF LUCK EVERYONE..
