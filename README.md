# b2bit selective process
![mockup-devices](https://user-images.githubusercontent.com/31330416/157741939-72d6c5f0-a7e5-4f32-b2b8-1006f6f001de.png)

## About this project
A simple login page developed at b2bit selective process using NextJS, TypeScript and Styled Components for styling. This app contains an authentication page that uses a JWT token to get user info from the server and display it on next page.

The main focus was to implement authentication and get data from an API provided by the company.

### User cases
#### 1. As a user, I want to have a sign in page, so I can have access to my profile
When the user clicks in the "Sign in" button, the application must send a request to the API with the information given by the user. If the request is successful, the user must be redirected to a page only accessible by authenticated users.

#### 2. As a user, I want to keep me signed in, so I don't need to put my credentials every time I open the system
When the user clicks in the "Sign in" button, the application must send a request to the API with the information given by the user. If the request is successful, the user tokens must be persisted in the LocalStorage.
> :warning: WARNING: store the user's token in LocalStorage is not the best of the practices. That said, use this only for this challenge :slightly_smiling_face:

#### 3. As a user, I want to have a feedback if I fill the wrong credentials, so I know that I did something wrong and can fix it
When the user clicks in the "Sign in" button, the application must send a request to the API with the information given by the user. If the request fails, the user must be prompted with a message saying that the request has failed.

#### 4. As a user, I want to have a home page with my personal information, so I can see my personal info
This is the page with the user information. Use the jwt access token you have received in the login page to fetch the user's info from the server. When your request succeeds, display the image just like the mockup presented above.

#### 5. As a user, I want to have a logout button, so when I am finished, I can log out of my account
In the upper right corner of the page, you will see a "Logout button". This button will remove any user credentials from Local Storage and redirect her to the original sign-in page. 

## Technologies and tools

- [ReactJS](https://reactjs.org/) as library
- [NextJS](https://nextjs.org/) as framework
- [TypeScript](https://www.typescriptlang.org/) as programming language
- [Styled Components](https://styled-components.com/) for styling
- [React Hook Form](https://react-hook-form.com/) for forms
- [Yup](https://github.com/jquense/yup) for form validation
- [React Toastify](https://github.com/fkhadra/react-toastify) for the warnings

## Figma
You can access the application layout in the Figma [prototype](https://www.figma.com/proto/m0ueEr8KxCUkT27JSIBC59/MATERIAL-B2BIT?node-id=1523%3A1156&scaling=min-zoom&page-id=1523%3A17&starting-point-node-id=1523%3A1156).

## Production
The application can be accessed [here](https://b2bit-selective-process.vercel.app/).

## Getting Started

### Requirements

To run this project in the development mode, you'll need to have:
- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)

### Installing

On terminal, clone de repository and go to the directory
```bash
$ git clone https://github.com/igoormichaeel/b2bit-selective-process.git
$ cd b2bit-selective-process
```
And execute the following command to install all de dependencies:

```bash
$ yarn
```

Then, to runs the app in the development mode, execute:

```bash
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
