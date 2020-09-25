import { LoginForm } from "./auth/LoginForm.js"
import { RegisterForm } from "./auth/RegisterForm.js"
import { Nutshell } from "./Nutshell.js"
import { getArticles, useArticles } from "./news/NewsProvider.js"
import { NewsList } from "./news/NewsList.js"

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
let credentials = {}

const loadUI = () => {
    if (sessionStorage.getItem("activeUser")) {
        credentials = sessionStorage.getItem("activeUser")
        Nutshell();
    } else {
        LoginForm();
        RegisterForm()
    }

}
loadUI()
getArticles()
NewsList()