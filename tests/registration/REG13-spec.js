import registrationPage from "../../pages/registrationPage";

const password = "!@#123QWEqwe";

describe("REG13 - User tried to register with existing email and failed registration ", () => {
  it("REG13 - User introduces the existent email", () => {
    registrationPage.registerNewUser(
      "Acceptance",
      "Tester",
      "millentrix.tester@gmail.com", // this email exists in DB
      password,
      password,
      "France"
    );
    expect(registrationPage.invalidEmail.getText()).toEqual(
      "Please enter a valid email"
    ); //expected result
  });
});
