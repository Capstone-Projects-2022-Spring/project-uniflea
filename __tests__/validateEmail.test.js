import { validateEmail } from '../src/screens/SignUpScreen/checkValidEmail'

test("email validation works", () => {
    expect(validateEmail("hagemanjosh@gmail.com")).toBe(false);
    expect(validateEmail("@temple.edu")).toBe(false);
    expect(validateEmail("Joshua.hageman@template.edu")).toBe(false);
    expect(validateEmail("Joshua.hageman@temple.edu")).toBeTruthy();
});