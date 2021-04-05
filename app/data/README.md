This directory stores all of the data for your app.

# "database" directory

All user data is stored in this directory. A user's app data goes into the `database/user-app-data` directory and their login details go into the `database/user-details` directory.

# "uploads" directory

When a user uploads a file, it's given a random name and put into this `uploads` directory.

# bootstrap.json

After a user signs up for your app, a copy of the data in the `bootstrap.json` file will be loaded into their data.

If a user signs up and you change this file afterwards, they won't get the updated data.

To see a user's current data, look in the `database/user-app-data` directory.

# global.json

Data in this file will be accessible from every layout, page, and partial template for every user.

Use it to specify global, unchanging data, like your app's name, navigation links, or any other static data that's globally accessible for all users.

