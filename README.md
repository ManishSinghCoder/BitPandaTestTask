# BitPandaTestTask


<div style="align-items:center">
  <img src="cover.png"><br>
    <h1> Take-Home Technical Exercise</h1>
</div>

Thank you for your application and participating in our technical assessment


As part of our hiring process, we have a take-home technical test designed to assess your development skills 

## Task Breakdown

We have provided you with a Management System application built with Nodejs, Express, Ejs and MongoDB. The current application has no Web3 functionality, and your goal is to add blockchain interactions to enhance the system.


The task is to enhance this system by integrating Web3 functionality into the application. You may choose to implement this integration in any part of the system.


## Requirements:

- Integrate Web3 functionality into the existing application where appropriate.

- Choose how and where to apply the features, it may be simple or complex.

- You are free to implement features from your past projects or something new.

- Feel free to use any libraries or tools you prefer (e.g., web3.js, ethers.js, Hardhat, etc.).

- Your code should be efficient and scalable.


- Provide detailed explanation of the changes you made, how they integrate with the existing system, and any challenges you faced.


## CodeBase

The codebase is a Management System application with various features 

`Users`: You can create 5 types of users based on the roles and permission - Admin, Sales, Inventory, Expense, and Servicing Manager. 

`Products`: You can create as many products as you want.

`Inventory`: List, add, edit and delete Products in the inventory

`Customers`: List of customers with balances. You can add, edit and delete customer information. 

`Sales`: You can add sales and delete them. 

`Dashboard`: From dashboard you can see the overview of Sales, Inventory, products, customers

## Setup Instructions:

```
git clone https://github.com/Tallentyre/take-home-dev-test
```

> Install Dependencies 

```
npm i --force
``` 



> import `db.users.json` file to your DB to get the following user (Admin role)



```
sysadmin@w3bstore.com | password: SuperPassword
```


> Running the App

```
npm start
```



## Submission

The code needs to be pushed to a public git repository of your choosing (e.g. GitHub, Bitbucket, Gitlab, etc)


Explanation on the added functionality , how it works, what we should look at, how we should run it, should be included in the README. You can include screenshot or screenrecordings


<hr><br>

## Functinality added:

> InSide `db.users.json` file I have added one more field wallet for user sign up with web3.

> Inside `AuthController.walletLogin` function I have added a new function to login user with wallet.

> Inside `UserController.create` function I have added to signup user with wallet.

> Create a `LoginWithWalletValidator` address validator.

> Update `userSchema` for signup with wallet.

> Added new route `router.post('/wallet-login', AuthController.walletLogin)` for login with wallet.

> Added a script inside `login.ejs` for signup with wallet.

> Inside DashBoard,navbar,viewuser added `wallet address` if user login with the wallet.

> Added .gitignore to avoid `node-modules`.


