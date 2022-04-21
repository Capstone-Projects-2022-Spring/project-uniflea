export const validateEmail = (input) => {
    const validEmails = ["temple.edu", "drexel.edu", "pennstate.edu", "upenn.edu", "villanova.edu"];
    const valid = input.split("@");

    if (!valid[0]) {
        return false;
    }

    const uni = valid[valid.length-1];
    console.log("input------",input)
    if (validEmails.includes(uni) || input == "drexelstudenttheme@gmail.com") {
        return true;
    } else {
        return false;
    }
}

