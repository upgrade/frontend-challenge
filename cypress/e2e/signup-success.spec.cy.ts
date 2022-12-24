import signUpData from "../fixtures/signup.json";

describe("sign up - success", () => {
  it("passes", () => {
    cy.visit("/");

    // Start view
    const firstNameInput = cy.get('[data-id="first-name-input"]');
    const emailInput = cy.get('[data-id="email-input"]');
    const passwordInput = cy.get('[data-id="password-input"]');
    const startForm = cy.get('[data-id="start-form"]');

    firstNameInput.type(signUpData.firstName);
    emailInput.type(signUpData.email);
    passwordInput.type(signUpData.password);
    startForm.submit();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/more-info");
    });

    // More info view
    const colorSelect = cy.get('[data-id="color-select"]');
    const termsCheckbox = cy.get('[data-id="terms-checkbox"] > input');
    const moreInfoForm = cy.get('[data-id="more-info-form"]');

    colorSelect.select(signUpData.favoriteColor);
    termsCheckbox.check({ force: true });
    moreInfoForm.submit();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/confirmation");
    });

    // Confirmation view
    const showPasswordBtn = cy.get('[data-id="show-password-btn"]');
    showPasswordBtn.click();

    cy.contains('[data-id="first-name-value"]', signUpData.firstName);
    cy.contains('[data-id="email-value"]', signUpData.email);
    cy.contains('[data-id="password-value"]', signUpData.password);
    cy.contains('[data-id="color-value"]', signUpData.favoriteColor);
    cy.contains('[data-id="terms-value"]', signUpData.terms);

    const confirmationForm = cy.get('[data-id="confirmation-form"]');
    confirmationForm.submit();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/success");
    });
  });
});
