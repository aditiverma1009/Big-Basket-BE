# BigBasket-backend

Works with the bigBasket Frontend only.

Steps to run the entire project on your local (mac)-

1) Clone both repositories of BigBasket
2) npm install for both , setup postgres according to config file and run migrations.
3) npm start for backend and node server.js for frontend repository
4) Check the output on localhost:3000

-------------------------------------------

This project was made during an evaluation process which went for 24hrs straight.
The project teachnology stack includes -> 
1 ) Frontend- React , CSS, HTML and Javascipt
2 ) Backend- Nodejs
3 ) Database- Postgres

Problem statement:
Create an online grocery shopping portal

Screen 1:
1. User opens the app for the first time then populate the initial inventory list in your db from https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/inventory
2. Create UI as given in pictures to enable the user to select products from different categories
3. User can select 1 or more products of each item. Max selection can be available quantity for product in inventory.
4. Plus and Minus will update the quantity in the cart (do not need to make add to cart button). If 0 ensure item is removed from cart. Initial default selection for all items is 0
5. In case product available quantity is 0, show sold out card for the item
6. Items in each category should be sorted by availability. If sold out, they should be at the end of the list
7. Number of items in cart is to be total of all items including quantity of each item

Screen 2:
1. ​User can see list of items in cart
2. User cannot update the quantity from this page
3. User can delete item from cart, will delete all of the same items
4. On selecting Buy option update availability in db for all products bought
5. Validate before updating db, if availability changes, show error

Screen 3:
1. ​User can see list of past 10 orders placed with their details 
2. Orders should be shown in order of newest to oldest 

--------------------------------------------

**The output screens are available in screens folder.** 
