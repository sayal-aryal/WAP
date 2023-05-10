"use strict";
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();

}

let user = {
    name: 'John',

    loginOk() {
        alert(`${this.name} logged in`)
    },
    loginFail() {
        alert(`${this.name} failed to logged in`)
    },
};


// Using Wrapper function.

askPassword(() => user.loginOk(), user.loginFail())

//Using bind Function 
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));


//Ask password using call method
"use strict";
function askPasswordUsingCall(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok.call(user);
    else fail.call(user);

}
askPasswordUsingCall(user.loginOk, user.loginFail);
"use strict";
function askPasswordUsingApply(ok, fail) {
    let password = prompt("Password?", "");
    if (password == "rockstar") ok.apply(user);
    else fail.apply(user);
}

askPasswordUsingApply(user.loginOk,user.loginFail);

